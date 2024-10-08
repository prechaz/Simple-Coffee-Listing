import react from 'react'
import Home from './pages/home/Home'
import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import MainLayout from './mainlayout/MainLayout.jsx'
import Available from './pages/available/Available.jsx'

function App() {

 const router = createBrowserRouter(
  createRoutesFromElements(<Route path='/' element={<MainLayout/>}>
        <Route index element={<Home/>}/>
        <Route path='/available' element={<Available/>}/>
  </Route>)
 )
  return (
    <>
    <div className='container'>
    <RouterProvider router={router}/>
    </div>
     
      
    </>
  )
}

export default App
