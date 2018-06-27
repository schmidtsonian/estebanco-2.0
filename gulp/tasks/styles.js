module.exports = (gulp, config, browserSync, isProduction, plugins) => {
  gulp.task('styles', function () {
    return gulp
      .src(config.styles.src)
      .pipe(plugins.plumber())
      .pipe(plugins.if(!isProduction, plugins.sourcemaps.init()))

      .pipe(plugins.sass({outputStyle: 'compressed'})).on('error', plugins.sass.logError)
      .pipe(plugins.autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
      }))

      .pipe(plugins.if(!isProduction, plugins.sourcemaps.write('.')))
      .pipe(gulp.dest(config.styles.dest))
      .pipe(browserSync.stream());
  });
};
