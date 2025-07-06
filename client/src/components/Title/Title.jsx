import React from 'react'
import './Title.css'
export const Title = (props)=>{
    return (
        <div className='title container'>
            <p>{props.sub_heading}</p>
            <h2>{props.heading}</h2>
        </div>
    )
}