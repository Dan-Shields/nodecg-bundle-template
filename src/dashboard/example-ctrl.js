import Vue from 'vue';
import Vuetify from 'vuetify';
 
import 'vuetify/dist/vuetify.min.css';
 
Vue.use(Vuetify);
Vue.use(NodeCGVue);
 
import ExampleCtrl from './components/example-ctrl.vue';
 
new Vue({
    render: h => h(ExampleCtrl)
}).$mount('#app');
