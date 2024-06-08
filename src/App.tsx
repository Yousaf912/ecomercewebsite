
import { useEffect, useState } from 'react';
import './App.css';
import Header from './Components/Header';
import axios from 'axios';
import Loader from './Components/loader';
import Card from './Components/Card';
import Loader2 from './Components/Loader2';
import { Listprovider } from './Components/store';
import Catagories from './Components/Catagories';
import Herosession from './Components/Herosession';
import Footer from './Components/Footer';
import CatagoryShortlist from './Components/CatagoryShortlist';

function App() {
  
  const [catag, setcatagory] = useState([]);
  const catagory = catag.slice(0,12)
  const getCatagory = () => {
    axios.get('https://dummyjson.com/products/category-list')
      .then((res) => {
        setcatagory(res.data)
      })
  }
  useEffect(() => {
    getCatagory();
  }, []);

  return (
    
      <>
        <div className="App ">
          <Header></Header>

          <div className="container">
            <div className="row">
              <div className='d-flex flex-row-reverse'>
                <div className="col-6 mt-5">
                  <Herosession></Herosession>
                </div>
              </div>
            </div>
          </div>

        </div>
        <h1 className=' col-3  mx-auto pb-3 border-4 border-dark text-center mt-5 mb-5 border-bottom '>Our Categories</h1>
            <CatagoryShortlist catagory={catagory}></CatagoryShortlist>
      
        <div style={{ backgroundColor: '#19575d' }} className='mt-5'>
          <div className="container">
            <div className="row">

              <Footer></Footer>
            </div>
          </div>
        </div>


      </>
  );
}

export default App;
