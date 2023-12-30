import React from "react"
import { Link } from "react-router-dom"

function NavBar () {
    return (
        <ul className="navbar">

            <li className="link-nav">
                <Link to={ "/" }>Inicio</Link>
            </li>
            <li>Fechas</li>
            <li>Videos</li>
            <li>Albums</li>
            <li>La banda</li>
            <li className="link-nav">
                <Link to={ "/shop" }>Tienda</Link>
            </li>
            
        </ul>
    )
}

export default NavBar