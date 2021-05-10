import React, {useState} from 'react'



function Navbar({ children }) {
    return(
        <header className="h-navigation">
            <div className="h-navigation-content">
                <div className="h-navigation-container">
                {children}
                </div>
            </div>
        </header>
    )
}



export default Navbar
