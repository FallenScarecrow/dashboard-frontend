const path = require('path');

const buildEslintCommand = filenames =>
  `pnpm lint --fix --file ${filenames.map(f => path.relative(process.cwd(), f)).join(' --file ')}`;

module.exports = {
  '*.{ts,tsx,css}': [buildEslintCommand],
};
