import React, { useState, useEffect } from 'react'
import A_navbar from '../Components/A_navbar';

function A_Edit_Profile() {


    return (
        < div style={{ backgroundColor: ("#2372da39") }}>
            <A_navbar />


            <div >
                <div className="breadcumb-area text-primary" data-aos="fade-down" data-aos-duration="1500" style={{ backgroundImage: 'url(/Admin/Blog/img/bg-img/breadcumb.jpg)' }}>
                    <div className="container h-100">
                        <div className="row h-100 align-items-center">
                            <div className="col-12">
                                <div className="bradcumb-title text-center">
                                    <h2> EDIT PROFILE </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div data-aos="fade-up" data-aos-duration="1500" className='p-5 mt-5 mb-5  col-sm-12 col-md-12 col-lg-12 ' style={{ backgroundColor: ("#2372da4a"), borderRadius: 50 }} >
                    <form action="/action_page.php" className='col-sm-12 col-md-12 col-lg-12' >

                        <div className="mt-1  ">
                            <label >Name:</label>
                            <input type="text" className="form-control" id="email" placeholder="Enter Name" name="name" />
                        </div>
                        <div className="mt-3  ">
                            <label htmlFor="email" className="form-label">Photo ID:</label>
                            <input type="text" className="form-control" id="email" placeholder="Enter Images" name="img" />
                        </div>
                        <div className="mt-3  ">
                            <label >Email:</label>
                            <input type="text" className="form-control" id="email" placeholder="Enter email" name="email" />
                        </div>
                        <div className="mt-3  ">
                            <label >Mobile Number:</label>
                            <input type="number" className="form-control " id="email" placeholder="Enter Mobile Number" name="mobile" />
                        </div>
                        <button type="" className="btn btn-primary mt-1 mx-1 mt-5" >Update</button>
                    </form>
                </div >
            </div>
        </div>
    )
}

export default A_Edit_Profile