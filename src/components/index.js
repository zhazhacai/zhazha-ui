import Importz from 'importz'

export default Importz(component, (name, cip) => {

	return cip( () => import(`./${name}`) )
	// return cip( require(`./${name}`) )

})
