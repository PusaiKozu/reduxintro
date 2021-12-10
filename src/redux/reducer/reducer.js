// Clé de contact (données de démarrage)
const initialState = {
   publications: [],
   utilisateurs: [],
   likes: [],
   todos: [],
   erreur: "",
   listWords: []
}

const rootReducer = (state = initialState, action) => {
   switch (action.type) {
      case "ADD_TODO":         
         return Object.assign({}, state, {
            todos: state.todos.concat(action.payload)
         })
      case "UPD_TODO":
         // Traitement de mise à jour d'une tâche
         return // state modifié
      case "DEL_TODO":
         // Traitement de mise à jour d'une tâche
         return // state modifié
      case "ERR_ADD_TODO":
         return Object.assign({}, state, {
            erreur: "Impossible d'ajouter cette tâche (mots interdits)"
         })
      case "FETCH_API_SUCCESS":
         return {...state, publications: state.publications.concat(action.payload)}
      default:
         // Action de type "inconnu" -> retour du state actuel (sans modif)
         return state
   }
}

export default rootReducer

//npm install react-router-dom
//npm install redux
//npm install react-redux