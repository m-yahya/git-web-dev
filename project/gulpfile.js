const gulp = require('gulp'),
watch = require('gulp-watch'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars');

gulp.task('default', function () {
  console.log('index file is updated!');
});

gulp.task('html', () => {
  console.log('hi');
});

gulp.task('styles', ()=>{
  return gulp.src('./app/assets/styles/styles.css')
    .pipe(postcss([cssvars, autoprefixer]))
    .pipe(gulp.dest('./app/dist/styles'));

})

gulp.task('watch', ()=> {
  watch('./app/index.html', () => {
    gulp.start('html');
  });

  watch('./app/assets/styles/**/*.css', () =>{
    gulp.start('styles');
  })
})
