import React, { Suspense, lazy } from 'react'

import { BrowserRouter, Route, Routes, } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = lazy(() => import("./Website/Pages/Home"))
const About = lazy(() => import("./Website/Pages/About"))
const Contact = lazy(() => import("./Website/Pages/Contact"))
const Menu_one = lazy(() => import("./Website/Pages/Menu_one"))
const Service = lazy(() => import("./Website/Pages/Service"))
const Booking = lazy(() => import("./Website/Pages/Booking"))
const Our_Team = lazy(() => import("./Website/Pages/Our_Team"))
const Testimonial = lazy(() => import("./Website/Pages/Testimonial"))
const Login = lazy(() => import("./Website/Pages/Login"))
const Signup = lazy(() => import("./Website/Pages/Signup"))
const Blog = lazy(() => import("./Website/Pages/Blog"))


const A_Dashboard = lazy(() => import("./Admin/Pages/A_Dashboard"))
const A_Employee = lazy(() => import("./Admin/Pages/A_Employee"))
const A_Manege_emp = lazy(() => import("./Admin/Pages/A_Manege_emp"))
const A_AddMenu = lazy(() => import("./Admin/Pages/A_AddMenu"))
const A_Manege_Menu = lazy(() => import("./Admin/Pages/A_Manege_Menu"))
const A_OnlineTable = lazy(() => import("./Admin/Pages/A_OnlineTable"))
const A_Contact = lazy(() => import("./Admin/Pages/A_Contact"))
const A_Manage_Blog = lazy(() => import("./Admin/Pages/A_Manage_Blog"))
const A_Add_Blog = lazy(() => import("./Admin/Pages/A_Add_Blog"))
const A_Add_cat = lazy(() => import("./Admin/Pages/A_Add_cat"))
const A_Manage_cat = lazy(() => import("./Admin/Pages/A_Manage_cat"))
const A_Profile = lazy(() => import("./Admin/Pages/A_Profile"))
const A_Edit_Profile = lazy(() => import("./Admin/Pages/A_Edit_Profile"))
const A_Manage_User = lazy(() => import("./Admin/Pages/A_Manage_User"))
const A_Manage_Employee = lazy(() => import("./Admin/Pages/A_Manage_Employee"))



function App() {

  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<div className='d-flex justify-content-center align-items-center'>
          <div class="spinner-grow text-primary" style={{ marginTop: 200, height: 500, width: 500 }} ></div>
        </div>}>
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


            <Route path="/a_dashborad" element={<A_Dashboard />}></Route>
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
        </Suspense>
      </BrowserRouter >







    </>
  )
}

export default App