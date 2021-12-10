// Fonctionnalité asynchrone (Thunk) pour récupération publications
const fetchPubliApi = () => {
   return (dispatch, getState) => {
      // Mise en place du traitement
      fetch("https://jsonplaceholder.typicode.com/posts")
         .then((reponse) => reponse.json())
         .then((json) => {
            console.log(json)
            // Passage correct de l'API
            //dispatch({type: "FETCH_API_SUCCESS", payload: json})

            // Passage vers la gestion d'erreur (forçage de test)
            dispatch(fetchPubliKo("Impossible d'accéder à l'API."))
         })
         .catch((erreur) => {
            dispatch(fetchPubliKo(erreur))
         })
   }
}

const fetchPubliKo = (erreur) => {
   return (dispatch, getState) => {
      dispatch({
         type: "FETCH_API_KO",
         payload: erreur
      })
   }
}

export const apiActions = {
   fetchPubliApi,
   fetchPubliKo
}