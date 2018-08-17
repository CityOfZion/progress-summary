# Contributing
Thank you for wanting to contribute to this project and taking your time to read this!

## How to contribute

If you haven't yet read the README, do take a few minutes to read the guidelines below. As an addition to those guidelines,
we would like to urge you to commit your work to a separate branch and submit a PR on the `development` branch.  
You won't be able to commit straight on `development` or `master` and your work will be reviewed!

Be sure to run `yarn test` or `npm run test` before submitting your work for review.

Aside from that, thanks again and have fun!

## Project guidelines
### Branches
* `master` and `development` are protected and require a PR with approved reviews for changes
* Use Conventional Commits' types for branches and camelCase the topic: `feat/ui`, `fix/login`, `chore/refactorHomePage`
* Use Squash Merge when merging to `development` and reference the pull request in the conventional commit message: `feat(ui): added responsive styling (#1)`
* Use Merge Commit when merging to `master` (also referencing the pull)

### Committing and versioning
This project adheres to [Semantic Versioning](https://semver.org/) and [Conventional Commits](https://conventionalcommits.org/). Don't forget to scope your commits!

We use the following types everywhere: `feat`, `fix`, `chore` and `docs`. Refactor and test commits are considered chores. We only use `BREAKING CHANGE` when pushing, surprise surprise, breaking changes from `development` to `master`.

Merging a `BREAKING CHANGE` commit to master corresponds with a Major version, `feat` with minor and `fix` with patch. Bundle your `chore` and `docs` commits with any of the previously mentioned types.

After every push to master, a corresponding tag should be created detailing all changes added to this new version in the summary and `CHANGELOG.md`. Version, dependency and Changelog updates happen on master from now on. **Don't forget to merge these back into `development`!**

### Changelogs
Speaking of changelogs! Only squashed commits on `development` should be added to the changelog (alongside dependency updates from master). Group these changes per version and then per type. Order your change types like this (*but only use what's applicable*):
* Documentation
* Chores
* Bug Fixes
* Features
* BREAKING CHANGES

You can find inspiration in this entry [here](https://github.com/conventional-changelog/conventional-changelog/blob/master/packages/conventional-changelog/CHANGELOG.md#100-2016-02-05).
