import { ensureSourceExtracted, run } from './common.mjs';

ensureSourceExtracted();
run('npm', ['run', 'start', '-w', 'apps/api']);
