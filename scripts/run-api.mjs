import { ensureSourceExtracted, run } from './common.mjs';

ensureSourceExtracted();
run('npm', ['run', 'db:deploy', '-w', 'apps/api']);
run('npm', ['run', 'db:seed:prod', '-w', 'apps/api']);
run('npm', ['run', 'start', '-w', 'apps/api']);
