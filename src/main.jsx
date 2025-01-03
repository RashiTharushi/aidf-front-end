import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './index.css'
import Homepage from './pages/home/home.page'
import Jobpage from './pages/job/job.page'
import RootLayout from './layouts/root.layout'
import Signin from './pages/sign-in.page'
import Signup from './pages/sign-up.page'
import MainLayout from './layouts/main.layout'

const router=createBrowserRouter([
  {
    element:<RootLayout/>,
    children: [
    {
      element:<MainLayout/>,
      children: [
      {
        path:"/",
        element:<Homepage/>,
      },
      {
        path:"/job:id",
        element:<Jobpage/>,
      },],
    },
    {
      path:"/sign-in",
      element:<Signin/>,
    },
    {
      path:"/sign-up",
      element:<Signup/>,
    },
  ],
  },

])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
)
