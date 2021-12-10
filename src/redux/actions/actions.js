// exemple payload -> {id: 1, libelle: "Faire le TP Twitter en Redux", termine: false}
export const ajouterTache = (payload) => {
   return {
      type: "ADD_TODO",
      payload: payload
   }
}

// exemple payload -> 12 (id)
export const supprimerTache = (payload) => {
   return {
      type: "DEL_TODO",
      payload: payload
   }
}

// Fonctionnalité asynchrone (Thunk) pour récupération publications
export const fetchPubliApi = () => {
   return (dispatch, getState) => {
      // Mise en place du traitement
      console.log("Fetch API debut")
      fetch("https://jsonplaceholder.typicode.com/posts")
         .then((reponse) => reponse.json())
         .then((json) => {
            console.log(json)
            dispatch({
               type: "FETCH_API_SUCCESS",
               payload: json
            })
         })
   }
}