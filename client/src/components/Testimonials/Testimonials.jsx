import React from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'
export const Testimonials = ()=>{
    return (
        <div className='testimonials container'>
            <img src={next_icon} alt='' className='next-btn'/>
            <img src={back_icon} alt='' className='back-btn'/>
            <div className='slider'>
                <ul>
                    <li>
                        <div className='slide'>
                            <div className='user-info'>
                                <img src={user_1} alt=''/>
                                <div className='desc'>
                                    <h3>William Jackson</h3>
                                    <span>Educity, USA</span>
                                </div>
                            </div>
                            <p>Choosing to pursue my degree at Educity was one of the best descions I have ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                        </div>
                    </li>
                    <li>
                        <div className='slide'>
                            <div className='user-info'>
                                <img src={user_2} alt=''/>
                                <div>
                                    <h3>king Star</h3>
                                    <span>Sayonara</span>
                                </div>
                            </div>
                            <p>Choosing to pursue my degree at Educity was one of the best descions I have ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                        </div>
                    </li>
                    <li>
                        <div className='slide'>
                            <div className='user-info'>
                                <img src={user_3} alt=''/>
                                <div>
                                    <h3>King Star Khan</h3>
                                    <span>Brazil</span>
                                </div>
                            </div>
                            <p>Choosing to pursue my degree at Educity was one of the best descions I have ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                        </div>
                    </li>
                    <li>
                        <div className='slide'>
                            <div className='user-info'>
                                <img src={user_4} alt=''/>
                                <div>
                                    <h3>King King</h3>
                                    <span>Italy</span>
                                </div>
                            </div>
                            <p>Choosing to pursue my degree at Educity was one of the best descions I have ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}