'use strict';

const gulp = require('gulp');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const cleanCSS = require('gulp-clean-css');
const imagemin = require('gulp-imagemin');
const sass = require('gulp-sass');

// Default task 
gulp.task('default', ['scripts', 'styles', 'copyHTML', 'imageMin', 'watcher' ]);

// Watcher
gulp.task('watcher', function(){
  gulp.watch('src/js/*.js', ['scripts'])
  gulp.watch('src/sass/*.scss', ['styles'])
  gulp.watch('src/*.html', ['copyHTML'])
  gulp.watch('src/img/*', ['imageMin'])
})

// Copy all HTML files from src/ to pub/
gulp.task('copyHTML', function(){
  return gulp.src('src/*.html')
  .pipe(gulp.dest('pub'));
});

// Concat and minify scripts
gulp.task('scripts', function(){
  return gulp.src('src/js/*.js')
  .pipe(concat('main.js'))
  .pipe(uglify())
  .pipe(gulp.dest('pub/js'));
});

// Translate SASS to CSS
gulp.task('styles', function(){
  return gulp.src('src/sass/*.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(cleanCSS())
  .pipe(gulp.dest('pub/css'));

})

// Minimizes images
gulp.task('imageMin', function(){
  return gulp.src('src/img/*')
  .pipe(imagemin())
  .pipe(gulp.dest('pub/img'));
});

/* Live reload not necessary since I am using VSC */