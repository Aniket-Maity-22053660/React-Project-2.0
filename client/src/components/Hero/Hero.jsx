import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'
export const Hero = ()=>{
    return(
        <div className="hero container">
            <div className="hero-text">
                <h1>We ensure better education for better world</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero in ipsa sunt ullam commodi voluptas explicabo fugiat officiis iure, qui expedita error sit, praesentium eligendi architecto unde voluptates temporibus laudantium?</p>
            </div>
            <button className='btn'>Explore <img src={dark_arrow} alt='' /></button>
        </div>
    )
}
