var gulp = require('gulp'),
    webserver = require('gulp-webserver'),
	sass = require('gulp-sass'),
    useref = require('gulp-useref');

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
		filter: function(fileName) {
			if (fileName.match(/.scss$/)) { // exclude all scss from livereload
				return false;
			} else {
				return true;
			}
		},
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

gulp.task('build', ['build-css'], function() {
    return gulp.src('*.html')
        .pipe(useref())
        .pipe(gulp.dest('dist'));
});