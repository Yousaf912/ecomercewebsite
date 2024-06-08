import React from 'react'

export default function Loader2() {
    return (
        <div className="text-center mx-auto mt-5">
            <div className="spinner-border" role="status" style={{width: '5rem' , height: '5rem'}}>
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}
