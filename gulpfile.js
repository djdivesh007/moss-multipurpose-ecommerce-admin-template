var gulp = require('gulp');
var webserver = require('gulp-webserver');
var	sass = require('gulp-sass');

var sassConfig = {
	inputDirectory: 'assets/scss/**/*.scss',
	outputDirectory: 'assets/css',
	options: {
		outputStyle: 'expanded'
	}
};
gulp.task('webserver', function() {
  gulp.src('./')
    .pipe(webserver({
      livereload: true,
      directoryListing: true,
      open: true
    }));
});

gulp.task('build-css', function() {
	return gulp
		.src(sassConfig.inputDirectory)
		.pipe(sass(sassConfig.options).on('error', sass.logError))
		.pipe(gulp.dest(sassConfig.outputDirectory));
});

gulp.task('watch', function() {
	gulp.watch('assets/scss/**/*.scss', ['build-css']);
});