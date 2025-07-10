import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import { Link } from 'react-scroll'

export const Navbar = ()=>{
    const [sticky, setSticky] = useState(false);
    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            window.scrollY > 50 ? setSticky(true): setSticky(false)
        })
    }, []);
    const [mobileMenu, setMobileMenu] = useState(false);
    const toggleMenu = ()=>{
        mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
    }
    function handleMenu(e){
        toggleMenu();
    }
    return(
        <>
        <nav className={`hide-nav`} onClick={(e)=>handleMenu(e)}>menu</nav>
        <nav className={`container ${sticky ? 'dark-nav' : ''} ${mobileMenu?'hide':''}`}>
            <img src={logo} alt="" className="logo"/>
            <ul>
                <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
                <li><Link to='programs' smooth={true} offset={-260} duration={500}>Program</Link></li>
                <li><Link to='about' smooth={true} offest={-150} duration={500}>About</Link></li>
                <li><Link to='campus' smooth={true} offset={-260} duration={500}>Campus</Link></li>
                <li><Link to='testimonials' smooth={true} offset={-260} duration={500}>Testimonials</Link></li>
                <li><button className="btn"><Link to='contact' smooth={true} offset={-260} duration={500} style={{borderBottom:'none'}}>Contact</Link></button></li>
                
            </ul>
        </nav>
        </>
    )
}
