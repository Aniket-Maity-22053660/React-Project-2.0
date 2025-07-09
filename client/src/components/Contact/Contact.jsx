import React, { useState } from 'react'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'
import './Contact.css'
export const Contact = ()=>{
    const [sending, setSending] = useState(false);
    const [failed, setFailed] = useState(false);
    const [success, setSuccess] = useState(false);
    
    function onsubmithandler(e){
        e.preventDefault();
        setSending(true);
        setTimeout(()=>{setSending(false)}, 2000);
        const formData = new FormData();
        formData.append('name', e.target.name.value);
        formData.append('phone', e.target.phone.value);
        formData.append('email', e.target.email.value);
        formData.append('message', e.target.message.value);
        fetch('http://localhost:8000/django/save/', {
            method:'POST',
            headers:{
                /*'content-type':'application/json',*/
                'Authorization': 'Token 60a1e1f730df4cbd0b9c3d48ee4932e12576f2d1'
            },
            body:(formData)
        }).then(response=>response.json()).then(data=>{
           /* alert('Message sent successfully!'); */
            console.log(data);
            /* setSending(false); */
            setTimeout(()=>{setFailed(true);}, 3000);
            setTimeout(()=>{window.location.reload();}, 4000);
            
        }).catch(error=>{
            setTimeout(()=>{setSuccess(true);}, 2000);
            setTimeout(()=>{window.location.reload();}, 6000);
            
        })
    }
    return(
        <div className='contact container'>
            <div className='contact-col'>
                <h3>Send us a message <img src={msg_icon} alt=''/></h3>
                <p>Feel free to reach out through contact form or find our information below. Your feedback, questions, and suggestions are important to us as we strieve to provide exceptional services to our university communnity.</p>
                <ul>
                <li><img src={mail_icon} alt='' />22053660@kiit.ac.in</li>
                <li><img src={phone_icon} alt='' />9547256351</li>
                <li><img src={location_icon} alt='' />Contai, West Bengal</li>
               </ul>
            </div>
            
            <div className='contact-col'>
                <form onSubmit={(e)=>{onsubmithandler(e)}}>
                    <label>Your name</label>
                    <input type='text' placeholder='Enter your name' name='name' required/>
                    <label>Phone number</label>
                    <input type='tel' placeholder='Enter your mobile number' name='phone'/>
                    <label>Your email</label>
                    <input type='email' placeholder='Enter your email id' name='email'/>
                    <label>Write your messages here</label>
                    <textarea name='message' rows='6' placeholder='Enter your message' required></textarea>
                    <button type='submit' className='btn dark-btn'>Submit now<img src={white_arrow}/></button>
                </form>
                <span style={sending?{'display':'inline-block'} : {'display':'none'}} id='send'>Sending...!</span>
                <span style={failed?{'display':'inline-block'}:{'display':'none'}} id='success'>Sent!</span>
                <span style={success?{'display':'inline-block'}:{'display':'none'}} id='fail'>Failed!</span>
            </div>
        </div>
    )
}