import gulp from "gulp";
import {path} from "./gulp/config/path.js";
import {plugins} from "./gulp/config/plugins.js";
import { configFeatures } from "./gulp/config/features.js";

global.app = {
    isBuild: process.argv.includes('--build'),
    isDev: !process.argv.includes('--build'),
    path: path,
    gulp: gulp,
    plugins: plugins
}

import { copy } from "./gulp/tasks/copy.js";
import {reset} from "./gulp/tasks/reset.js";
import { html } from "./gulp/tasks/html.js";
import { server } from "./gulp/tasks/server.js";
import { scss } from "./gulp/tasks/scss.js";
import {js} from "./gulp/tasks/js.js";
import { images } from "./gulp/tasks/images.js";
import { otfToTtf, ttfToWoff, fontStyle } from "./gulp/tasks/fonts.js";
import { svgSprive } from "./gulp/tasks/svgSprive.js";
import { zip } from "./gulp/tasks/zip.js";
import { ftp } from "./gulp/tasks/ftp.js";
import { admin } from "./gulp/tasks/admin.js";

function watcher(){
    gulp.watch(path.watch.files, copy);
    gulp.watch(path.watch.html, html);
    gulp.watch(path.watch.scss, scss);
    gulp.watch(path.watch.js, js);
    gulp.watch(path.watch.images, images);
    configFeatures.useAdminPanel ? gulp.watch(path.watch.admin, admin) : null;
}
export {svgSprive}

const fonts = gulp.series(otfToTtf, ttfToWoff, fontStyle);

const mainTasks = gulp.series(fonts, gulp.parallel(copy, html, scss, js, images));

const adminPanel = configFeatures.useAdminPanel ? gulp.series(admin) : gulp.series(html);

// * ScenarioBuild
const dev = gulp.series(reset, mainTasks, adminPanel, gulp.parallel(watcher, server));
const build = gulp.series(reset, mainTasks, adminPanel);
const deployZIP = gulp.series(reset, mainTasks, adminPanel, zip);
const deployFTP = gulp.series(reset, mainTasks, adminPanel, ftp);

// ScenarioExport
export {dev}
export {build}
export {deployZIP}
export {deployFTP}

// * buildScenario

gulp.task('default', dev);