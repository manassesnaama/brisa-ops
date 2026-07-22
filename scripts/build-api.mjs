import { ensureSourceExtracted, run } from './common.mjs';

ensureSourceExtracted();
run('npm', ['ci']);
run('npm', ['run', 'db:generate', '-w', 'apps/api']);
run('npm', ['run', 'build', '-w', 'apps/api']);
