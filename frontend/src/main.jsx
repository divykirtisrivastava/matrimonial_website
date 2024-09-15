import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import ContactUs from './components/ContactUs.jsx'
import Profile from './components/Profile.jsx'
import CreateProfile from './components/CreateProfile.jsx'
import Blog from './components/Blog.jsx'
import Privacy from './components/Privacy.jsx'
import Terms from './components/Terms.jsx'
import Gallery from './components/Gallery.jsx'
import Sign from './components/Sign.jsx'
import Login from './components/Login.jsx'
import AdminApp from './AdminApp.jsx'
// import Admin from './components/Admin/Admin.jsx'
import Table from './components/Admin/Table.jsx'
import ViewMore from './components/Admin/ViewMore.jsx'
import Editprofile from './components/Admin/Editprofile.jsx'
import StatusAdmin from './components/Admin/StatusAdmin.jsx'
import ClientProtected from './components/ClientProtected.jsx'
import Packages from './components/Packages.jsx'
import Payment from './components/Payment.jsx'
import Users from './components/Admin/Users.jsx'
import EditUser from './components/Admin/EditUser.jsx'
import Payments from './components/Admin/Payments.jsx'
import AdminLogin from './components/Admin/AdminLogin.jsx'
import AdminProtected from './components/AdminProtected.jsx'

const router=createBrowserRouter(
  createRoutesFromElements(
    <>

    <Route path='/' element={<App/>}>
      <Route path='' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contactus' element={<ContactUs/>}/>
      <Route path='/profile/:id' element={<Profile/>}/>
      <Route path='/createprofile' element={<ClientProtected>
        <CreateProfile/>
      </ClientProtected>}/>
      <Route path='/blog' element={<Blog/>}/>
      <Route path='/privacy' element={<Privacy/>}/>
      <Route path='/terms' element={<Terms/>}/>
      <Route path='/gallery' element={<Gallery/>}/>
      <Route path='/sign' element={<Sign/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/packages' element={<Packages/>}/>
      <Route path='/payment' element={<Payment/>}/>
    </Route>


    <Route path='/admin' element={<AdminApp/>}>
    {/* <Route path='/admin/adminLogin' element={<Admin/>}/> */}
    <Route path='' element={<AdminProtected><Table/></AdminProtected>}/>
    <Route path='/admin/viewProfile/:id' element={<ViewMore/>}/>
    <Route path='/admin/editprofile/:id' element={<Editprofile/>}/>
    <Route path='/admin/edituser/:id' element={<EditUser/>}/>
    <Route path='/admin/adminstatus' element={<StatusAdmin/>}/>
    <Route path='/admin/payments' element={<Payments/>}/>
    <Route path='/admin/users' element={<Users/>}/>
    <Route path='/admin/login' element={<AdminLogin/>}/>
    </Route>
    </>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
