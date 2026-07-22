import { ensureSourceExtracted, run } from './common.mjs';

ensureSourceExtracted();
run('npm', ['ci']);
run('npm', ['run', 'build', '-w', 'apps/web']);
