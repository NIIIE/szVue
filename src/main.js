import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios';
import VueAxios from 'vue-axios';
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';

import * as echarts from 'echarts'

// createApp(App)
const app = createApp(App)

app.use(router)
app.use(VueAxios,axios)
app.use(ElementPlus)

app.config.globalProperties.$echarts = echarts

app.mount('#app')
