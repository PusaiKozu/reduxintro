import { connect } from 'react-redux'

const ConnectedDisplayTodos = ({ todos, babar }) => {

   let listeTodos = todos.map((item, index) => {
      return (
         <li>
            {item.libelle} - {item.id}
         </li>
      )
   })
   return (
      <>
         <ul>
            {listeTodos}
         </ul>
         <p>
            {babar}
         </p>
      </>
   )
}

const mapStateToProps = (state) => {
   return {
      todos: state.todos
   }
}
const DisplayTodos = connect(mapStateToProps)(ConnectedDisplayTodos)

export default DisplayTodos