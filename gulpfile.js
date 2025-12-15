const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const cleanCSS = require('gulp-clean-css');
const replace = require('gulp-replace');
const uglify = require('gulp-uglify');

function script (){
    return gulp.src('src/script/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./build/js'));
}

function styles() {
    return gulp.src('src/styles/main.scss')
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(cleanCSS({ level: 2 }))
        .pipe(replace(/\n+$/, ''))
        .pipe(gulp.dest('./build/css'));
}

function images() {
    return gulp.src('src/imagem/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./build/imagem'));
}

exports.default = gulp.parallel(styles, images, script);

exports.watch = function() {
    gulp.watch('src/styles/*.scss', gulp.parallel(styles));
    gulp.watch('src/script/*.js', gulp.parallel(script));
}