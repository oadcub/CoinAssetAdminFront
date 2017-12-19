import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './store/store'
import App from './App'
import routes from './routes'
import BootstrapVue from 'bootstrap-vue'

Vue.use(VueRouter)
Vue.use(BootstrapVue)

const router = new VueRouter({
    routes,
    linkActiveClass: 'active'
})

router.beforeEach((to, from, next) => {
    store.commit("routeChange", "start");
    next()
})

router.afterEach((to, from) => {
    document.title = to.meta.title
    store.commit("routeChange", "end");
    if (window.innerWidth < 768) {
        store.commit('left_menu', "close");
    } else {
        store.commit('left_menu', "open");
    }
})
new Vue({
    router,
    store,
    template: '<App/>',
    components: {
        App
    }
}).$mount('#app')
