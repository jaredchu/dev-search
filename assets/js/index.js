Vue = require('vue');
axios = require('axios');
moment = require('moment');

Vue.filter('formatDate', function (value) {
    if (value) {
        return moment(value).format('DD/MM/YYYY hh:mm:ss')
    }
});

new Vue({
    el: '#app',
    data: {
        s: '',
        searchText: '',
        sofItems: [{title: 'Foo'},
            {title: 'Bar'}],
    },
    methods: {
        search: function () {
            const vue = this;
            vue.searchText = vue.s;
            vue.s = '';

            //get stackOverflowResult
            axios.get('https://api.stackexchange.com/2.2/search/advanced?order=desc&sort=votes&site=stackoverflow&q=' + vue.searchText)
                .then(function (response) {
                    vue.sofItems = response.data.items
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }
});