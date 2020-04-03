import Vue from 'vue'
import { Button, Select } from 'element-ui';
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

Vue.component(Button.name, Button);

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')