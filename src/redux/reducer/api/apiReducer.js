// Clé de contact (données de démarrage)
const initialState = {
   publications: [],
   erreur: {
      message: {
         texte: "Table déjà en écriture"
      },
      code: 180
   }
}

const apiReducer = (state = initialState, action) => {
   switch (action.type) {
      case "FETCH_API_SUCCESS":
         return { ...state, publications: state.publications.concat(action.payload) }
      case "FETCH_API_KO":
         return state
      default:
         // Action de type "inconnu" -> retour du state actuel (sans modif)
         return state
   }
}

export default apiReducer

//npm install react-router-dom
//npm install redux
//npm install react-redux