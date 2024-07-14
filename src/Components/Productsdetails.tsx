import React, { useContext, useEffect, useState } from 'react'
import Header from './Header';
import style from './productdetail.module.css';
import { FaRegStar, FaStar } from "react-icons/fa";
import { MdLocalShipping } from "react-icons/md";
import { PiKeyReturn } from "react-icons/pi";
import { Link, useLocation, useParams } from 'react-router-dom';
import { Listprovider } from './store';
import axios from 'axios';
import { CgProfile } from "react-icons/cg";
import Footer from './Footer';
import Loader2 from './Loader2';




export default function Productsdetails() {
    const [product, setproduct] = useState<any>([]);
    const[imgurl,setimgurl]=useState<string>('');

    const urlid = useParams()

    const getsingledata = () => {
        axios.get(`https://dummyjson.com/products/${urlid.id}`)
            .then((pro) => {
                setproduct([pro.data]);
                setimgurl(pro.data.thumbnail);
            }).catch((eror) => {
                console.log(eror);

            })
    };
    useEffect(() => {
        getsingledata();

    }, [])

   
    const getimgurl=(e:any)=>{
        setimgurl(e)
    }
    return (
        <>
        <Header></Header>
        <div style={{ backgroundColor: '#19575d' }} className='text-white'>
          
        </div>
            <div className="container mt-5 mb-5">
        {product.length == 0 && <Loader2></Loader2>}
                <div className="row">
                    {
                        product.map((val: any, i: any) => {
                            return (
                                <>

                                    <div key={i} className="col-lg-7 imgdiv mt-5">
                               
                                        <img src={ imgurl}  className={`${style.imgcls}`} />
                                        <div className='d-flex mt-5 '>
                                            {
                                                val.images.map((pic: any, i: any) => {
                                                    return (
                                                        <img key={i} src={pic} className={`${style.mrimg} border-0 rounded-3 ms-2 `} onClick={()=>getimgurl(pic)}/>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                    <div className={`col-lg-5 border border-2 rounded-3 ${style.detailsdiv}  p-3`}>
                                        <h2>{val.title}</h2>
                                        <div>
                                            <div className='d-flex justify-content-between'>
                                                <div className='d-flex '>
                                                    <div className='text-warning me-3'>
                                                        <FaRegStar />
                                                        <FaRegStar />
                                                        <FaRegStar />
                                                        <FaRegStar />
                                                    </div>
                                                    <span>({val.rating})</span>
                                                </div>
                                                <p>reviews ({val.reviews.length})</p>
                                            </div>

                                            <div className='d-flex mb-5'>
                                                <MdLocalShipping className='fs-3 me-2 text-primary' />
                                                <p>Free shipping</p>
                                                <div className='d-flex ms-5'>
                                                    <PiKeyReturn className='fs-3 me-2  border rounded-circle bg-primary text-white' />
                                                    <p>Free-30 Day-return</p>
                                                </div>

                                            </div>
                                            <div>
                                                <p>Return Policy: {val.returnPolicy}</p>
                                                <p className='border-0 rounded-3 bg-primary text-center text-white p-2 mb-4'>{val.availabilityStatus}</p>
                                            </div>

                                            <p>Catagory: {val.category}</p>
                                            <p>{val.description}</p>
                                            <h3>Price: ${val.price}</h3>
                                            <button className='btn btn-primary px-5 rounded-5'>Add to Cart</button>

                                            <div className='mt-5'>
                                                <p>Brand: {val.brand}</p>
                                                <p>Sku:{val.sku}</p>
                                                <p> Availbe Stock: {val.stock}</p>
                                            </div>
                                        </div>
                                    </div>



                                    <div className="col-lg-8 mt-5">
                                        <h1>Clients Reviews</h1>
                                        {
                                            val.reviews.map((rev: any, i: any) => {
                                                return (
                                                    <>
                                                        <div className='d-flex  mt-5'>
                                                            <CgProfile className='fs-1 me-4 bg-dark-subtle rounded-circle ' />
                                                            <h4>{rev.reviewerName
                                                            }</h4>
                                                        </div>
                                                        <div className='d-flex '>
                                                            <div className=' text-warning fs-3'>
                                                                <FaStar />
                                                                <FaStar />
                                                                <FaStar />
                                                                <FaStar />
                                                            </div>
                                                            <h4 className='mt-2 ms-3'>({rev.rating})</h4>
                                                        </div>
                                                        <h5>"{rev.comment}"</h5>
                                                        <p>{rev.date}</p>
                                                        <p>{rev.reviewerEmail
                                                        }</p>
                                                    </>
                                                )
                                            })

                                        }

                                    </div>

                                   


                                </>
                            )
                        })
                    }
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}
