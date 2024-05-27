import React from 'react'
import A_navbar from '../Components/A_navbar'



function A_Employee() {


    return (
        <div style={{ backgroundColor: ("#2372da39") }}>

            <A_navbar />
            <div className="breadcumb-area" data-aos="fade-down" data-aos-duration="1500" style={{ backgroundImage: 'url(Admin/Blog/img/bg-img/breadcumb.jpg)' }}>
                <div className="container h-100">
                    <div className="row h-100 align-items-center">
                        <div className="col-12">
                            <div className="bradcumb-title text-center">
                                <h2>ADD AN EMPlOYEE</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{ backgroundColor: ("#2372da39") }}>
                <div className="col-md-12 p-5" data-aos="fade-up" data-aos-duration="1500" style={{ backgroundColor: ("#2372da39") }} >


                    <div className="panel-body p-5" style={{ backgroundColor: ("#2372da4a"), borderRadius: 50 }}>
                        <form role="form" >
                            <div className="form-group">
                                <label>Enter Full Name</label>
                                <input className="form-control" name='EnterName' type="text" placeholder='Enter Employee Name' />
                            </div>
                            <div className="form-group">
                                <label>Enter Email</label>
                                <input className="form-control" type="email" name='EnterEmail' placeholder='Enter Employee Email' />
                            </div>
                            <div className="form-group">
                                <label>Contact Number</label>
                                <input className="form-control" name='ContactNumber' type="text" placeholder='Enter Employee Number' />
                            </div>
                            <div className="form-group">
                                <label>Enter Message</label>
                                <input className="form-control" name='EnterMessage' type="text" style={{ minHeight: 100 }} placeholder='Enter Msg' />
                            </div>
                            <div className="form-group">
                                <label>Attach IMG </label>
                                <input className="form-control" name='AttachFile' type="url" placeholder='Add Employee IMG' />
                            </div>

                            <div className="form-group">
                                <label >For Role </label>
                                <input className="form-control" name='Role' type="text" placeholder='Add Employees Role' />
                            </div>
                            <button type="submit" className="btn btn-success mx-4">ADD </button>
                        </form>
                    </div>
                </div>

            </div>
        </div>

    )
}
export default A_Employee

