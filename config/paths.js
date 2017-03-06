const path = require('path');
const fs = require('fs');

const appDirectory = fs.realpathSync(process.cwd());

function resolvePath(relativePath) {
      return path.resolve(appDirectory, relativePath);
}

module.exports = {
    context: resolvePath('src/'),
    appIndexJs: resolvePath('src/index.js'),
    appStyle: resolvePath('src/styles/main.scss'),
    govukTemplate: resolvePath('vendors/govuk/govuk-template.css'),
    govukFonts: resolvePath('vendors/govuk/fonts.css'),
    appHtml: resolvePath('public/index.html'),
    vendor: ['react', 'react-dom'],
    appBuild: resolvePath('build'),
    serverRendererJs: resolvePath('src/serverRenderer.js'),
    server: resolvePath('server')
}