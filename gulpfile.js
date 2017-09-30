var gulp      = require('gulp');
var sass      = require('gulp-sass');
var nano      = require('gulp-cssnano');
var concat    = require('gulp-concat');
var uglify    = require('gulp-uglify');
var webserver = require('gulp-webserver');
var fileinclude = require('gulp-file-include');

var paths = {
  stylesSrc: 'assets/styles/app.scss',
  scriptsSrc: 'assets/scripts/app.js',
  stylesDest: './public/css',
  scriptDest: './public/js'
}

var server = {
  host: 'localhost',
  port: '8001'
}

gulp.task('styles', function(){
  return gulp.src([paths.stylesSrc])
              .pipe(sass())
              .pipe(nano())
              .pipe(gulp.dest(paths.stylesDest));
});

gulp.task('scripts', function(){
  return gulp.src([paths.scriptsSrc])
              .pipe(uglify())
              .pipe(gulp.dest(paths.scriptDest));
});

gulp.task('watch-build', function(){
  gulp.watch('assets/styles/**/*.scss', ['styles']);
  gulp.watch('assets/scripts/**/*.js', ['scripts']);
});

gulp.task('webserver', function() {
  gulp.src('.')
    .pipe(webserver({
      host: server.host,
      port: server.port,
      livereload: true,
      directoryListing: true,
      open: true
    }));
});

gulp.task('fileinclude', function() {
  gulp.src(['index.html'])
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(gulp.dest('./'));
});

gulp.task('default', ['styles', 'scripts', 'webserver', 'fileinclude']);
gulp.task('watch', ['default', 'watch-build']);
