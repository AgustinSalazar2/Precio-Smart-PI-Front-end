import { AuthContext } from './context/AuthContext'
import { AppRouter } from './routers/AppRouter'
import './App.css'
import { useReducer } from 'react'
import { authReducer } from './reducers/authReducer'

const init = ()=>{
  return JSON.parse(localStorage.getItem('user')) || { isLogged: false }
}

function App() {
  // const user = {
  //   isLogged: true,
  //   username: 'zeus'
  // }

  // const tasks = [
  //   {
  //     id: 1,
  //     title: 'Completar prácticos',
  //     description: 'Completar el práctico de useContext'
  //   }
  // ];


  const [ user, authDispatch ] = useReducer(authReducer, [], init)

  return (
    <AuthContext.Provider value={{
      user,
      authDispatch
    }}>
      <AppRouter />
    </AuthContext.Provider>
  )
}

export default App
