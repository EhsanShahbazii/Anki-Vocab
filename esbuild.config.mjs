import * as esbuild from 'esbuild';
import * as fs from 'fs';
import * as path from 'path';

const isProduction = process.argv.includes('--production');
const isWatch = process.argv.includes('--watch');

async function build() {
  const distDir = path.resolve('dist');
  if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir, { recursive: true });
  }

  // Copy sql-wasm.wasm into dist/
  const wasmSrc = path.resolve('node_modules/sql.js/dist/sql-wasm.wasm');
  const wasmDest = path.resolve(distDir, 'sql-wasm.wasm');
  if (fs.existsSync(wasmSrc)) {
    fs.copyFileSync(wasmSrc, wasmDest);
    console.log('Copied sql-wasm.wasm to dist/');
  }

  // Copy codicons into dist/codicons/
  const codiconsSrcDir = path.resolve('node_modules/@vscode/codicons/dist');
  const codiconsDestDir = path.resolve(distDir, 'codicons');
  if (fs.existsSync(codiconsSrcDir)) {
    if (!fs.existsSync(codiconsDestDir)) {
      fs.mkdirSync(codiconsDestDir, { recursive: true });
    }
    fs.copyFileSync(path.join(codiconsSrcDir, 'codicon.css'), path.join(codiconsDestDir, 'codicon.css'));
    fs.copyFileSync(path.join(codiconsSrcDir, 'codicon.ttf'), path.join(codiconsDestDir, 'codicon.ttf'));
    console.log('Copied codicons to dist/codicons/');
  }

  const buildOptions = {
    entryPoints: ['src/extension.ts'],
    bundle: true,
    outfile: 'dist/extension.js',
    external: ['vscode'],
    format: 'cjs',
    platform: 'node',
    target: 'node18',
    sourcemap: !isProduction,
    minify: isProduction,
    logLevel: 'info',
  };

  if (isWatch) {
    const ctx = await esbuild.context(buildOptions);
    await ctx.watch();
    console.log('Watching for changes...');
  } else {
    await esbuild.build(buildOptions);
    console.log('Build completed successfully.');
  }
}

build().catch((err) => {
  console.error('Build failed:', err);
  process.exit(1);
});
