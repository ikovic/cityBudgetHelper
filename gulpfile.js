var gulp = require('gulp');
var react = require('gulp-react');
var autoprefixer = require('gulp-autoprefixer');
var babel = require('gulp-babel');
var concat = require('gulp-concat');
var notify = require('gulp-notify');
var newer = require('gulp-newer');
var filter = require('gulp-filter');
var plumber = require('gulp-plumber');
var sass = require('gulp-sass');

var path = {
    HTML: './src/views/index.html',
    ALL: ['./src/views/*.js', './src/views/**/*.js', './src/views/index.html'],
    JS: ['./src/views/*.js', './src/views/**/*.js'],
    MINIFIED_OUT: 'build.min.js',
    DEST_SRC: './public/src',
    DEST_BUILD: './public',
    DEST: 'dist'
};

var onError = function (err) {
    notify.onError({
        title: "Error",
        message: "<%= error %>"
    })(err);
    this.emit('end');
};

var plumberOptions = {
    errorHandler: onError
};

// Copy react.js and react-dom.js to assets/js/src/vendor
// only if the copy in node_modules is "newer"
gulp.task('copy-react', function () {
    return gulp.src('node_modules/react/dist/react.js')
        .pipe(newer('./public/react.js'))
        .pipe(gulp.dest('./public'));
});
gulp.task('copy-react-dom', function () {
    return gulp.src('node_modules/react-dom/dist/react-dom.js')
        .pipe(newer('./public/react-dom.js'))
        .pipe(gulp.dest('./public'));
});

// maybe do the same for redux

gulp.task('concat', ['copy-react'], function () {
    return gulp.src('./src/views/**/.js')
        .pipe(babel({
            only: [
                './src/views/**/.js'
            ],
            compact: false
        }))
        .pipe(concat('app.js'))
        .pipe(gulp.dest('./public/'));
});

// Compile Sass to CSS
gulp.task('sass', function () {
    var autoprefixerOptions = {
        browsers: ['last 2 versions']
    };

    var filterOptions = '**/*.css';

    var reloadOptions = {
        stream: true
    };

    var sassOptions = {
        includePaths: []
    };

    return gulp.src('assets/sass/**/*.scss')
        .pipe(plumber(plumberOptions))
        .pipe(sass(sassOptions))
        .pipe(autoprefixer(autoprefixerOptions))
        .pipe(gulp.dest('assets/css'))
        .pipe(filter(filterOptions));
});

// Watch JS/JSX and Sass files
gulp.task('watch', function () {
    gulp.watch('views/**/*.{js,jsx}', ['concat']);
    gulp.watch('views/**/*.scss', ['sass']);
});

gulp.task('watch', function () {
    gulp.watch(path.ALL, ['transform', 'copy']);
});

gulp.task('build', ['sass', 'copy-js-vendor', 'concat']);