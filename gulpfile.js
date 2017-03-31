var gulp = require('gulp');
var uglify = require('gulp-uglify');
var babel = require('gulp-babel');
var concat = require('gulp-concat');
var uglifycss = require('gulp-uglifycss');

gulp.task('js', function () {
	return gulp.src('demo/vue-dual-list.js')
    .pipe(babel({
			presets: ['es2015']
		}))
		.pipe(uglify({ mangle: false }))
		.pipe(concat('vue-dual-list.min.js'))
		.pipe(gulp.dest('dist/js/'));
});

gulp.task('css', function () {
  gulp.src('demo/vue-dual-list.css')
    .pipe(uglifycss({
      "maxLineLen": 80,
      "uglyComments": true
    }))
		.pipe(concat('vue-dual-list.min.css'))
    .pipe(gulp.dest('dist/css/'));
});

gulp.task('default', ['css', 'js']);