import React, { useEffect, useState } from 'react'
import A_navbar from '../Components/A_navbar'
import axios from 'axios';


function A_Dashboard() {
    useEffect(() => {
        fetch();
    }, [])

    const [data, setdata] = useState([]);
    const fetch = async () => {
        const result = await axios.get(`https://jsonplaceholder.typicode.com/photos`);
        // console.log(result.data);
        setdata(result.data)
    }
    return (
        <div>
            <A_navbar />


            <div className="breadcumb-area" style={{ backgroundImage: 'url(Admin/Blog/img/bg-img/breadcumb.jpg)' }}>
                <div className="container h-100">
                    <div data-aos="fade-in" className="row h-100 align-items-center">
                        <div className="col-12">
                            <div className="bradcumb-title text-center">
                                <h2> LAZY LOADING </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            < div className="container-fluid" >
                <div className="container">
                    <div className="row">

                        <div className=" col-lg-12 ">
                            <div className="bg-light  p-lg-5">


                                <table className="table">
                                    <thead className="table-info">
                                        <tr>
                                            <td> ID</td>
                                            <td> Name</td>
                                            <td> Image</td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            data && data.map((value) => {
                                                return (
                                                    <tr>
                                                        <td><b>{value.id}</b></td>
                                                        <td><b>{value.title}</b></td>
                                                        <td> <img src={value.url} alt="" width={50} height={50} /></td>
                                                        <td>
                                                        </td>
                                                    </tr>
                                                )
                                            })
                                        }



                                    </tbody>
                                </table>

                            </div>
                        </div>
                    </div>
                </div>
            </div >

        </div>
    )
}

export default A_Dashboard