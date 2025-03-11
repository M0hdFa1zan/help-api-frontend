import React from 'react'
import Herosection from './Components/Herosection'
import Footer from './Components/Footer'
import "./Homepage.css"

function Homepage() {
    return (
        <div className='homepage'>
            <Herosection />
            <Footer />
        </div>
    )
}

export default Homepage
