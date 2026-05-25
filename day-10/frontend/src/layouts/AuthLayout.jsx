import React, { useState } from 'react'
import Register from '../components/Register'
import Login from '../components/Login'

const AuthLayout = () => {
    const [toggle, settoggle] = useState(false)
  return (
    <div>
        {
            toggle?  <Register settoggle={settoggle} / >: <Login settoggle={settoggle}/>
        }
    </div>
  )
}

export default AuthLayout