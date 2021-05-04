'use strict';

const gulp = require('gulp');

/*view server*/
const browserSync = require('browser-sync').create();

/*scss, css*/
const sass = require('gulp-sass');
sass.compiler = require('node-sass');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const cssnano = require('gulp-cssnano');

/*오류 처리*/
const plumber = require('gulp-plumber');
const errorHandler = (error)=>{
    console.error(error.message);
    this.emit('end');
};
const plumberOption = {
    errorHandler: errorHandler,
};

const autoprefixBrowsers = ['> 0%', 'last 4 versions'];
const TASK_BASE_URL = `./wwwroot/pc/Common`;

// sass: sass컴파일러, px-->rem, autoprefixer 
gulp.task('sass', ()=>
    gulp
    .src(`${TASK_BASE_URL}/scss/**/*.scss`)
    .pipe(plumber(plumberOption))
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(
        sass({
            outputStyle: 'compressed', //[nested, compact, expanded, compressed]
            //indentType: 'tab',
            //indentWidth: 1,
        }).on('error', sass.logError)
    )
    .pipe(cssnano())
    .pipe(
        autoprefixer({
            browsers: autoprefixBrowsers,
            cascade: true,
        })
	)
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest(`${TASK_BASE_URL}/Css`))
    .pipe(browserSync.reload({ stream: true }))
);


gulp.task('watch', ()=> {

    browserSync.init({
        //logLevel: "debug",
        port : 3333,
        open: false,
        directory: true,
        server: './wwwroot/',
        browser: 'google chrome'
    });

    // watch sass
    gulp.watch(
        `${TASK_BASE_URL}/scss/**/*.scss`,
        gulp.series('sass')
    );

	gulp.watch('./wwwroot/**/*.html').on('change', browserSync.reload);
    gulp.watch('./wwwroot/**/*.js').on('change', browserSync.reload);
});

gulp.task('default', gulp.series('sass', 'watch')); 
