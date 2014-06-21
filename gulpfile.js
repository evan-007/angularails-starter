var gulp = require('gulp');
var connect = require('gulp-connect');
var clean = require('gulp-clean');
var ngmin = require('gulp-ngmin');
var usemin = require('gulp-usemin');
var uglify = require('gulp-uglify');
var minifyCss = require('gulp-minify-css');
var rev = require('gulp-rev');
var url = require('url')
var proxy = require('proxy-middleware')

gulp.task('connect', function(){
	connect.server({
		root: './app'
	});
});

gulp.task('clean', function(){
	return gulp.src('build', {read: false})
	.pipe(clean());
});

gulp.task('format-js', function(){
	return gulp.src(['app/*.js', 'app/**/*.js'])
	.pipe(ngmin())
	.pipe(gulp.dest('app'));
});

gulp.task('usemin', function() {
	return gulp.src('./app/index.html')
	.pipe(usemin({
		css: [minifyCss(), 'concat', rev()],
		js: [uglify(), rev()]
	}))
	.pipe(gulp.dest('build/'));
});