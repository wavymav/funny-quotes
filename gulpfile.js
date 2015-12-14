const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');
const jade = require('gulp-jade');

/**
 * Static Server + watching scss/html files
 */
gulp.task('serve', ['sass', 'jade'], () => {
    browserSync.init({
      server: './'
    });
    gulp.watch('assets/css/**', ['sass']);
    gulp.watch('./*.html').on('change', browserSync.reload);
    gulp.watch('*/**.jade', ['jade']);
});

/**
 * Compiles Jade to html
 */
gulp.task('jade', function() {
  return gulp.src('./*.jade')
    .pipe(jade({
      pretty: true
    }))
    .pipe(gulp.dest('./'));
});

/**
 * Compile sass into CSS & auto-inject into browsers
 */
gulp.task('sass', () => {
    return gulp.src('assets/css/main.scss')
      .pipe(sass())
      .pipe(gulp.dest('assets/css'))
      .pipe(browserSync.stream())
});

gulp.task('default', ['serve']);
