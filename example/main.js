import Vue from 'vue'
import App from './App.vue'

// import { MyTest } from "./components/test/index.js"
// const components = [ MyTest ]; 
// const install = function(Vue){ 
//   if(install.installed) return; 
//   install.installed=true; 
//   components.map(
//     component => Vue.component(component.name,component)
//   ); 
// }

// if(typeof window !== 'undefined' && window.Vue){ 
//   install(window.Vue); 
// }

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
