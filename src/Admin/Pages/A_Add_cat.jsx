import React from 'react'
import A_navbar from '../Components/A_navbar'



function A_Add_cat() {

    return (

        <div style={{ backgroundColor: ("#2372da39") }}>

            <A_navbar />
            <div className="breadcumb-area " data-aos="fade-down" data-aos-duration="1500" style={{ backgroundImage: 'url(Admin/Blog/img/bg-img/breadcumb.jpg)' }}>
                <div className="container h-100">
                    <div className="row h-100 align-items-center">
                        <div className="col-12">
                            <div className="bradcumb-title text-center">
                                <h2>ADD CATEGORIES</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{ backgroundColor: ("#2372da39") }}>
                <div className="col-md-12 p-5 " data-aos="fade-up" data-aos-duration="1500" style={{ backgroundColor: ("#2372da39") }} >
                    <div className="panel-body p-5" style={{ backgroundColor: ("#2372da4a"), borderRadius: 50 }}>


                        <form role="form"  >
                            <div className="form-group">
                                <label>Enter CATEGORIES Type </label>
                                <input className="form-control" type="text" name='Menu_Type' placeholder='Enter Menu Type' />
                            </div>
                            <div className="form-group">
                                <label> CATEGORIES Images </label>
                                <input className="form-control" type="url"  name='Menu_img' placeholder='Enter Menu Images' />
                            </div>
                            <button type="submit" className="btn btn-success mx-4">ADD </button>
                        </form>


                    </div>
                </div>

            </div>
        </div>

    )
}

export default A_Add_cat

