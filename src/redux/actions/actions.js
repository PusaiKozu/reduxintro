// exemple payload -> {id: 1, libelle: "Faire le TP Twitter en Redux", termine: false}
export const ajouterTache = (payload) => {
   return {
      type: "ADD_TODO",
      payload: payload
   }
}

// exemple payload -> 12
export const supprimerTache = (payload) => {
   return {
      type: "DEL_TODO",
      payload: payload
   }
}