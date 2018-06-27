module.exports = (gulp, config, browserSync, isProduction, plugins) => {
  gulp.task('scriptsWebpack', function () {
    return gulp
      .src(config.scripts.src)
      .pipe(plugins.webpackStream({
        cache: true,
        entry: {
          app: ['./src/scripts/app.js'],
          vendor: ['jquery', 'gsap', 'lodash', 'hammerjs', 'babel-polyfill'],
        },
        output: {
          filename: '[name].js'
        },
        module: {
          loaders: [
            {
              test: /\.js$/,
              loader: 'babel-loader',
              query: {
                presets: [config.scripts.presets],
                cacheDirectory: true,
                compact: false
              }
            }
          ]
        },
        devtool: isProduction ? false : 'eval-source-map',
        plugins: [
          new plugins.webpackStream.webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            hammerjs: 'hammerjs',
          }),
          // new plugins.webpack.optimize.UglifyJsPlugin({
          //   compressor: {warnings: false},
          //   output: {comments: false},
          // }),
        ]
      }))
      .pipe(gulp.dest(config.scripts.dest))
      .pipe(browserSync.stream());
  });
};
