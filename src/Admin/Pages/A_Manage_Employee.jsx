import React from 'react'

import A_navbar from '../Components/A_navbar'



function A_Manage_Employee() {


    return (
        <div style={{ backgroundColor: ("#2372da39"), height: 800 }}>


            <A_navbar />

            <div className="breadcumb-area" data-aos="fade-down" data-aos-duration="1500" style={{ backgroundImage: 'url(Admin/Blog/img/bg-img/breadcumb.jpg)' }}>
                <div className="container h-100">
                    <div className="row h-100 align-items-center">
                        <div className="col-12">
                            <div className="bradcumb-title text-center">
                                <h2>MANAGE EMPLOYEE </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div className="container mt-3 text-light" data-aos="fade-up" data-aos-duration="1500">
                <table className="table  mt-5 "
                    style={{ backgroundColor: ("#2372da39"), borderRadius: 20, textAlign: "center", fontWeight: 700, color: 'black' }}
                >
                    <thead>
                        <tr>
                            <td>Id</td>
                            <td>Your Name</td>
                            <td> Your Email</td>
                            <td>Contact</td>
                            <td>Cureent Status</td>
                        </tr>
                    </thead>
                    <tbody>
                        <td>1</td>
                        <td>Kishan</td>
                        <td> xyzEmail@.com</td>
                        <td>01000000</td>
                        <td>On job</td>
                    </tbody>
                </table>
            </div>

        </div>
    )
}




export default A_Manage_Employee
