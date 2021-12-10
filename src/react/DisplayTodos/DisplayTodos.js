import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import combineActions from "redux/actions/actions"

// const ConnectedDisplayTodos = ({ todos }) => {
  
//    let listeTodos = todos.map((item, index) => {
//       return (
//          <li key={index}>
//             {item.libelle} - {item.id}
//          </li>
//       )
//    })

//    return (
//       <>
//          <ul>
//             {listeTodos}
//          </ul>
//          <ul>
//             {listePosts}
//          </ul>
//       </>
//    )
// }

// const mapStateToProps = (state) => {
//    return {
//       todos: state.todos
//    }
// }
// const DisplayTodos = connect(mapStateToProps)(ConnectedDisplayTodos)

const DisplayTodos = () => {
   const todos = useSelector((state) => state.todoReducer.todos)
   const publications = useSelector((state) => state.apiReducer.publications)
   const erreur = useSelector((state) => state.apiReducer.erreur)

   const dispatch = useDispatch()

   // Déclencher l'action asynchrone fetchPubliApi dans les action creator
   useEffect(() => {
      console.log("dispatch Api")
      dispatch(combineActions.apiActions.fetchPubliApi())
   }, [dispatch])
  
   let listeTodos = todos.map((item, index) => {
      return (
         <li key={index}>
            {item.libelle} - {item.id}
         </li>
      )
   })

   let listePubli = publications.map((item, index) => {
      return (
         <li key={index}>
            {item.title}
         </li>
      )
   })

   // Affichage du bloc de message d'erreur
   let erreurBloc = ((erreur.code) ?
      <p>Erreur: {erreur.message.texte} - Code: {erreur.code} </p>
      :
      "")

   return (
      <>
         {erreurBloc}
         <ul>
            {listeTodos}
         </ul>
         <ul>
            {listePubli}
         </ul>
      </>
   )
}

// const mapStateToProps = (state) => {
//    return {
//       todos: state.todos
//    }
// }
// const DisplayTodos = connect(mapStateToProps)(ConnectedDisplayTodos)

export default DisplayTodos