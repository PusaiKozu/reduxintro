// Fonctionnalité asynchrone (Thunk) pour récupération publications
const fetchPubliApi = () => {
   return (dispatch, getState) => {
      // Mise en place du traitement
      fetch("https://jsonplaceholder.typicode.com/posts")
         .then((reponse) => reponse.json())
         .then((json) => {
            console.log(json)
            dispatch(fetchPubliKo("Impossible d'accéder à l'API."))
         })
         .catch((erreur) => {
            dispatch(fetchPubliApi(erreur))
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