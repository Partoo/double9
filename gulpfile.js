var argv         = require('minimist')(process.argv.slice(2));
var browserSync  = require('browser-sync');
var browserify   = require('browserify');
var cache        = require('gulp-cache');
var del          = require('del');
var gulp         = require('gulp');
var gutil        = require('gulp-util');
var gulpSequence = require('gulp-sequence');
var processhtml  = require('gulp-minify-html');
var prefix = require('gulp-autoprefixer');
var sass         = require('gulp-sass');
var streamify    = require('gulp-streamify');
var source       = require('vinyl-source-stream');
var imagemin = require('gulp-imagemin');
var uglify       = require('gulp-uglify');
var vueify =  require('vueify');
var watch        = require('gulp-watch');
var watchify     = require('watchify');
var prod         = gutil.env.prod;

var Config = {
      cache: (typeof argv.cache !== 'undefined' ? !!argv.cache : false),
}

var onError = function(err) {
  console.log(err.message);
  this.emit('end');
};

// bundling js with browserify and watchify
var b = watchify(browserify('./src/js/app', {
  cache: {},
  packageCache: {},
  fullPaths: true
}).transform(vueify)
  .on("error", function (err) {
      console.log("Error : " + err.message);
  })

);

gulp.task('js', bundle);
b.on('update', bundle);
b.on('log', gutil.log);

function bundle() {
  return b.bundle()
    .on('error', onError)
    .pipe(source('bundle.js'))
    .pipe(streamify(uglify()))
    .pipe(gulp.dest('./build/js'))
    .pipe(browserSync.stream());
}

// html
gulp.task('html', function() {
  return gulp.src('./src/templates/**/*')
    .pipe(processhtml())
    .pipe(gulp.dest('build'))
    .pipe(browserSync.stream());
});

// Images
gulp.task('images', function () {
    return gulp.src('./src/images/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./build/images'))
        .pipe(browserSync.stream());
});

// sass
gulp.task('sass', function() {
  return gulp.src('./src/scss/**/*.scss')
    .pipe(sass({outputStyle: 'compressed'}))
    .on('error', onError)
    .pipe(prefix('last 2 version', '> 5%', 'safari 5', 'ie 8', 'ie 7', 'opera 12.1', 'ios 6', 'android 4'))
    .pipe(gulp.dest('./build/styles'))
    .pipe(browserSync.stream());
});

// browser sync server for live reload
gulp.task('serve', function() {
  browserSync.init({
    server: {
      baseDir: './build'
    }
  });


  gulp.watch('./src/templates/**/*', ['html']);
  gulp.watch('./src/scss/**/*.scss', ['sass']);
  gulp.watch('./src/js/**/*', ['js']);
  gulp.watch('./src/images/**/*', ['images']);
});

// use gulp-sequence to finish building html, sass and js before first page load
gulp.task('default', gulpSequence(['html', 'sass', 'js','images'], 'serve'));