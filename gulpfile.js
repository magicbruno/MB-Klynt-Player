const gulp = require('gulp');
const dest = require('gulp-dest');
const playerJSfiles = 'Player/js/**';
const playeCSSfiles = 'Player/css/player/**';
const jsDest = 'dist/Player/js/';
const cssDest = 'dist/Player/css/player/';

gulp.task('js', function () {
    return gulp
        .src(playerJSfiles)
        .pipe(gulp.dest(jsDest));
});

gulp.task('css', function () {
    return gulp.src(playeCSSfiles)
        .pipe(gulp.dest(cssDest));
});

gulp.task('resources', function () {
    return gulp.src('Resources/css/splashscreen.css')
        .pipe(gulp.dest('dist/Resources/css/'));
});



gulp.task('autoprefix', function () {
    var postcss = require('gulp-postcss');
    var sourcemaps = require('gulp-sourcemaps');
    var autoprefixer = require('autoprefixer');

    return gulp.src('./Resources/css/*.css')
        //.pipe(sourcemaps.init())
        .pipe(postcss([autoprefixer()]))
        //.pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./Resources/css/'));
});

gulp.task('default', ['js', 'css', 'autoprefix', 'resources']);