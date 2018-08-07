var gulp = require('gulp'),
minifyCSS = require('gulp-minify-css'),
sass = require('gulp-sass'),
livereload = require('gulp-livereload'),
connect = require("gulp-connect"),
rename = require("gulp-rename");

gulp.task('connect', function () {
    connect.server({
        root: "app",
        livereload: true,
    })
});

gulp.task('css', function() {
    return gulp.src('./app/css/css.sass')
    .pipe(sass())
    .pipe(livereload())
      .pipe(minifyCSS())
      .pipe(rename('style.min.css'))
      .pipe(gulp.dest('app/css/'))
      .pipe(connect.reload())
  });

gulp.task('html', function(){
    gulp.src('app/index.html')
    .pipe(connect.reload())
})
gulp.task('watch', function(){
    gulp.watch('./app/css/css.sass',['css'])
    gulp.watch('app/index.html',['html'])
})


gulp.task('default',['connect','html','css','watch'])