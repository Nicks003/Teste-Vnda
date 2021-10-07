'use strict';

  const gulp = require("gulp");
  const sass = require('gulp-sass')(require('sass'))
  const concat = require('gulp-concat');
  let cleanCSS = require('gulp-clean-css');
  const autoprefixer = require('gulp-autoprefixer');
  const rename = require('gulp-rename');
  const { series } = require("gulp");
  const minify = require('gulp-minify');
 
  
  sass.compiler = require("node-sass");

  gulp.task('sass', compilaSass)
  gulp.task('css', minifyCss);
  gulp.task('compress', compressJs);
  gulp.task('watch', watch);


  function compilaSass() {
    return gulp
        .src("src/scss/main.scss")
        .pipe(sass())
        .pipe(gulp.dest("src/css"))
  }

  function minifyCss() {
    return gulp.src('src/css/main.css')
    .pipe(cleanCSS())
    .pipe(rename('main.min.css'))
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9'))
    .pipe(concat('main.min.css'))
    .pipe(gulp.dest('dist/css'))
  }

  function compressJs() {
    return gulp.src("src/js/*.js")
    .pipe(minify({noSource: true}))
    .pipe(gulp.dest('dist/js'))
  }



  function watch() {
    gulp.watch(["src/scss/*.scss", "src/js/*.js"] , series(compilaSass, minifyCss, compressJs))
  }



  
