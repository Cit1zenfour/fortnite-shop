import React from 'react'

const Footer = () => {
    return (
        <footer className='page-footer orange lighten-3'>
            <div className='footer-copyright'>
                <div className='container white-text darken-2'>
                    © {new Date().getFullYear()} Citizenfour
                    <a href="#/" className='gray-text right'>Repo</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer