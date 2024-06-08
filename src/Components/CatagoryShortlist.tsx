
import React from 'react';
import { Link } from 'react-router-dom';

export default function CatagoryShortlist(props: { catagory: any }) {
    const { catagory } = props;
    const imgdata = [
        'https://c4.wallpaperflare.com/wallpaper/414/818/456/mascara-shadows-cosmetics-blush-wallpaper-preview.jpg',
        'https://img.freepik.com/premium-photo/perfume-fragrance-products-men-plain_168501-941.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9NIcshwNYSTJ1LcYp-b0N3m1-hqQhtAtXYg&s',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkBe17Fy8WRQFkm-Br3pXY98PpGvrwBDBDfQ&s',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRgY-KjMXc-Sa61Ji9yHjCHjl1qcSm_q4stQ&s',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ-oVQAJZvqtGqQ-eprNtpwj8UH7Mi2_AU6A&s',
        'https://images6.alphacoders.com/991/991781.jpg',
        'https://images.pexels.com/photos/1337477/pexels-photo-1337477.jpeg?cs=srgb&dl=pexels-ajaykumar786-1337477.jpg&fm=jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9wsx_w5qb1u71Q25DnFu_PK-0RCBGp1nBxQ&s',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTruLP379zPN2XjZRFivCHboS1KDWeQEPERxA&s',
        'https://www.91-cdn.com/hub/wp-content/uploads/2022/07/best_4k_recording_phones_270.png',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR34j0CVT6yRbi3w4thF2izrhPt2OX4noeaZQ&s'
    ];

    return (
        <div className="container">
            <div className="row">
                {
                    catagory.map((res: any, i: any) => {
                        const imageUrl = imgdata[i % imgdata.length];
                        return (
                            <div className="col-2 " key={i}>
                                <Link to={`/products/${res}`}  className='text-decoration-none' style={{color:'#19575d'}} >
                                    <img className='border rounded-circle mb-2' src={imageUrl} width={120} height={120} alt={`Category ${res}`} />
                                    <h3>{res}</h3>
                                </Link>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}
