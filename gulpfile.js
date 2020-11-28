const gulp = require('gulp'),
  webserver = require('gulp-webserver'),
  sass = require('gulp-sass'),
  useref = require('gulp-useref'),
  fileinclude = require('gulp-file-include');


var imgSrcFiles = ['assets/images/**/*'],
  fontSrcFiles = ['node_modules/@fortawesome/fontawesome-free/webfonts/*'],
  distPath = 'dist';


var sassConfig = {
  inputDirectory: 'assets/scss/**/*.scss',
  outputDirectory: 'assets/css',
  options: {
    outputStyle: 'expanded'
  }
};

gulp.task('copy-images', gulp.series(function () {
  return gulp.src(imgSrcFiles, {
    base: "."
  }).pipe(gulp.dest(distPath));
}));

gulp.task('copy-fonts', gulp.series(function () {
  return gulp.src(fontSrcFiles, {
    base: "./node_modules/@fortawesome/fontawesome-free/"
  }).pipe(gulp.dest(distPath + "/assets"));
}));

gulp.task('build-css', function () {
  return gulp
    .src(sassConfig.inputDirectory)
    .pipe(sass(sassConfig.options).on('error', sass.logError))
    .pipe(gulp.dest(sassConfig.outputDirectory));
});

gulp.task('build-html', gulp.series(function () {
  return gulp.src('./src/pages/*.html')
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(useref())
    .pipe(gulp.dest(distPath));
}));
gulp.task('build', gulp.series('build-css', 'copy-images', 'copy-fonts', 'build-html'));

gulp.task('watch', gulp.series(function () {
  gulp.watch('assets/scss/**/*.scss', gulp.series('build-css', 'build-html'));
  gulp.watch('src/**/*.html', gulp.series('build-html'));
}));


gulp.task('serve', gulp.parallel(
  'watch',
  gulp.series(
    'build',
    function () {
      gulp.src('./dist')
        .pipe(webserver({
          livereload: {
            enable: true,
            filter: function (fileName) {
              if (fileName.match(/.scss$/)) { // exclude all scss from livereload
                return false;
              } else {
                return true;
              }
            }
          },
          host: '127.0.0.1',
          port: 5151,
          directoryListing: false,
          open: true
        }));

    }
  )
));