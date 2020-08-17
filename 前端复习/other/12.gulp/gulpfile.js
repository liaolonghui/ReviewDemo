const gulp = require('gulp');
const less = require("gulp-less");
const autoprefixer = require("gulp-autoprefixer");
const rename = require('gulp-rename');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');

gulp.task('styles', function() {
  return gulp.src('src/style/*.less')
        .pipe(less())
        .pipe(autoprefixer())
        .pipe(rename({ suffix: '.min' })) // .css前加前缀.min
        .pipe(gulp.dest('dist/style'))
});

gulp.task('scripts', function() {
  return gulp.src('src/js/*.js')
        .pipe(concat('app.js')) // 将js文件夹下的所有js文件合并至app.js
        .pipe(babel())
        .pipe(uglify())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('dist/js'))
});

//gulp.task('default',gulp.parallel('styles','scripts')); 并行执行
gulp.task('default',gulp.series('styles','scripts'));//按顺序执行
