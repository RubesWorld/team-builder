import React from 'react'

export default function Friend(props){
const {details} = props

// if(!) {
//     return <h3>Obtaining fetching friend details. Please wait...</h3>
//     }

    return (
        <div className='friend container'>
            <h2>{details.name}</h2>
            <p>{details.email}</p>
            <p>{details.role}</p>
        </div>
    )
}