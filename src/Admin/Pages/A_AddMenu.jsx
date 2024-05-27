import React from 'react'
import A_navbar from '../Components/A_navbar'


function A_AddMenu() {

  
    return (
        < div style={{ backgroundColor: ("#2372da39") }} >
            <A_navbar />
            <div style={{ backgroundColor: ("#2372da39") }} data-aos="fade-down" data-aos-duration="1500">
                <div className="breadcumb-area text-primary" style={{ backgroundImage: 'url(Admin/Blog/img/bg-img/breadcumb.jpg)' }}>
                    <div className="container h-100">
                        <div className="row h-100 align-items-center">
                            <div className="col-12">
                                <div className="bradcumb-title text-center">
                                    <h2>ADD MENU</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div data-aos="fade-up" data-aos-duration="1500" className="col-md-12 p-5" style={{ backgroundColor: ("#2372da6f") }}>
                    <div data-aos="fade-up" data-aos-duration="1500" className="panel-body p-5" style={{ backgroundColor: ("#2372da4a"), borderRadius: 50, }}>
                        <form role="form">
                            <div className="form-group">
                                <div> <label>Menu Categorties</label></div>
                                <select name="Menu_id" className="form-control"  >
                                    <option value="">Select MENU TYPE</option>
                                   <option value="">VEG</option>

                                </select>
                            </div>
                            <div className="form-group">
                                <label>Enter Dish Name</label>
                                <input className="form-control" type="text"  name='EnterDishName' placeholder='Enter Dish Name' />
                            </div>
                            <div className="form-group">
                                <label>Enter Price</label>
                                <input className="form-control" name='EnterPrice' type="text" placeholder='Enter Price' />
                            </div>
                            <div className="form-group">
                                <label>Item Details</label>
                                <input className="form-control" type="text" name='ItemDetails' placeholder='Enter Item Details' />
                            </div>
                            <div className="form-group">
                                <label>Add IMG</label>
                                <input className="form-control" type="url" name='ItemImg' placeholder='Enter Item IMG' />
                            </div>
                            <button type="submit" className="btn btn-success mx-3 mt-3">ADD </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default A_AddMenu