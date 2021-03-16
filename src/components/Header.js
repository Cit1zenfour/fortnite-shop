import React from 'react'

const Header = () => {
    return (
        <nav className='orange darken-3'>
            <div className='nav-wrapper'>
                <img className='fortnite-logo brand-logo' src="https://pngimg.com/uploads/fortnite/fortnite_PNG25.png" alt="fortnite"/>
                <ul id='nav-mobile' className='right hide-on-med-and-down'>
                    <li><a href="#/">Repo</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Header