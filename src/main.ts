import { defineCustomElement, defineAsyncComponent } from 'vue'
import AppContext from './AppContext.vue'
import MyComponent from './MyComponent.vue'

customElements.define('my-app-context', defineCustomElement(AppContext))
customElements.define('my-async-component', defineCustomElement(
	defineAsyncComponent(() => import('./AsyncExample.vue'))
))
customElements.define('my-component', defineCustomElement(MyComponent))
