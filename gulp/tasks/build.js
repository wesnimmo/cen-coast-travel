// var gulp = require('gulp'),
// imagemin = require('gulp-imagemin'),
// del = require('del');

// gulp.task('deleteDistFolder', function() {
// 	return del("./dist");
// });

// gulp.task('optimizeImages', ['deleteDistFolder'], function() {
// 	return gulp.src('./app/assets/images/**/*')
// 		.pipe(imagemin({
// 			progressive: true,
// 			interlaced: true,
// 			multipass: true
// 		}))
// 		.pipe(gulp.dest("./dist/assets/images"));
// });

// gulp.task('usemin', function() {
// 	return gulp.src("./app/index.html")
// 	.pipe
// 		.pipe(gulp.dest("./dist"));
// });


// gulp.task('build', ['deleteDistFolder', 'optimizeImages']);