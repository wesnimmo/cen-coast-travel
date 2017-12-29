var gulp = require('gulp'),
imagemin = require('gulp-imagemin');

gulp.task('optimizeImages', function() {
	return gulp.src('./app/assets/images/**/*')
		.pipe(imagemin({
			progressive: true,
			interlaced: true,
			multipass: true
		}))
		.pipe(gulp.dest("./dist/assets/images"));
});


gulp.task('build', ['optimizeImages']);