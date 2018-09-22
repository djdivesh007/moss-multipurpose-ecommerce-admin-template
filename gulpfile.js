var gulp = require('gulp'),
    webserver = require('gulp-webserver'),
	sass = require('gulp-sass'),
    useref = require('gulp-useref'),
    gulpCopy = require('gulp-copy');


var imgSrcFiles = [ 'assets/images/**/*'],
    fontSrcFiles = [ 'node_modules/@fortawesome/fontawesome-free/webfonts/*'],
	distPath = 'dist'
;


var sassConfig = {
	inputDirectory: 'assets/scss/**/*.scss',
	outputDirectory: 'assets/css',
	options: {
		outputStyle: 'expanded'
	}
};

gulp.task('webserver', ['watch'] , function() {
  gulp.src('./')
    .pipe(webserver({
		livereload: {
			enable: true,
			filter: function(fileName) {
				if (fileName.match(/.scss$/)) { // exclude all scss from livereload
					return false;
				} else {
					return true;
				}
			}
		},
		directoryListing: false,
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

gulp.task('copy-images', function() {
	return gulp.src(imgSrcFiles,{base:"."}).pipe(gulp.dest(distPath));
});

gulp.task('copy-fonts', function() {
	return gulp.src(fontSrcFiles,{base:"./node_modules/@fortawesome/fontawesome-free/"}).pipe(gulp.dest(distPath+"/assets"));
});

gulp.task('copy-fonts:dev', function() {
	return gulp.src(fontSrcFiles,{base:"./node_modules/@fortawesome/fontawesome-free/"}).pipe(gulp.dest("./assets"));
});

gulp.task('build', ['build-css','copy-images','copy-fonts'], function() {
    return gulp.src('*.html')
        .pipe(useref())
        .pipe(gulp.dest(distPath));
});