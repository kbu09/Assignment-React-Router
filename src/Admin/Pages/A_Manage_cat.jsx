import React from 'react'
import A_navbar from '../Components/A_navbar'
import { Helmet } from 'react-helmet';





function A_Manage_cat() {

    return (
        <div style={{ backgroundColor: ("#2372da39") }}>
            <Helmet>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossorigin="anonymous" referrerpolicy="no-referrer" />

            </Helmet>
            <A_navbar />
            <div className="breadcumb-area " data-aos="fade-down" data-aos-duration="1500" style={{ backgroundImage: 'url(Admin/Blog/img/bg-img/breadcumb.jpg)' }}>
                <div className="container h-100">
                    <div className="row h-100 align-items-center">
                        <div className="col-12">
                            <div className="bradcumb-title text-center">
                                <h2>MANAGE CATEGORIES </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-md-12 col-sm-8 col-xs-12 p-5 " data-aos="fade-up" data-aos-duration="1500" style={{ backgroundColor: ("#2372da39") }}>
                <div className="panel panel-info" style={{ backgroundColor: ("#2372da39"), textAlign: 'center', color: 'black' }}>

                    <div className="panel-body">
                        <div className="table-responsive">
                            <table className="table table-striped table-bordered table-hover text-black">
                                <thead>
                                    <tr style={{ color: 'black' }}>
                                        <td>ID</td>
                                        <td>Menu Type</td>
                                        <td>Menu Images</td>
                                        
                                    </tr>
                                </thead>
                                <tbody>
                                    <td>1</td>
                                    <td>veg Type</td>
                                    <td>Menu veg</td>

                                </tbody>
                            </table>

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
                                                    <label>Enter CATEGORIES Type </label>
                                                    <input className="form-control" type="text" onChange={onchangehandel} value={formvalue.Menu_Type} name='Menu_Type' placeholder='Enter Menu Type' />
                                                </div>
                                                <div className="form-group">
                                                    <label> CATEGORIES Images </label>
                                                    <input className="form-control" type="url" onChange={onchangehandel} value={formvalue.Menu_img} name='Menu_img' placeholder='Enter Menu Images' />
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
                                            <img className="card-img-top" src={formvalue.Menu_img} alt="Card image" style={{ width: '260px', height: '330px', padding: 10 }} />
                                            <h2>{formvalue.Menu_Type}</h2>

                                        </div>
                                    </div>

                                </div>
                            </div> */}







                        </div>
                    </div>
                </div>

            </div>



        </div >
    )
}

export default A_Manage_cat









