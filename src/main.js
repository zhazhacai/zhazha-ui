// Import Staff
import Staff from '@cafee/staff'

// Import App
import App from './App.vue'

// Import Router Config
import Route from './route.js'

// Import Store Config
import Store from './store.js'

// Use Ant Design
import ElementUI from 'element-ui'

// Use Unex Icon
// import UnexIcon from '@baozun/unex-icon'

// Use Local Library
import UiComponent from './index.js'

// Use Sheet Scss
import './sheet.scss'



// Use Staff
new Staff()

// Extension
.then(

	({ Vue, Router, Vuex, Axios, I18n, Importz, _ }, next) => {

		Vue.use( ElementUI )

		// Vue.use( UnexIcon )

		Vue.use( UiComponent )

		next(

			// Instantiation
			new Vue({

				// Router
				router: new Router({
					mode: 'history',
					base: process.env.BASE_URL,
					routes: Route
				}),

				// Store
				store: new Vuex.Store( Store ),

				// Render
				render: (h) => h(App)

			})

			// Element Mount
			.$mount('#app'),

			// Hook
			v => console.log(`Staff Running .`)

		)

	}

)

// Error
.catch(

	error => console.log( `Error: ${error}` )

)
