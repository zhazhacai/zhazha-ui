// Staff
import Staff from '@cafee/staff'

// Importz Package
import Importz from 'importz'

// Component Config
import Component from './component.js'

// Extension Config
import Extension from './extension.js'

// Import Create
import Create from '@cafee/component'

// Use Less
import './less/index.less'

// Use Sheet Scss
// import './sheet.scss'



// Component Configure
const Configure = {}


// Component
Importz(

	Component,

	name => Configure[`unex-${name}`] = () => import(`./components/${name}`)

)

// Extension
Importz(

	Extension,

	name => Configure[`unex-${name}`] = () => import(`./extensions/${name}/index.vue`)

)



// Install
export default new Create( Configure )
