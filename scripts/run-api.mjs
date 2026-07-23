import { ensureSourceExtracted, run } from './common.mjs';

ensureSourceExtracted();
run('npm', ['run', 'build', '-w', 'apps/api']);
run('npm', ['run', 'start', '-w', 'apps/api']);
