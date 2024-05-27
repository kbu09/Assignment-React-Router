import React from 'react'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import { Helmet } from 'react-helmet'


function Manage_profile() {
    return (
        <>

            <Helmet>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
            </Helmet>
            <Header />
            <div>
                <div className="container-xxl py-5 bg-dark hero-header mb-5">
                    <div className="container text-center my-5 pt-5 pb-4">
                        <h1 className="display-3 text-white mb-3 animated slideInDown">Manage Profile</h1>

                    </div>
                </div>
                <div className="container-xxl py-5">
                    <div className="container">

                        <div className="row g-4 ">
                            <div className="col-md-10 mt-5 mx-auto">
                                <div className="wow fadeInUp" data-wow-delay="0.2s">
                                    <form method='post'>
                                        <div className="row g-3">
                                            <div className="col-md-6">
                                                <div className="form-floating">
                                                    <input type="text" className="form-control" name='name' id="name" placeholder="Your Name" />
                                                    <label htmlFor="name">Your Name</label>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-floating">
                                                    <input type="email" className="form-control"  name='email' id="email" placeholder="Your Email" />
                                                    <label htmlFor="email">Your Email</label>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-floating">
                                                    <input type="text" className="form-control" name='contact' id="subject" placeholder="Subject" />
                                                    <label htmlFor="subject">Contact</label>
                                                </div>
                                            </div>

                                            <div className="col-12">
                                                <button type="btn" className="btn btn-primary w-100 py-3">Update</button>

                                            </div>
                                        </div>
                                    </form>

                                </div>
                            </div>


                        </div>



                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}


export default Manage_profile