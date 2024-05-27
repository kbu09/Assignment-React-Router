import React from 'react'

import { BrowserRouter, Route, Routes, } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './Website/Pages/Home'
import About from './Website/Pages/About'
import Contact from './Website/Pages/Contact'
import Menu_one from './Website/Pages/Menu_one'
import Service from './Website/Pages/Service'
import Booking from './Website/Pages/Booking'
import Our_Team from './Website/Pages/Our_Team'
import Testimonial from './Website/Pages/Testimonial'
import Login from './Website/Pages/Login';
import Signup from './Website/Pages/Signup';
import Blog from './Website/Pages/Blog';

import A_Dashboard from './Admin/Pages/A_Dashboard'

import A_Employee from './Admin/Pages/A_Employee'
import A_Manege_emp from './Admin/Pages/A_Manege_emp'
import A_AddMenu from './Admin/Pages/A_AddMenu'
import A_Manege_Menu from './Admin/Pages/A_Manege_Menu'
import A_OnlineTable from './Admin/Pages/A_OnlineTable'
import A_Contact from './Admin/Pages/A_Contact'
import A_Manage_Blog from './Admin/Pages/A_Manage_Blog';
import A_Add_Blog from './Admin/Pages/A_Add_Blog'
import A_Add_cat from './Admin/Pages/A_Add_cat';
import A_Manage_cat from './Admin/Pages/A_Manage_cat';
import A_Profile from './Admin/Pages/A_Profile';
import A_Edit_Profile from './Admin/Pages/A_Edit_Profile';
import A_Manage_User from './Admin/Pages/A_Manage_User';
import A_Manage_Employee from './Admin/Pages/A_Manage_Employee';
import Lazyloading from './Admin/Pages/Lazyloading';









function App() {

  return (
    <>


      <BrowserRouter>

        <ToastContainer></ToastContainer>

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/menu_one" element={<Menu_one />}></Route>
          <Route path="/service" element={<Service />}></Route>
          <Route path="/booking" element={<Booking />}></Route>
          <Route path="/our_team" element={<Our_Team />}></Route>
          <Route path="/testimonial" element={<Testimonial />}></Route>
          <Route path="/log_in" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/blog" element={<Blog />}></Route>

          <Route path="/lazyloading" element={<Lazyloading />} />
          {/* <Route path="/a_dashborad" element={<A_Dashboard />}></Route> */}
          <Route path="/a_employee" element={<A_Employee />}></Route>
          <Route path="/a_manege_emp" element={<A_Manege_emp />}></Route>
          <Route path="/a_addmenu" element={<A_AddMenu />}></Route>
          <Route path="/a_manege_menu" element={<A_Manege_Menu />}></Route >
          <Route path="/a_onlinetable" element={<A_OnlineTable />}></Route >
          <Route path="/a_contact" element={<A_Contact />}></Route >
          <Route path="/a_manage_blog" element={<A_Manage_Blog />}></Route >
          <Route path="/a_add_blog" element={<A_Add_Blog />}></Route >
          <Route path="/a_add_cat" element={<A_Add_cat />}></Route >
          <Route path="/a_manage_cat" element={<A_Manage_cat />}></Route >
          <Route path="/a_profile" element={<A_Profile />}></Route >
          <Route path="/a_edit_profile/:id" element={<A_Edit_Profile />}></Route >
          <Route path="/a_manage_user" element={<A_Manage_User />}></Route >
          <Route path="/a_manage_employee" element={<A_Manage_Employee />}></Route >


        </Routes >
      </BrowserRouter >



      {/* 
      <BrowserRouter>
        <Routes>
          <Route path='/dashboard' element={<A_Dashboard />} />
          <Route path="/lazyloading" element={<Lazyloading />} />
        </Routes>
      </BrowserRouter> */}



    </>
  )
}

export default App