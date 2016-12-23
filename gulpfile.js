var
    gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserify = require('gulp-browserify');


var io = {
    src: "./assets/",
    dest: "./build/"
};


var css = {
    input: io.src + "css/main.scss",
    output: io.dest + "css/",
    watch: io.src + "css/**/*.*"
}


gulp.task("sass", function () {
    return gulp.src(css.input)
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(gulp.dest(css.output));
});


gulp.task('watch', ['sass'], function () {
    gulp.watch(css.watch, [ 'sass', 'browserify' ]);
    gulp.watch("app/**/*.js", [ "browserify", "sass" ]);
});

gulp.task("browserify", function () {
    gulp.src("app/index.js")
        .pipe(browserify({}))
        .pipe(gulp.dest(io.dest + "/"));
});