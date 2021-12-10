import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import { combineMiddleware } from '../middlewares/middleware'
import rootReducer from '../reducer/reducer'

// Préparation du Middleware
let middlewares = [
   combineMiddleware.apiMiddleware.handleApi,
   combineMiddleware.todoMiddleware.handleTextValue,
   thunk
]

// Création du magasin de l'application
// -> paramètre = un état
// -> etat = etat global de l'application (objet)
// Appel au bras droit -> le(s) Reducer(s)
const store = createStore(
   rootReducer,
   // Application des middlewares de l'application (ligne 7)
   applyMiddleware(...middlewares)   
)

export default store