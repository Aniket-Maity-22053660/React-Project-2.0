
import React from 'react'
import { Navbar } from './components/Navbar/Navbar.jsx';
import { Hero } from './components/Hero/Hero.jsx';
import { Programs } from './components/Programs/Programs.jsx'
import { Title } from './components/Title/Title.jsx'
import { About } from './components/About/About.jsx'
import { Campus } from './components/Campus/Campus.jsx'
const App = ()=>{
  return(
    <>
    <Navbar />
    <Hero />
    <Title sub_heading='our program' heading='What we offer'/>
    <Programs />
    <About />
    <Title sub_heading='Gallery' heading='Campus Photos'/>
    <Campus />
    <Title sub_heading='testimonials' heading='What student says'/>
    </>
  )
}

export default App;