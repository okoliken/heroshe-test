import { createApp } from 'vue'
import App from './App.vue'
import { VueQueryPlugin } from "vue-query";

const vueQueryPluginOptions = {
    queryClientConfig: {
        defaultOptions: {
            queries: {
                refetchOnMount: true,
                refetchOnReconnect: true,
                refetchOnWindowFocus: true
            },
        },
    },
};

createApp(App).use(VueQueryPlugin, vueQueryPluginOptions).mount('#app')
