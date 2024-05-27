import React, { Suspense, lazy } from 'react'
import { Helmet } from 'react-helmet'
const Xyz = lazy(() => import("./A_Dashboard"))

function Lazyloading() {
    return (
        <div>
            <Helmet>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" />
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
            </Helmet>




            <Suspense fallback={<div className='d-flex justify-content-center align-items-center'>
                <div class="spinner-grow text-primary" style={{ marginTop: 200, height: 500, width: 500 }} ></div>
            </div>}>
                <Xyz />
            </Suspense>


        </div>
    )
}

export default Lazyloading