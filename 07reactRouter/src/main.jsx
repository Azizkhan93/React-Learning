import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/home'
import About from './components/About/about'
import Contact from './components/Contact/contact.jsx'
import User from './components/User/user.jsx'
import Github, { githubInfoLoader } from './components/Github/github.jsx'


// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout/>,
//     children: [
//        {
//         path: '/',
//         element: <Home/>
//        },
//        {
//         path: 'about',
//         element: <About/>
//        },
//        {

//         path: 'Contact',
//         element: <Contact/>
//        }

//     ]

//   }
// ])


// second method using createRoutesFromElements
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>} />
      <Route path='about' element={<About/>} />
      <Route path='contact' element={<Contact/>} />
      <Route path='user/:userid' element={<User/>} />
      <Route 
      loader={githubInfoLoader}
      path='github' 
      element={<Github/>} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
