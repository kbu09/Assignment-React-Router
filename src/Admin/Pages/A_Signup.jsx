import React, { useState, useEffect } from 'react'

import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function A_Signup() {
 
    return (
        <>

            <div className='pt-5' style={{ backgroundImage: "URL('https://img.freepik.com/free-photo/crop-plate-with-vegetable-salad_23-2147753679.jpg')", backgroundSize: 'cover', height: 775 }} >

                <div className='p-5 w-25 mx-auto ' data-aos="fade-up" data-aos-duration="1500" style={{
                    backgroundImage: "URL('https://www.aquapazza-boston.com/news/wp-content/uploads/2023/10/shutterstock_1923031190.jpg')",
                    backgroundColor: 'rgb(172, 137, 179)', height: 640, width: 650, borderRadius: 40, marginTop: 10
                }}>
                    <form action="/action_page.php" >
                        <center> <h1>Sign Up</h1></center>
                        <div className="mt-1">
                            <label htmlFor="email" className="form-label">Name:</label>
                            <input type="text"  className="form-control" id="email" placeholder="Enter Name" name="name" />
                        </div>
                        <div className="mt-3">
                            <label htmlFor="email" className="form-label">Email:</label>
                            <input type="text"  className="form-control" id="email" placeholder="Enter email" name="email" />
                        </div>
                        <div className="mt-3">
                            <label htmlFor="email" className="form-label">Photo ID:</label>
                            <input type="text"  className="form-control" id="email" placeholder="Enter Images" name="img" />
                        </div>
                        <div className="mt-3">
                            <label htmlFor="email" className="form-label">Mobile Number:</label>
                            <input type="tel"  className="form-control " id="email" placeholder="Enter Mobile Number" name="mobile" />
                        </div>
                        <div className="mt-3">
                            <label htmlFor="pwd" className="form-label"> Password:</label>
                            <input type="password"  className="form-control" id="pwd" placeholder="Enter password" name="password" />
                        </div>
                        <div className="form-check mb-3 mt-3">
                            <label className="form-check-label">
                                <input className="form-check-input" type="checkbox" name="remember" /> Remember me
                            </label>
                        </div>

                        <button type="submit" className="btn btn-primary mt-1 mx-1">Submit</button>

                        <Link to="/a_login"> <button type="submit" className="btn btn-primary mt-1 mx-5"> LOG IN </button> </Link>

                    </form>
                </div >
            </div>
        </>
    )
}

export default A_Signup