module.exports = (gulp, config, del) => {
  gulp.task('clean', function () {
    return del.sync(config.project.dest);
  });
};
