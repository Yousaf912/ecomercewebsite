import React, { useEffect, useState } from 'react'
import Card from '../Components/Card'
import Header from '../Components/Header'
import axios from 'axios';
import Catagories from '../Components/Catagories';
import Loader2 from '../Components/Loader2';
import Footer from '../Components/Footer';
import { useLocation } from 'react-router-dom';

function AllProducts() {
    const [catagory, setcatagory] = useState([]);
    const [product, setproduct] = useState([]);
    

    const getCatagory = () => {
        axios.get('https://dummyjson.com/products/category-list')
            .then((res) => {
                setcatagory(res.data)
            })
    }
 

    
    const getproduct = () => {
        axios.get('https://dummyjson.com/products')
            .then((res) => {
                setproduct(res.data.products)
            })
    }

    const catname = (name: any) => {
        axios.get(`https://dummyjson.com/products/category/${name}`)
            .then((nm) => {
                setproduct(nm.data.products)
            })
    }
    useEffect(() => {
        getCatagory();
        getproduct();
    }, []);


    return (
        <>
            <Header></Header>
            <div className="container-fluid mt-5">
                <h1 className='text-center mb-5' style={{ color: '#19575d' }}>Our Products</h1>
                <div className="row">
                    <div className="col-3">

                        <Catagories catagory={catagory} catname={catname} ></Catagories>
                    </div>
                    <div className="col-lg-8  text-center">

                        <div className='d-flex flex-wrap justify-content-between '>
                            {
                                product.length == 0 ? <Loader2></Loader2> :
                                    <Card product={product}></Card>
                            }
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}

export default AllProducts;
