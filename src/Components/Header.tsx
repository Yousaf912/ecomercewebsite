import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import style from './header.module.css';
import { TiShoppingCart } from "react-icons/ti";
import { CgProfile } from "react-icons/cg";

function Header() {

    const data = [
        {
            name: 'Home',
            pth: '/'
        },
        {
            name:'Products',
            pth:'/allproducts'
        },
        {
            name: 'About Us',
            pth: '/about'
        },
        {
            name: 'Contact Us',
            pth: '/contact'
        },
        {
            name: 'FAQs',
            pth: '/faqs'
        },
        
    ]
    const location = useLocation();
    const [active, setActive] = useState(location.pathname);

    const handleSetActive = (path: any) => {
        setActive(path);
    };

    return (
        <div className={`${style.hedr}`}>
            <div className="container ">
                <div className="row  ">
                    <div className="col-3">
                        <h1 className="mt-2 text-white"  >JoseMart</h1>
                    </div>

                    <header className="d-flex col-7 justify-content-center py-3">
                        <ul className="nav nav-pills">
                            {
                                data.map((val, i) => {
                                    return (
                                        <li className="nav-item " key={i}>
                                            <Link
                                                className={`  nav-link ${active === val.pth && "active"
                                                    }` }
                                                to={val.pth}
                                                onClick={() => handleSetActive(val.pth)}
                                                style={{color:'#19575d'}}
                                            >
                                                {val.name}
                                            </Link>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </header>
                    <div className="col-2 mt-3  text-white">
                        <TiShoppingCart className="fs-1 me-3" />
                        <CgProfile className="fs-1" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;

