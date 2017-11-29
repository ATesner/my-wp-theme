var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-csso');
var watch = require('gulp-watch');
var path = require('path');
var rename = require('gulp-rename');
var autoPrexifer = require('gulp-autoprefixer');

gulp.task('css', function(){
  return gulp.src(path.resolve(__dirname, 'sass', '**/*.scss'))
    .pipe(sass())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoPrexifer({
        browsers: ['last 2 versions'],
        cascade: false
    }))
    .pipe(minifyCSS())
    .pipe(rename(function(path){path.extname = '.min.css'}))
    .pipe(gulp.dest(path.resolve(__dirname, 'css')))
});

gulp.task('watch', function(){
    gulp.watch(path.resolve(__dirname, 'sass', '**/*.scss'), ["css"])
});

gulp.task('default', [ 'css', 'watch' ]);