const fs = require('fs');
const path = require('path');

// Configuration: whitelist of index.html files to KEEP (relative to repo root)
const DEFAULT_WHITELIST = [
  path.join('public','index.html')
];

const repoRoot = path.resolve(__dirname, '../..');
const backupsRoot = path.join(repoRoot, 'backups', 'index_htmls');

function findIndexHtml(startDir) {
  const results = [];
  const ignored = new Set(['node_modules', '.git', 'backups']);

  function walk(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const e of entries) {
      if (ignored.has(e.name)) continue;
      const full = path.join(dir, e.name);
      if (e.isDirectory()) {
        walk(full);
      } else if (e.isFile() && e.name.toLowerCase() === 'index.html') {
        results.push(full);
      }
    }
  }

  walk(startDir);
  return results;
}

function relative(p) {
  return path.relative(repoRoot, p).split(path.sep).join('/');
}

function ensureDir(d) {
  if (!fs.existsSync(d)) fs.mkdirSync(d, { recursive: true });
}

function moveToBackup(filePath, destRoot) {
  const rel = relative(filePath);
  const dest = path.join(destRoot, rel);
  ensureDir(path.dirname(dest));
  fs.renameSync(filePath, dest);
  return dest;
}

function main() {
  const args = process.argv.slice(2);
  const whitelist = new Set(DEFAULT_WHITELIST.map(p => path.normalize(path.join(repoRoot, p))));
  if (args.includes('--keep-src-only')) {
    // default is already src only
  } else if (args.includes('--keep-build')) {
    whitelist.add(path.normalize(path.join(repoRoot, 'build', 'index.html')));
  } else if (args.includes('--keep-docs')) {
    whitelist.add(path.normalize(path.join(repoRoot, 'docs', 'index.html')));
  }

  const found = findIndexHtml(repoRoot);
  if (found.length === 0) {
    console.log('No index.html files found.');
    return;
  }

  const ts = new Date().toISOString().replace(/[:.]/g, '-');
  const destRoot = path.join(backupsRoot, ts);
  ensureDir(destRoot);

  console.log('Found index.html files:');
  for (const f of found) console.log(' -', relative(f));

  for (const f of found) {
    const norm = path.normalize(f);
    if (whitelist.has(norm)) {
      console.log('Keeping', relative(f));
      continue;
    }
    try {
      const dest = moveToBackup(f, destRoot);
      console.log('Moved', relative(f), '->', path.relative(repoRoot, dest));
    } catch (err) {
      console.error('Failed to move', relative(f), err.message);
    }
  }

  console.log('Cleanup complete. Backups saved under', path.relative(repoRoot, destRoot));
  console.log('If you want different keep options:');
  console.log('  --keep-build    keep build/index.html as well');
  console.log('  --keep-docs     keep docs/index.html as well');
  console.log('  --keep-public-only   (default) keep only public/index.html');
}

if (require.main === module) main();
