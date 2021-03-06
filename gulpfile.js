const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');
const jade = require('gulp-jade');
const autoprefixer = require('gulp-autoprefixer');
const ghPages = require('gulp-gh-pages');

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
      .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
      .pipe(gulp.dest('public/assets/css'))
      .pipe(browserSync.stream())
      .pipe(gulp.dest('assets/css'));
});

gulp.task('deploy', () => {
  return gulp.src('./public/**/*')
    .pipe(ghPages());
});

gulp.task('default', ['serve']);
