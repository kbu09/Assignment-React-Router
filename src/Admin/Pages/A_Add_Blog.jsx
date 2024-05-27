import React from 'react'
import A_navbar from '../Components/A_navbar'



function A_Add_Blog() {

    return (
        <>
                  <A_navbar />
            <div data-aos="fade-down" data-aos-duration="1500"> 
                <div className="breadcumb-area text-primary" style={{ backgroundImage: 'url(Admin/Blog/img/bg-img/breadcumb.jpg)' }}>
                    <div className="container h-100">
                        <div className="row h-100 align-items-center">
                            <div className="col-12">
                                <div className="bradcumb-title text-center">
                                    <h2>ADD BLOG </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-12 p-5 " data-aos="fade-up" data-aos-duration="1500" style={{ backgroundColor: ("#2372da6f") }}>


                    <div className="panel-body p-5" style={{ backgroundColor: ("#2372da4a"), borderRadius: 50 }}>
                        <form role="form" >
                            <div className="form-group">
                                <label>Enter Blog Name</label>
                                <input className="form-control" type="text"  name='blog' placeholder='Enter Blog Name' />
                            </div>
                            <div className="form-group">
                                <label>Enter Skim</label>
                                <textarea className="form-control" name='skim' type="text" placeholder='Enter Skim' />
                            </div>
                            <div className="form-group">
                                <label>Skim Details</label>
                                <textarea className="form-control" type="text" name='skimdetails' placeholder='Enter Item Skim' />
                            </div>
                            <div className="form-group">
                                <label>Add Skim IMG</label>
                                <input className="form-control" type="url" name='skimImg' placeholder='Enter Skim IMG' />
                            </div>



                            <button type="submit" className="btn btn-success mx-3 mt-3">ADD </button>
                            <button type="reset" className="btn btn-primary mx-3 mt-3">Reset</button>
                        </form>
                    </div>

                </div>
            </div>
        </>
    )
}

export default A_Add_Blog