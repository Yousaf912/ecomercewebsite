import React, { useContext } from 'react'
import Loader from './loader';
import Loader2 from './Loader2';
import { Listprovider } from './store';
import style from './header.module.css'


export default function Catagories(props: { catagory: any, catname: any }) {
  const { catagory, catname } = props;
  const product = useContext(Listprovider)
  return (
    <div>
      <div className='d-flex justify-content-around '>
        <h3>Catagories</h3>
        <p className='mt-2'>{catagory.length == 0 ? <Loader /> : catagory.length}</p>
      </div>
      <ul className=''>
        {
          catagory.map((res: any, i: any) => {
            return (
              <li onClick={() => catname(res)} key={i} className={` ${style.bg}  text-white shadowborder  px-2 mt-1 catlist`}>{res} </li>
            )
          })
        }
      </ul>
    </div>
  )
}
