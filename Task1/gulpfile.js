const gulp           = require('gulp');
const less           = require('gulp-less');
const autoprefixer   = require('gulp-autoprefixer');
const LessAutoprefix = require('less-plugin-autoprefix');
const plumber        = require('gulp-plumber');
const notify         = require('gulp-notify');
const sourceMaps     = require('gulp-sourcemaps');
const browserify     = require('browserify');
const browserSync    = require('browser-sync').create();

const autoprefix = new LessAutoprefix({ browsers: ['last 10 versions','IE>=9']});

gulp.task('default',['css','html','watch']);

gulp.task('css',function () {
  return gulp.src('./style/app.less')
    .pipe(plumber({
      errorHandler: notify.onError('LESS error: <%= error.message %>')
    }))
    .pipe(sourceMaps.init())
    .pipe(less({
      plugins: [autoprefix]
    }))
    .pipe(autoprefixer({
      browsers:['last 10 versions','IE>=9']
    }))
    .pipe(sourceMaps.write())
    .pipe(gulp.dest('./style'))
    .pipe(browserSync.stream());
});
gulp.task('html',function () {
  return gulp.src('./views/index.html')
    .pipe(gulp.dest('./views'))
    .pipe(browserSync.stream());
});

gulp.task('watch',function () {
  browserSync.init({
    proxy:'localhost:8888',
    port:3003,
    open:false,
    notify:false
  });
  gulp.watch([
    'views/*',
    'views/**/*',
    'views/**/*.html'
  ],{cwd: './'},['html'],browserSync.reload)
    .on('change',browserSync.reload);
  gulp.watch([
    '*',
    '**/*',
    '**/*.less'
  ],{cwd: './style'},['css'],browserSync.reload)
    .on('change',browserSync.reload);
});