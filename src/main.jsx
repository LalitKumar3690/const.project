import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Header from './components/HeaderSection/Header.jsx'
import Mainsection from './components/main/Mainsection.jsx'
import Footer from './components/footer/Footer.jsx'
import { Outlet } from 'react-router-dom'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Aboutus from './components/aboutus/Aboutus.jsx'

const Layout = ()=>{
  return(
    <div>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

const router = createBrowserRouter([
  {
    path:'/',
    element:<Layout />,
    children:[
      {
        path:'/',
        element:<App/>
      },
      {
        path:'/about',
        element:<Aboutus/>
      },
    ]
  }

])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
