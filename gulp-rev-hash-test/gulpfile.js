var gulp = require('gulp');
var rev = require('gulp-static-hash');
 
gulp.task('rev', function () {
    gulp.src(['app/index.html','app/views/**/*.html'],{ base: 'app' })
        .pipe(rev({
          asset:"app/"
        }))
        .pipe(gulp.dest('app/'));
});