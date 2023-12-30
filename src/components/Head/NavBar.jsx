import React from "react"
import { Link } from "react-router-dom"

function NavBar () {
    return (
        <ul>
            <Link to={"/"}>Inicio</Link>
            <li>Fechas</li>
            <li>Videos</li>
            <li>Albums</li>
            <li>La banda</li>
            <Link to={"/shop"}>Tienda</Link>
        </ul>
    )
}

export default NavBar