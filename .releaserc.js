module.exports = {
  "release": {
    "branch": "master",
    "verifyConditions": [
      "@semantic-release/changelog",
      "@semantic-release/npm",
      "@semantic-release/git",
      "@qiwi/semantic-release-gh-pages-plugin"
    ],
    "publish": [
      "@semantic-release/npm",
      "@semantic-release/github",
      [
        "@qiwi/semantic-release-gh-pages-plugin",
        {
          "src": "dist-storybook"
        }
      ]
    ]
  }
}