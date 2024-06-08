import React from 'react';
import Header from '../Components/Header';
import { useLocation } from 'react-router-dom';
import { data } from '../Components/data';

export default function Blogsdetails() {
    const location = useLocation();
    const crntpath = location.pathname;
    const crntid = parseInt(crntpath.split('/')[2]); // Parse crntid as an integer
    console.log(crntid);

    const crntdata = data.filter((val) => val.id === crntid); // Use strict equality === for comparison
    
    return (
        <div>
            <Header />
            {crntdata.map((item, index) => (
                <div key={index}>
                    {/* Render your blog details here */}
                    <h2>{item.title}</h2>
                    <p>{item.bod}</p>
                </div>
            ))}
        </div>
    );
}
