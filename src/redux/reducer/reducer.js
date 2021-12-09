// Clé de contact (données de démarrage)
const initialState = {
   publications: [],
   utilisateurs: [],
   likes: [],
   todos: []
}

const rootReducer = (state = initialState, action) => {
   switch (action.type) {
      case "ADD_TODO":
         //return { ...state, todos: state.todos.concat(action.payload) }
         return Object.assign({}, state, {
            todos: state.todos.concat(action.payload)
         })
      case "UPD_TODO":
         // Traitement de mise à jour d'une tâche
         return // state modifié
      case "DEL_TODO":
         // Traitement de mise à jour d'une tâche
         return // state modifié
      default:
         // Action de type "inconnu" -> retour du state actuel (sans modif)
         return state
   }
}

export default rootReducer