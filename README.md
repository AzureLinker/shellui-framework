# GULP сборка от AzureLink
![GitHub release (latest by date including pre-releases)](https://img.shields.io/github/v/release/azurelinker/Gulp-ALink-Customs?color=brightgreen&include_prereleases&label=Version&style=flat-square)
![GitHub Depencies](https://img.shields.io/github/package-json/dependency-version/azurelinker/Gulp-ALink-Customs/gulp-cli?style=flat-square)
![GitHub NPM](https://img.shields.io/npm/v/npm?color=9cf&style=flat-square)
![GitHub Dev Depencies](https://img.shields.io/github/package-json/dependency-version/azurelinker/Gulp-ALink-Customs/dev/gulp?color=orange&style=flat-square)
![GitHub Dev Depencies](https://img.shields.io/github/package-json/dependency-version/azurelinker/Gulp-ALink-Customs/dev/browser-sync?color=orange&style=flat-square)
![GitHub Dev Depencies](https://img.shields.io/github/package-json/dependency-version/azurelinker/Gulp-ALink-Customs/dev/sass?color=orange&style=flat-square)
![GitHub Dev Depencies](https://img.shields.io/github/package-json/dependency-version/azurelinker/Gulp-ALink-Customs/dev/webpack?color=orange&style=flat-square)
![GitHub Dev Depencies](https://img.shields.io/github/package-json/dependency-version/azurelinker/Gulp-ALink-Customs/dev/webp-converter?color=orange&style=flat-square)
![GitHub Dev Depencies](https://img.shields.io/github/package-json/dependency-version/azurelinker/Gulp-ALink-Customs/dev/vinyl-ftp?color=orange&style=flat-square)
***
Данная сборка создана [ZianU](https://github.com/AzureLinker) для удобства верстания многостраничных сайтов.
### Запуск проекта
1. Поместить сборку в папку вашего проекта.
2. В терминале Git Bash перейти в папку проекта.
3. Для установки всех необходимых пакетов ввести в терминале команду `npm i`.
4. Писать код.
5. Для сборки проекта используются определённые команды.
***
### Команды
1. `npm run dev` - для сборки проекта в режиме разработчика.
2. `npm run svgSprive` - для сборки всех svg файлов.
3. `npm run build` - для сборки проекта в режиме продакшена.
4. `npm run zip` - для сборки проекта в режиме продакшена в .zip файл.
5. `npm run ftp` - для сборки проекта в режиме продакшена и загрузки его на удалённный ftp сервер.
6. `npm run deploy` - для сборки проекта в режиме продакшена и загрузки его на удалённный ftp сервер.
***
### Конфиги
В папке `gulp/config/` есть файл `features.js`. В нём можно переключать функции:
- `useAdminPanel` - если в вашем проекте есть админ-панель, то gulp сам создаст папку `admin/`, куда вы сможете собирать все нужные файлы. По умолчанию стоит `true`.
- `useCssJsVersions` - отвечает за то, добавлять ли к файлам css и js префикс версии в режиме продакшена. По умолчанию стоит `true`.
***
### Режимы сборки и их особенности
* Режим разработчика - в этом режиме после сборки файлов запускается сервер, изображения не дублируются в формате .webp, а .js и .css файлы не минимизируются для оптимизации. Также у .js и .css файлов не появляется префикс версии.
* Режим продакшена - полная обратность режиму разработчика. Главное отличие в том, что у .js и .css не создаются исходники для удобного просмотра.
* Загрузка на удалённый сервер требует следующие шаги:
    1. Необходимо зайти в файл `/gulp/config/ftp.js`.
    2. Отредактировать настройки по вашему ftp серверу.
***
### Пакеты, присутствующие в сборке:
* browser-sync - Создание сервера после сборки всего проекта.
* gulp - Сборщик GULP.
* gulp-autoprefixer - Добавления автопрефиксов к .js и .css файлам, например, версии.
* gulp-clean-css - Чистка css файлов для оптимизации.
* gulp-file-include - Сборщик HTML файлов.
* gulp-fonter - Обработка шрифтов.
* gulp-group-css-media-queries - Оптимизация медиа-запросов css.
* gulp-imagemin - Оптимизация изображений.
* gulp-notify - Уведомления об ошибках.
* gulp-sass - Обработчик .sass файлов.
* gulp-webp - Перевод изображений в формат .webp.
* gulp-babel - Плагин для обработки ECMA нового формата в ECMA старого.
