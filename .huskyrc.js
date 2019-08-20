// Register git hooks for pre-CI.

// Used if you need to pass an array of commands below.
const tasks = arr => arr.join(" && ");

module.exports = {
  hooks: {
    "pre-commit": "lint-staged"
    // "pre-push": "yarn test" // TODO: Fix tests before
  }
};
