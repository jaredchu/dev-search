const {mix} = require('laravel-mix');

mix.js('assets/js/index.js', 'public/js')
    .sass('assets/css/style.scss', 'public/css')
    .extract(['jquery', 'vue', 'axios']);
