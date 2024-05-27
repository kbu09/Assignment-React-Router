import React from 'react'
import A_navbar from '../Components/A_navbar'



function A_Manege_Menu() {

    return (
        <div style={{ backgroundColor: ("#2372da39") }}>

            <A_navbar />

            <div className="breadcumb-area " data-aos="fade-down" data-aos-duration="1500" style={{ backgroundImage: 'url(Admin/Blog/img/bg-img/breadcumb.jpg)' }}>
                <div className="container h-100">
                    <div className="row h-100 align-items-center">
                        <div className="col-12">
                            <div className="bradcumb-title text-center">
                                <h2>MANAGE MENU</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="col-md-12 col-sm-8 col-xs-12 p-5 " data-aos="fade-up" data-aos-duration="1500" style={{ backgroundColor: ("#2372da39") }}>
                <div className="panel panel-info" style={{ backgroundColor: ("#2372da39"), textAlign: 'center' }}>
                    <div className="panel-body">
                        <div className="table-responsive">

                            <table className="table table-striped table-bordered table-hover">
                                <tbody className='p-3'>
                                    <tr style={{ fontWeight: "800" }}  >
                                        <td>ID</td>
                                        <td>Dish Name</td>
                                        <td>Dish Type</td>
                                        <td>Price</td>
                                        <td>Item Details</td>
                                        <td>Item IMG</td>
                                        
                                    </tr>

                                    
                                </tbody>

                                <tbody>
                                    <td>1</td>
                                    <td>XYZ Name</td>
                                    <td>XYZ Type</td>
                                    <td>000</td>
                                    <td>XYZ Details</td>
                                    <td>XYZ IMG</td>
                                   
                                </tbody>
                            </table>
                            {/* //model   View */}

                            {/* <div className="offcanvas offcanvas-start" id="demo" style={{ width: 400 }}>
                                <div className="offcanvas-header">
                                    <h1 className="offcanvas-title"></h1>
                                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" />
                                </div>
                                <div className="offcanvas-body d-flex">
                                    <div className="container mt-3 d-flex" style={{ width: 350 }}>
                                        <div className="card d-flex p-3" >
                                            <img className="card-img-top" src={formvalue.ItemImg} alt="Card image" style={{ width: '280px', height: '300px', padding: 10 }} />
                                            <h2>{formvalue.Menu_id}</h2>
                                            <h4>{formvalue.EnterDishName}</h4>
                                            <h4>{formvalue.EnterPrice} Rs.</h4>
                                            <p className="card-text">{formvalue.ItemDetails}</p>
                                            <h4>{formvalue.Role}</h4>

                                        </div>
                                    </div>
                                </div>
                            </div> */}

                            {/* //model   edit */}


                            {/* <div className="modal" id="myModal">
                                <div className="modal-dialog">
                                    <div className="modal-content">

                                        <div className="modal-header">
                                            <h4 className="modal-title"><h2>Edit Menu</h2></h4>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" />
                                        </div>
                                        <div className="panel-body p-5" style={{ backgroundColor: ("#2372da4a") }}>
                                            <form role="form" onSubmit={submitHandel} method='post'>

                                                <div className="form-group">

                                                    <div> <label>Menu Categorties</label></div>

                                                    <select onChange={onchangehandel} value={formvalue.Menu_id} name="Menu_id" className="form-control"  >

                                                        <option value="">Select MENU TYPE</option>
                                                        {
                                                            cdata && cdata.map((value) => {
                                                                return (
                                                                    <option key={value.id} value={value.Menu_Type}>{value.Menu_Type}</option>
                                                                )
                                                            })
                                                        }

                                                    </select>

                                                </div>

                                                <div className="form-group">
                                                    <label>Enter Dish Name</label>
                                                    <input className="form-control" type="text" onChange={onchangehandel} value={formvalue.EnterDishName} name='EnterDishName' placeholder='Enter Dish Name' />
                                                </div>
                                                <div className="form-group">
                                                    <label>Enter Price</label>
                                                    <input className="form-control" onChange={onchangehandel} value={formvalue.EnterPrice} name='EnterPrice' type="text" placeholder='Enter Price' />
                                                </div>
                                                <div className="form-group">
                                                    <label>Item Details</label>
                                                    <input className="form-control" type="text" onChange={onchangehandel} value={formvalue.ItemDetails} name='ItemDetails' placeholder='Enter Item Details' />
                                                </div>
                                                <div className="form-group">
                                                    <label>Add IMG</label>
                                                    <input className="form-control" type="url" onChange={onchangehandel} value={formvalue.ItemImg} name='ItemImg' placeholder='Enter Item IMG' />
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
                    </div>
                </div>
            </div>
        </div>

    )
}

export default A_Manege_Menu