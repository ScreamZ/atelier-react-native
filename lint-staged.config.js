// Configure pre-commits hooks.
// Trigger linting on git commit (along with « husky » for npm)

// SEE ALSO
// https://github.com/okonet/lint-staged/pull/639
// https://github.com/okonet/lint-staged/issues/412

module.exports = {
  "*.{ts,tsx}": ["npm run typescript:lint", () => "npm run typescript:typescheck"]
};
