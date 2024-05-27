import React from 'react'
import A_navbar from '../Components/A_navbar'
import { Helmet } from 'react-helmet';


function A_Manege_emp() {

    return (
        <div style={{ backgroundColor: ("#2372da39") }}>
            <Helmet>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossorigin="anonymous" referrerpolicy="no-referrer" />

            </Helmet>
            <A_navbar />
            <div className="breadcumb-area" data-aos="fade-down" data-aos-duration="1500" style={{ backgroundImage: 'url(Admin/Blog/img/bg-img/breadcumb.jpg)' }}>
                <div className="container h-100">
                    <div className="row h-100 align-items-center">
                        <div className="col-12">
                            <div className="bradcumb-title text-center">
                                <h2> EMPLOYEE DETAILS</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-md-12 col-sm-12 col-xs-12 p-5" data-aos="fade-up" data-aos-duration="1500" style={{ backgroundColor: ("#2372da39") }}>
                <div className="panel panel-info" style={{ backgroundColor: ("#2372da39") }}>

                    <div className="panel-body">
                        <div className="table-responsive">
                            <table className="table table-striped table-bordered table-hover">
                                <thead>
                                    <tr style={{ textAlign: 'center', color: 'black', fontWeight: 700 }}>
                                        <td>ID</td>
                                        <td>Enter Name</td>
                                        <td>Enter Email</td>
                                        <td>Contact Number</td>
                                        <td>Enter Message</td>
                                        <td>Photo</td>
                                        <td>Role</td>
                                        <td>MANAGE</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <td>ID</td>
                                    <td>Enter Name</td>
                                    <td>Enter Email</td>
                                    <td>Contact Number</td>
                                    <td>Enter Message</td>
                                    <td>Photo</td>
                                    <td>Role</td>
                                    <td>MANAGE</td>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* //model   edit */}

                    {/* <div className="modal" id="myModal">
                        <div className="modal-dialog">
                            <div className="modal-content">

                                <div className="modal-header">
                                    <h4 className="modal-title"><h2>Edit Employe</h2></h4>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" />
                                </div>
                                <div className="panel-body p-5" style={{ backgroundColor: ("#2372da4a") }}>
                                    <form role="form" method='post' >
                                        <div className="form-group">
                                            <label>Enter Full Name</label>
                                            <input className="form-control" onChange={onchangehandel} value={formvalue.EnterName} name='EnterName' type="text" placeholder='Enter Employee Name' />
                                        </div>
                                        <div className="form-group">
                                            <label>Enter Email</label>
                                            <input className="form-control" type="email" onChange={onchangehandel} value={formvalue.EnterEmail} name='EnterEmail' placeholder='Enter Employee Email' />
                                        </div>
                                        <div className="form-group">
                                            <label>Contact Number</label>
                                            <input className="form-control" onChange={onchangehandel} value={formvalue.ContactNumber} name='ContactNumber' type="text" placeholder='Enter Employee Number' />
                                        </div>
                                        <div className="form-group">
                                            <label>Enter Message</label>
                                            <input className="form-control" onChange={onchangehandel} value={formvalue.EnterMessage} name='EnterMessage' type="text" style={{ minHeight: 100 }} placeholder='Enter Msg' />
                                        </div>
                                        <div className="form-group">
                                            <label>Attach IMG </label>
                                            <input className="form-control" onChange={onchangehandel} value={formvalue.AttachFile} name='AttachFile' type="url" placeholder='Add Employee IMG' />

                                        </div>

                                        <div className="form-group">
                                            <label >For Role </label>
                                            <input className="form-control" onChange={onchangehandel} value={formvalue.Role} name='Role' type="text" placeholder='Add Employees Role' />

                                        </div>

                                    </form>
                                </div>

                                <div className="modal-footer">
                                    <button type="button" className="btn btn-danger" onClick={submitHandel} data-bs-dismiss="modal" >Update</button>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>

                {/* //model   View */}

                {/* <div className="offcanvas offcanvas-start" id="demo" style={{ width: 400 }}>
                    <div className="offcanvas-header">
                        <h1 className="offcanvas-title"></h1>
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" />
                    </div>
                    <div className="offcanvas-body d-flex">
                        <div className="container mt-3 d-flex" style={{ width: 350 }}>
                            <div className="card d-flex p-3" >
                                <img className="card-img-top" src={formvalue.AttachFile} alt="Card image" style={{ width: '260px', height: '330px', padding: 10 }} />
                                <h2>{formvalue.EnterName}</h2>
                                <h4>{formvalue.EnterEmail}</h4>
                                <h4>{formvalue.ContactNumber}</h4>
                                <p className="card-text">{formvalue.EnterMessage}</p>
                                <h4>{formvalue.Role}</h4>
                            </div>
                        </div>
                    </div>
                </div> */}



            </div>
        </div >
    )
}

export default A_Manege_emp