import {configFeatures} from "../config/features.js";
import fileinclude from "gulp-file-include";
import webpHtmlNosvg from "gulp-webp-html-nosvg";
import versionNumber from "gulp-version-number";

export const admin = () =>{
    return app.gulp.src(app.path.src.admin)
    .pipe(app.plugins.plumber(
        app.plugins.notify.onError({
            title: "HTML",
            message: "Error: <%= error.message%>"
        })
    ))
    .pipe(fileinclude())
    .pipe(app.plugins.replace(/@img\//g, '../img/'))
    .pipe(app.plugins.replace(/@html\//g, '../'))
    .pipe(app.plugins.if(
        app.isBuild,
        webpHtmlNosvg()
        )
    )
    .pipe(app.plugins.if(
        configFeatures.useCssJsVersions&&
        app.isBuild,
        versionNumber({
        'value': '%DT%',
        'append': {
            'key': '_v',
            'cover': 0,
            'to': [
                'css',
                'js',
            ]
        },
        'output': {
            'file': 'gulp/version.json'
        }
    })))
    .pipe(app.gulp.dest(app.path.build.admin))
    .pipe(app.plugins.browsersync.stream());
}