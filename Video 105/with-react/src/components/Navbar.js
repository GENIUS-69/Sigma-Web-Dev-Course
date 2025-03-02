import React from 'react'
import Footer from './Footer'
const Navbar = (props) => {
    return (
        <div>
            <div className="logo">{props.logoText}</div>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact Us</li>
                </ul>
                <Footer></Footer>
            </nav>
        </div>
    )
}

export default Navbar
