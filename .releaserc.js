module.exports = {
  release: {
    branch: 'master',
    plugins: [
      '@semantic-release/release-notes-generator',
      '@semantic-release/changelog',
      '@semantic-release/git',
      '@semantic-release/github',
      '@semantic-release/npm',
      [
        '@qiwi/semantic-release-gh-pages-plugin',
        {
          src: "dist-storybook"
        }
      ]
    ]
  }
}