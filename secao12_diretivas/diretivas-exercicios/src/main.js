import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.directive('destaque', {
	bind(el, binding, vnode){
		el.style.backgroundColor = 'lightgreen'
	}
})

Vue.directive('destaque2', {
	bind(el, binding, vnode){
		el.style.backgroundColor = binding.value
	}
})

Vue.directive('destaque3', {
	bind(el, binding, vnode){

		if(binding.arg === 'fundo'){
			el.style.backgroundColor = binding.value
		} else {
			el.style.color = binding.value
		}
	}
})

Vue.directive('destaque4', {
	bind(el, binding, vnode){

		let atraso = 0
		if(binding.modifiers['atrasar']) atraso = 4000

		setTimeout(() => {
			if(binding.arg === 'fundo'){
				el.style.backgroundColor = binding.value
			} else {
				el.style.color = binding.value
			}
		}, atraso)
	}
})

new Vue({
	render: h => h(App),
}).$mount('#app')
