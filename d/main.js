import Vue from 'vue'
import App from './App'
import './common/iconfont.css';
Vue.config.productionTip = false

Vue.prototype.$serverUrl = '接口';
Vue.prototype.$appkey = 'id';
Vue.prototype.random = (lower, upper) => {
	return Math.floor(Math.random() * (upper - lower)) + lower;
};

App.mpType = 'app'

const app = new Vue({
	...App
})
app.$mount()