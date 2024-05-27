import React from 'react'
import A_navbar from '../Components/A_navbar'

function A_Manage_Blog() {

    return (
        <div style={{ backgroundColor: ("#2372da39") }}>


            <A_navbar />

            <div className="breadcumb-area" data-aos="fade-down" data-aos-duration="1500" style={{ backgroundImage: 'url(Admin/Blog/img/bg-img/breadcumb.jpg)' }}>
                <div className="container h-100">
                    <div className="row h-100 align-items-center">
                        <div className="col-12">
                            <div className="bradcumb-title text-center">
                                <h2>BLOG PAGE</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container '>
                <div className='row'>
                    <div className="p-5 row">
                      
                        {/* //model   edit */}

                        {/* <div className="modal" id="myModal">
                            <div className="modal-dialog">
                                <div className="modal-content">

                                    <div className="modal-header">
                                        <h4 className="modal-title">EDIT CATEGORY</h4>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" />
                                    </div>
                                    <div className="modal-body">
                                        <form role="form" method='post' >
                                            <div className="form-group">
                                                <label>Enter Blog Name</label>
                                                <input className="form-control" type="text" onChange={onchangehandel} value={formvalue.blog} name='blog' placeholder='Enter Blog Name' />
                                            </div>
                                            <div className="form-group">
                                                <label>Enter Skim</label>
                                                <textarea className="form-control" onChange={onchangehandel} value={formvalue.skim} name='skim' type="text" placeholder='Enter Skim' />
                                            </div>
                                            <div className="form-group">
                                                <label>Skim Details</label>
                                                <textarea className="form-control" type="text" onChange={onchangehandel} value={formvalue.skimdetails} name='skimdetails' placeholder='Enter Item Skim' />
                                            </div>
                                            <div className="form-group">
                                                <label>Add Skim IMG</label>
                                                <input className="form-control" type="url" onChange={onchangehandel} value={formvalue.skimImg} name='skimImg' placeholder='Enter Skim IMG' />
                                            </div>

                                        </form>
                                    </div>

                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-danger" onClick={submitHandel} data-bs-dismiss="modal" >Update</button>
                                    </div>
                                </div>
                            </div>
                        </div> */}

                        {/* //Card    view  */}
{/* 
                        <div className="offcanvas offcanvas-start" id="demo" style={{ width: 400 }}>
                            <div className="offcanvas-header">
                                <h1 className="offcanvas-title"></h1>
                                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" />
                            </div>
                            <div className="offcanvas-body d-flex">
                                <div className="container mt-3 d-flex" style={{ width: 350 }}>
                                    <div className="card d-flex p-3" >
                                        <img className="card-img-top" src={formvalue.skimImg} alt="Card image" style={{ width: '260px', height: '330px', padding: 10 }} />
                                        <h2>{formvalue.blog}</h2>
                                        <p className="card-text">{formvalue.skimdetails}</p>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default A_Manage_Blog