import replace from "gulp-replace"; // Замена
import plumber from "gulp-plumber"; // ! Ошибки
import notify from "gulp-notify"; // * Уведомления
import browsersync from "browser-sync"; // * Сервак
import newer from "gulp-newer"; // * Обновление картинки
import ifPlugin from "gulp-if"; // * Условное ветвление

export const plugins = {
    replace: replace,
    plumber: plumber,
    notify: notify,
    browsersync: browsersync,
    newer: newer,
    if: ifPlugin
}