import React from 'react'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'
import './Contact.css'
export const Contact = ()=>{
    function onsubmithandler(e){
        e.preventDefault();
        const formData = {
            name: e.target.name.value,
            phone: e.target.phone.value,
            email: e.target.email.value,
            message: e.target.message.value
        }
        fetch('http://localhost:8000/django/save/', {
            method:'POST',
            headers:{
                'content-type':'application/json',
                'Authorization': 'Token 60a1e1f730df4cbd0b9c3d48ee4932e12576f2d1'
            },
            body:JSON.stringify(formData)
        }).then(response=>response.json()).then(data=>{
            alert('Message sent successfully!');
            console.log(data);
        }).catch(error=>{
            alert('Error sending message!');
            
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
                <span>Sending</span>
            </div>
        </div>
    )
}