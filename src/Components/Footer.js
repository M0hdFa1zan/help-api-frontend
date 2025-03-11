import React from 'react'
import "./Footer.css"

function Footer() {
    return (
        <div className='footer'>
            <div className='contain-footer'>
                <div className='one'>
                    <div className='sub-head'>Abstract</div>
                    <div>Branches</div>
                </div>
                <div className='two'>
                    <div className='sub-head'>Resources</div>
                    <div>Blog</div>
                    <div>Help Center</div>
                    <div>Release Notes</div>
                    <div>Status</div>
                </div>
                <div className='three'>
                    <div className='sub-head'>Community</div>
                    <div>Twitter</div>
                    <div>LinkedIn</div>
                    <div>Facebook</div>
                    <div>Dribble</div>
                    <div>Podcast</div>
                </div>
                <div className='four'>
                    <div className='sub-head'>Company</div>
                    <div>About Us</div>
                    <div>Careers</div>
                    <div>Legal</div>
                    <div className='contact'>
                        <div className='us'>Contact Us</div>
                        <div>info@abstract.com</div>
                    </div>
                </div>
                <div className='five'>
                    <div className='foot-logo'><img src='../Assets/Images/foot-logo.png' alt='' /></div>
                    <div>© Copyright 2024</div>
                    <div>Abstract Studio Design, Inc.</div>
                    <div>All rights reserved</div>
                </div>
            </div>
        </div>
    )
}

export default Footer
