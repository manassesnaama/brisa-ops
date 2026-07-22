import * as nodeFs from 'node:fs';
import * as nodePath from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

export const rootDir = fileURLToPath(new URL('..', import.meta.url));
export const sourceDir = nodePath.join(rootDir, '.source');
export const archiveBase64Path = nodePath.join(rootDir, 'brisa-source.tar.gz.b64');
export const archivePath = nodePath.join(rootDir, 'brisa-source.tar.gz');

export function ensureSourceExtracted() {
  if (nodeFs.existsSync(sourceDir)) {
    return sourceDir;
  }

  const encoded = nodeFs.readFileSync(archiveBase64Path, 'utf8').replace(/s+/g, '');
  nodeFs.writeFileSync(archivePath, Buffer.from(encoded, 'base64'));
  nodeFs.rmSync(sourceDir, { recursive: true, force: true });
  nodeFs.mkdirSync(sourceDir, { recursive: true });
  execFileSync('tar', ['-xzf', archivePath, '-C', sourceDir], { stdio: 'inherit' });
  return sourceDir;
}

export function run(cmd, args, options = {}) {
  execFileSync(cmd, args, {
    stdio: 'inherit',
    cwd: sourceDir,
    env: {
      ...process.env,
      NODE_ENV: 'development',
      NPM_CONFIG_PRODUCTION: 'false',
    },
    ...options,
  });
}
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

export const rootDir = fileURLToPath(new URL('..', import.meta.url));
export const sourceDir = path.join(rootDir, '.source');
export const archiveBase64Path = path.join(rootDir, 'brisa-source.tar.gz.b64');
export const archivePath = path.join(rootDir, 'brisa-source.tar.gz');

export function ensureSourceExtracted() {
  if (fs.existsSync(sourceDir)) {
    return sourceDir;
  }

  const encoded = fs.readFileSync(archiveBase64Path, 'utf8').replace(/s+/g, '');
  fs.writeFileSync(archivePath, Buffer.from(encoded, 'base64'));
  fs.rmSync(sourceDir, { recursive: true, force: true });
  fs.mkdirSync(sourceDir, { recursive: true });
  execFileSync('tar', ['-xzf', archivePath, '-C', sourceDir], { stdio: 'inherit' });
  return sourceDir;
}

export function run(cmd, args, options = {}) {
  execFileSync(cmd, args, {
    stdio: 'inherit',
    cwd: sourceDir,
    env: {
      ...process.env,
      NODE_ENV: 'development',
      NPM_CONFIG_PRODUCTION: 'false',
    },
    ...options,
  });
}
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

export const rootDir = fileURLToPath(new URL('..', import.meta.url));
export const sourceDir = path.join(rootDir, '.source');
export const archiveBase64Path = path.join(rootDir, 'brisa-source.tar.gz.b64');
export const archivePath = path.join(rootDir, 'brisa-source.tar.gz');

export function ensureSourceExtracted() {
  if (fs.existsSync(sourceDir)) {
    return sourceDir;
  }

  const encoded = fs.readFileSync(archiveBase64Path, 'utf8').replace(/\s+/g, '');
  fs.writeFileSync(archivePath, Buffer.from(encoded, 'base64'));
  fs.rmSync(sourceDir, { recursive: true, force: true });
  fs.mkdirSync(sourceDir, { recursive: true });
  execFileSync('tar', ['-xzf', archivePath, '-C', sourceDir], { stdio: 'inherit' });
  return sourceDir;
}

export function run(cmd, args, options = {}) {
  execFileSync(cmd, args, { stdio: 'inherit', cwd: sourceDir, env: process.env, ...options });
}
