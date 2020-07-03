# @srvycool/ds
> The design system for srvy.cool

![Main](https://github.com/srvycool/ds/workflows/Main/badge.svg)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/770880928e1d407b906818b7c84a1931)](https://www.codacy.com/gh/srvycool/ds?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=srvycool/ds&amp;utm_campaign=Badge_Grade)
[![This project is using Percy.io for visual regression testing.](https://percy.io/static/images/percy-badge.svg)](https://percy.io/srvycool/ds) 
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

## Development

```sh
$ > hub clone srvycool/ds
$ > cd ds

# Start Storybook locally
$ > yarn
$ > yarn start

# Run unit tests
$ > yarn test --watch
```

## Deployment

GitHub Actions is in place to release new versions. The workflow runs the unit tests, reports the code coverage report to [Codacy](https://www.codacy.com/), triggers visual regression tests in [Percy](https://percy.io) and finally pushes a new version to NPM.

## License

See [LICENSE.md](LICENSE.md)