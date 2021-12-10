// Fonctionnalité asynchrone (Thunk) pour récupération publications
const fetchPubliApi = () => {
   return (dispatch, getState) => {
      // Mise en place du traitement
      try {
         fetch("https://jsonplaceholder.typicode.com/posts")
            .then((reponse) => reponse.json())
            .then((json) => {
               console.log(json)
               dispatch({ type: "FETCH_API_SUCCESS", payload: json })
            })
      }
      catch {
         dispatch(fetchPubliKo())
      }
   }
}

const fetchPubliKo = () => {
   return (dispatch, getState) => {
      dispatch({
         type: "FETCH_KO",
         payload: null
      })
   }
}

export const apiActions = {
   fetchPubliApi,
   fetchPubliKo
}