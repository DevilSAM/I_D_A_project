import Vue from "vue";

// регистрируем компоненты
Vue.component('root-component', require('./components/RootComponent').default);
Vue.component('header-component', require('./components/HeaderComponent').default);
Vue.component('add-product-component', require('./components/AddProductComponent').default);
Vue.component('product-list-component', require('./components/ProductListComponent').default);
Vue.component('product-item-component', require('./components/ProductItemComponent').default);

new Vue({
    el: '#app',
});
