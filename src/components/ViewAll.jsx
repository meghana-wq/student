import React, { useState } from 'react'
import Navbar from './Navbar'

const ViewAll = () => {
    const[data,changeData]=useState(
        [
        
            {"Name":"orwel","Admission":111,"Roll":23},
            {"Name":"megha","Admission":113,"Roll":26},
            {"Name":"priya","Admission":114,"Roll":28},
            {"Name":"leya","Admission":114,"Roll":24}
        ]
    )
  return (
    <div>
        <Navbar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        {data.map(
                            (value,index)=>{
                                return <div className="col col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                                <div class="card">
                                    <ul class="list-group list-group-flush">
                                        <li class="list-group-item">{value.Name}</li>
                                        <li class="list-group-item">{value.Admission}</li>
                                            <li class="list-group-item">{value.Roll}</li>
                                    </ul>
                                </div>
                            </div>
                            }
                        )}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ViewAll