# Contributing

## Testing

```
yarn test
```

## Publishing

Uses https://github.com/googleapis/release-please

- Commits should use https://www.conventionalcommits.org/en/v1.0.0/ syntax
- Commits to `main` trigger a release-please action which will generate a pull request
- Merges of release-please PRs will trigger a GitHub action that publishes to NPM
