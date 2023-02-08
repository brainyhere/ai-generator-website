const path = require('path');



// craco.config.js
module.exports = {
    style: {
      postcss: {
        plugins: [
          require('tailwindcss'),
          require('autoprefixer'),
        ],
      },
    },
    webpack: {
        configure: (webpackConfig, { env, paths }) => {
            paths.appBuild = webpackConfig.output.path = path.resolve('docs');
            return webpackConfig;  // Important: return the modified config

        }
    }
  }