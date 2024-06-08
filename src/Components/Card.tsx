import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { Listprovider } from './store';

export default function Card(props:{
    product:any
}) {
    
   const {product}=props;
    return (
        <>
            {product.map((val: any, i: any) => {
                return (
                    <>
                    <Link to={`/${val.id}`} className='text-decoration-none'>
                        <div className="card mt-2 shadow-lg" style={{ width: '18rem',  height:'30rem' }} >
                            <img src={val.thumbnail} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{val.title}</h5>
                                <p className="card-text">{val.description}</p>
                                {/* <Link className="btn btn-primary text-white" to={`/${val.id}`}>More</Link> */}
                            </div>
                        </div>
                    </Link>
                    </>
                )
            })}

        </>

    )
}


