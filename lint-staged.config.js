// lint-staged.config.js
module.exports = {
  '*.{ts,tsx}': [
    () => 'tsc -p tsconfig.json --noEmit',
    'prettier --write',
    'eslint --fix',
    'jest --passWithNoTests --bail --findRelatedTests',
  ],
};
