// Fonctionnalité asynchrone (Thunk) pour récupération publications
const fetchPubliApi = () => {
   return (dispatch, getState) => {
      // Mise en place du traitement
      fetch("https://jsonplaceholder.typicode.com/posts")
         .then((reponse) => reponse.json())
         .then((json) => {
            console.log(json)
            // Passage vers la gestion d'erreur forcé
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