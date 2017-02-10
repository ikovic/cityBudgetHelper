const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const browserify = require('browserify');  // Bundles JS.
const del = require('del');  // Deletes files.
const babelify = require('babelify');  // Transforms React JSX to JS.
const source = require('vinyl-source-stream');

// source & build paths
const paths = {
  CSS_SRC: './src/client/**/*.scss',
  CSS_MAIN: './src/client/main.scss',
  CSS_BUILD: './public/css/',
  JS_MAIN: './src/client/app.js',
  JS_SRC: './src/client/**/*.js',
  JS_BUILD: './public/js'
};

// sass compile
gulp.task('styles', function () {
  gulp.src(paths.CSS_MAIN)
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(gulp.dest(paths.CSS_BUILD))
});

// Our JS task. It will Browserify our code and compile React JSX files.
gulp.task('js', function () {
  browserify(paths.JS_MAIN)
    .transform(babelify, {presets: ["es2015", "react"]})
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest(paths.JS_BUILD));
});

// Rerun the task when a file changes
gulp.task('watch', function () {
  gulp.watch(paths.CSS_MAIN, ['styles']);
  gulp.watch(paths.CSS_SRC, ['styles']);
  gulp.watch(paths.JS_SRC, ['js']);
});

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['watch', 'styles', 'js']);

// The production build task
gulp.task('prod', ['styles', 'js']);
