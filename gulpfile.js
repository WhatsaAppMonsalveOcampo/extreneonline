const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const postcss = require("gulp-postcss");
const cssnano = require("gulp-cssnano");
const autoprefixer = require("autoprefixer");
const purgecss = require("gulp-purgecss");
const pug = require("gulp-pug");
const rename = require("gulp-rename");
// const squoosh = require('gulp-libsquoosh');
const babel = require("gulp-babel");
const terser = require("gulp-terser");
const concat = require("gulp-concat");

// TODO--- PUG

const minified = false;
const renamePHP = false;
gulp.task("pugPages", () => {
	return (
		gulp
			.src("./src/pug/pages/*.pug")
			.pipe(
				pug({
					pretty: minified ? false : true,
				})
			)
			// .pipe(rename({
			//     extname: ".php"
			// }))
			.pipe(gulp.dest("./public"))
	);
});

gulp.task("cssPages", () => {
	var procesadores = [autoprefixer, cssnano];
	return gulp
		.src("./src/scss/scss pages/*.scss")
		.pipe(sass().on("error", sass.logError))
		.pipe(postcss(procesadores))
		.pipe(
			purgecss({
				content: ["./public/*.html"],
				css: ["./public/styles.css"],
				safelist: ["hamburguer--simple", "navbar--visible", "pointer-events-none", "contact-button--hiden", "animated-border", "navbar-header--hide", "navbar-header--small", "navbar-header--background"],
				FontFace: true,
				variables: false,
			})
		)
		.pipe(gulp.dest("./public/"));
});

// TODO--- COMPILAR JS CON BABEL

gulp.task("babel", () => {
	return gulp
		.src("./src/js/use/*.js")
		.pipe(concat("scripts-min.js"))
		.pipe(
			babel({
				presets: ["@babel/env"],
			})
		)
		.pipe(terser())
		.pipe(gulp.dest("./public"));
});
gulp.task("babelPages", () => {
	return gulp
		.src("./src/js/use/pages/*.js")
		.pipe(
			babel({
				presets: ["@babel/env"],
			})
		)
		.pipe(terser())
		.pipe(gulp.dest("./public"));
});

// TODO--- MINIFICAR IMAGENES DEFAULT


// gulp.task("imagemin", () => {
//     return gulp
//         .src("src/galery/images/default/*")
//         .pipe(squoosh({
//             encodeOptions: {
//                 //   oxipng: {},
//                 webp: {},
//                 //   avif: {},
//                 //   mozjpg: {},
//             },
//             preprocessOptions: {
//                 quant: {
//                     habilitado: true,
//                     numColors: 128,
//                 },
//                 resize: {
//                     enabled: false,
//                     width: 400,
//                     // width: Math.round(src.width / 2),
//                     // height: Math.round(src.height / 2),
//                 },
//             },
//         })
//         )
//         .pipe(gulp.dest("public/"));
//         // .pipe(gulp.dest("src/galery/images/default/*"));
// });

gulp.task("default", () => {
	gulp.watch("./src/pug/**/*.pug", gulp.series("pugPages"));
	gulp.watch("./src/scss/**/*.scss", gulp.series("cssPages"));
	gulp.watch("./src/js/use/*.js", gulp.series("babel"));
	gulp.watch("./src/js/use/pages/*.js", gulp.series("babelPages"));
});
