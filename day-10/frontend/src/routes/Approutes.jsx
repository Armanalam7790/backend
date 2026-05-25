import React from 'react'
import  { createBrowserRouter, RouterProvider } from 'react-router'
import AuthLayout from '../layouts/AuthLayout'
import MainLayout from '../layouts/MainLayout'
import Home from '../pages/Home'
const Approutes = () => {
  let router  = createBrowserRouter([
    {
        path:"/",
        element:<AuthLayout />
    },

     {
        path:"/home",
        element:<MainLayout />,
        children:[
            {
                path:"",
                element:<Home />
            }
        ]

    },

    

    

  ])
  
  
  return <RouterProvider router={router}>

  </RouterProvider>
}

export default Approutes