// Initialise Modules
const gulp = require('gulp');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const rimraf = require('rimraf');

// JavaScript task: bundle all js files and transpile
gulp.task('js', () => {
	return gulp.src('./src/**/*.js')
	.pipe(concat('src.js'))
	.pipe(babel({
		presets: ['@babel/env']
	}))
	.pipe(gulp.dest('./dist'));
});

// Clean task: clean the dist folder
gulp.task('clean', cb => rimraf('./dist', cb));

// Default task
gulp.task('default', gulp.series('clean', 'js'));