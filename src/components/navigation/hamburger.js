import React, {useState} from 'react'
import Navbar from '../navigation/navbar'




function Hamburger() {
    const [active, setActive] = useState(false)

    return (

        <div className="flex-child">
            <button onClick={() => setActive(!active)} className={active ? "h-navigation-menu-button mzp-is-active" : "h-navigation-menu-button"} type="button" aria-label="Navigation Menu" aria-controls="h-navigation-items">Menu</button>
        </div>
        
    )

}

export default Hamburger