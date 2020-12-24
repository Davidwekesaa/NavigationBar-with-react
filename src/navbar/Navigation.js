import React from 'react'
import './Navigation.css'
import logo from '../logo/logo.svg'
const Navigation =() =>{
    return<>
<div className = 'nav'>
    <header className="header">
        
        
       <h1>Portfolio
    
       </h1>
     
        <nav>
            <ul className="nav_links">
                <li className="li"><a href="#" className="a">Home</a></li>
                <li><a href="#" className="a">About</a></li>
                <li><a href="#" className="a">Projects</a></li>
                <li><a href="#" className="a">Contact</a></li>
                <li><a href="#" className="a">Profile</a></li>

            </ul>
        </nav>
    </header>
</div>

    </>


}

export default Navigation