const { src, dest, watch, parallel, series } = require('gulp');
const { exec } = require('child_process');
const path = require('path');
const fs = require('fs');

const sass = require('gulp-dart-sass'),
	fileinclude = require('gulp-file-include'),
	cfg = require('./package.json').config,
	csso = require('gulp-csso'),
	concat = require('gulp-concat'),
	autoprefixer = require('gulp-autoprefixer'),
	browserSync = require('browser-sync').create(),
	terser = require('gulp-terser'),
	browserslist = ['> 1%, last 3 versions, not dead'];

// ===== HTML =====
function html() {
	return src([cfg.srcDir + '/*.html'])
		.pipe(
			fileinclude({
				prefix: '@@',
				basepath: '@file',
			})
		)
		.pipe(dest(cfg.outputDir))
		.pipe(browserSync.stream({ once: true }));
}

// ===== STYLES =====
function styles() {
	return src(cfg.srcDir + 'scss/**/*.{scss,sass}', { sourcemaps: true })
		.pipe(
			sass({
				outputStyle: 'expanded',
				silenceDeprecations: ['legacy-js-api'],
			}).on('error', sass.logError)
		)
		.pipe(
			autoprefixer({
				overrideBrowserslist: browserslist,
			})
		)
		.pipe(dest(cfg.outputDir + 'css', { sourcemaps: '.' }))
		.pipe(browserSync.stream({ once: true }));
}

// ===== MINIFIED STYLES =====
function stylesMin() {
	return src(cfg.srcDir + 'scss/**/*.{scss,sass}', { sourcemaps: false })
		.pipe(
			sass({
				outputStyle: 'compressed',
				silenceDeprecations: ['legacy-js-api'],
			}).on('error', sass.logError)
		)
		.pipe(
			autoprefixer({
				overrideBrowserslist: browserslist,
			})
		)
		.pipe(csso())
		.pipe(dest(cfg.outputDir + 'css'));
}

// ===== SCRIPTS =====
function scripts() {
	return src(cfg.srcDir + 'js/**/*.js')
		.pipe(concat('script.min.js'))
		.pipe(terser())
		.pipe(dest(cfg.outputDir + 'js'))
		.pipe(browserSync.stream({ once: true }));
}

// ===== IMAGES =====
function imageSync() {
	return src(cfg.srcDir + 'imgs/**/*', { encoding: false })
		.pipe(dest(cfg.outputDir + 'imgs'))
		.pipe(browserSync.stream({ once: true }));
}

// ===== BROWSER SYNC =====
function browsersync() {
	browserSync.init({
		server: {
			baseDir: cfg.outputDir,
		},
	});
}

// ===== WATCH =====
function watching() {
	watch([cfg.srcDir + 'scss/**/*.scss'], styles);
	watch([cfg.srcDir + 'js/**/*.js'], scripts);
	watch([cfg.srcDir + '/**/*.html'], html);
	watch([cfg.srcDir + 'imgs/**/*'], imageSync);
}

// ===== PRETTIER =====
async function loadPrettier() {
	const prettier = await import('gulp-prettier');
	return prettier.default;
}

async function pretty() {
	const prettier = await loadPrettier();
	return src(['src/**/*', '!src/imgs/**/*'])
		.pipe(prettier())
		.pipe(dest('src'));
}

// ===== REACT BUILD =====
function reactBuild(cb) {
	// Устанавливаем BUILD_PATH в docs и запускаем react-scripts build
	process.env.BUILD_PATH = 'docs';
	
	const buildProcess = exec('react-scripts build', {
		env: { ...process.env, BUILD_PATH: 'docs' }
	}, (error, stdout, stderr) => {
		if (error) {
			console.error(`Ошибка сборки: ${error}`);
			return cb(error);
		}
		console.log(stdout);
		if (stderr) console.error(stderr);
		cb();
	});
	
	buildProcess.stdout.pipe(process.stdout);
	buildProcess.stderr.pipe(process.stderr);
}

// ===== POST-PROCESS REACT BUILD =====
// Объединяем CSS файлы из static/css в один файл
function combineCSS(cb) {
	const cssDir = path.join(cfg.outputDir, 'static', 'css');
	if (!fs.existsSync(cssDir)) {
		console.warn('static/css directory not found, skipping CSS combination');
		return cb();
	}
	
	const cssFiles = cfg.outputDir + 'static/css/*.css';
	const cssMapFiles = cfg.outputDir + 'static/css/*.map';
	
	return src([cssFiles, '!' + cssMapFiles], { allowEmpty: true })
		.pipe(concat('main.css'))
		.pipe(csso())
		.pipe(dest(cfg.outputDir + 'css'))
		.on('end', () => {
			console.log('Combined CSS files into css/main.css');
			cb();
		});
}

// Объединяем JS файлы из static/js в один файл
function combineJS(cb) {
	const jsDir = path.join(cfg.outputDir, 'static', 'js');
	if (!fs.existsSync(jsDir)) {
		console.warn('static/js directory not found, skipping JS combination');
		return cb();
	}
	
	const jsFiles = cfg.outputDir + 'static/js/*.js';
	const jsMapFiles = cfg.outputDir + 'static/js/*.map';
	const jsLicenseFiles = cfg.outputDir + 'static/js/*.LICENSE.txt';
	
	return src([jsFiles, '!' + jsMapFiles, '!' + jsLicenseFiles], { allowEmpty: true })
		.pipe(concat('main.js'))
		.pipe(terser())
		.pipe(dest(cfg.outputDir + 'js'))
		.on('end', () => {
			console.log('Combined JS files into js/main.js');
			cb();
		});
}

// Копируем изображения если есть
function copyImages(cb) {
	const imgsDir = path.join(cfg.srcDir, 'imgs');
	if (!fs.existsSync(imgsDir)) {
		console.log('src/imgs directory not found, skipping image copy');
		return cb();
	}
	
	const imgsSrc = cfg.srcDir + 'imgs/**/*';
	return src(imgsSrc, { encoding: false, allowEmpty: true })
		.pipe(dest(cfg.outputDir + 'imgs'))
		.on('end', () => {
			console.log('Copied images to docs/imgs');
			cb();
		});
}

// Обновляем index.html чтобы ссылался на объединенные файлы
function updateIndexHtml(cb) {
	const indexPath = path.join(cfg.outputDir, 'index.html');
	
	if (!fs.existsSync(indexPath)) {
		console.warn('index.html not found, skipping update');
		return cb();
	}
	
	// Читаем homepage из package.json для правильных путей
	const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
	const homepage = packageJson.homepage || '/';
	const basePath = homepage.endsWith('/') ? homepage : homepage + '/';
	
	let html = fs.readFileSync(indexPath, 'utf8');
	
	// Удаляем ВСЕ старые ссылки на static файлы (с basePath и без, минифицированные и обычные)
	// Более агрессивное удаление - удаляем любые ссылки содержащие /static/
	html = html.replace(/<link[^>]*href="[^"]*\/static\/[^"]*"[^>]*>/g, '');
	html = html.replace(/<link[^>]*href="[^"]*\/static\/[^"]*"[^>]*\/>/g, '');
	html = html.replace(/<script[^>]*src="[^"]*\/static\/[^"]*"[^>]*><\/script>/g, '');
	html = html.replace(/<script[^>]*src="[^"]*\/static\/[^"]*"[^>]*\/>/g, '');
	html = html.replace(/<script[^>]*defer[^>]*src="[^"]*\/static\/[^"]*"[^>]*><\/script>/g, '');
	html = html.replace(/<script[^>]*defer[^>]*src="[^"]*\/static\/[^"]*"[^>]*\/>/g, '');
	// Также удаляем с любыми другими атрибутами
	html = html.replace(/<script[^>]*\/static\/[^"]*"[^>]*>/g, '');
	
	// Используем относительные пути для совместимости с GitHub Pages
	// Если homepage не корень, используем basePath, иначе относительные пути
	const cssPath = homepage === '/' ? './css/main.css' : basePath + 'css/main.css';
	const jsPath = homepage === '/' ? './js/main.js' : basePath + 'js/main.js';
	
	const cssLink = `<link href="${cssPath}" rel="stylesheet">`;
	const jsScript = `<script src="${jsPath}"></script>`;
	
	// Удаляем старые ссылки на наши объединенные файлы если они есть (на случай пересборки)
	html = html.replace(/<link[^>]*href="[^"]*\/css\/main\.css"[^>]*>/g, '');
	html = html.replace(/<script[^>]*src="[^"]*\/js\/main\.js"[^>]*><\/script>/g, '');
	html = html.replace(/<script[^>]*src="[^"]*\/js\/main\.js"[^>]*\/>/g, '');
	
	// Вставляем CSS перед закрывающим </head> (работает и с минифицированным HTML)
	if (!html.includes('css/main.css')) {
		html = html.replace('</head>', cssLink + '</head>');
		// Если не нашли, пробуем другой вариант
		if (!html.includes('css/main.css')) {
			html = html.replace(/<head[^>]*>/, '<head>' + cssLink);
		}
	}
	
	// Вставляем JS перед закрывающим </body> (работает и с минифицированным HTML)
	if (!html.includes('js/main.js')) {
		html = html.replace('</body>', jsScript + '</body>');
		// Если не нашли, пробуем другой вариант
		if (!html.includes('js/main.js')) {
			html = html.replace(/<body[^>]*>/, '<body>' + jsScript);
		}
	}
	
	// Также обновляем favicon если нужно
	if (html.includes('href="/favicon.svg"')) {
		const faviconPath = homepage === '/' ? './favicon.svg' : basePath + 'favicon.svg';
		html = html.replace('href="/favicon.svg"', `href="${faviconPath}"`);
	}
	
	fs.writeFileSync(indexPath, html, 'utf8');
	console.log(`Updated index.html with combined CSS and JS (basePath: ${basePath})`);
	cb();
}

// Создаем 404.html для GitHub Pages SPA поддержки
function create404Html(cb) {
	const indexPath = path.join(cfg.outputDir, 'index.html');
	const html404Path = path.join(cfg.outputDir, '404.html');
	
	if (!fs.existsSync(indexPath)) {
		console.warn('index.html not found, skipping 404.html creation');
		return cb();
	}
	
	// Копируем index.html в 404.html для GitHub Pages
	// GitHub Pages будет использовать 404.html для всех несуществующих путей
	const indexContent = fs.readFileSync(indexPath, 'utf8');
	fs.writeFileSync(html404Path, indexContent, 'utf8');
	console.log('Created 404.html for GitHub Pages SPA support');
	cb();
}

// Удаляем папку static и ненужные файлы после объединения
function removeStatic(cb) {
	const staticDir = path.join(cfg.outputDir, 'static');
	if (fs.existsSync(staticDir)) {
		fs.rmSync(staticDir, { recursive: true, force: true });
		console.log('Removed static directory');
	}
	
	// Удаляем asset-manifest.json если есть (он не нужен для статической сборки)
	const manifestPath = path.join(cfg.outputDir, 'asset-manifest.json');
	if (fs.existsSync(manifestPath)) {
		fs.unlinkSync(manifestPath);
		console.log('Removed asset-manifest.json');
	}
	
	cb();
}

// ===== CLEANUP INDEX.HTML =====
function cleanupIndexHtml(cb) {
	// Очищаем лишние index.html файлы, оставляя только public/index.html и docs/index.html
	const cleanupScript = exec('node ./helpers/scripts/cleanup_indexhtml.js --keep-docs', (error, stdout, stderr) => {
		// Игнорируем ошибки, так как скрипт может не найти файлы для удаления
		if (stdout) console.log(stdout);
		if (stderr && !stderr.includes('ENOENT')) console.error(stderr);
		cb(); // Всегда вызываем cb, даже если были ошибки
	});
	
	cleanupScript.stdout.pipe(process.stdout);
	cleanupScript.stderr.pipe(process.stderr);
}

// ===== EXPORT TASKS =====
exports.format = pretty;
exports.cssmin = stylesMin;
exports.react = reactBuild;
exports.combineCSS = combineCSS;
exports.combineJS = combineJS;
exports.updateIndex = updateIndexHtml;
exports.default = parallel(html, styles, scripts, imageSync, watching, browsersync);
// Основная сборка: React -> объединение CSS/JS -> обновление index.html -> создание 404.html -> очистка
exports.build = series(
	reactBuild, 
	parallel(combineCSS, combineJS, copyImages),
	updateIndexHtml,
	create404Html,
	removeStatic,
	cleanupIndexHtml
);
exports.buildStatic = parallel(html, stylesMin, scripts, imageSync); // Статическая сборка (если нужна)
