import { useReducer } from 'react'
import { AuthContext } from './context/AuthContext'
import { CartContext } from './context/CartContext'
import { AppRouter } from './routers/AppRouter'
import { authReducer } from './reducers/authReducer'
import { cartReducer } from './reducers/cartReducer'
import './App.css'

const init = ()=>{
  return JSON.parse(localStorage.getItem('user')) || { isLogged: false }
}

function App() {

  const [ user, authDispatch ] = useReducer( authReducer, [], init )
  const [cart, cartDispatch] = useReducer( cartReducer, [], init )

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
