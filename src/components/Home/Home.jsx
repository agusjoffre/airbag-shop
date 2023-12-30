import React from "react"
import "../../styles/home.css"

const velezTextSrc = "src/assets/misc/15deDiciembre.png"
const tshirtsSrc = "src/assets/misc/Tshirts.png"

export default function Home () {
    return (
        <div className="home-container">
            <a href="https://www.airbag.la/" target="_blank" rel="noreferrer">
            <div className="home-central-container">
                <img src={ tshirtsSrc } alt="Remera Uber Puber" />
                <img src={ velezTextSrc } alt="15 de diciembre Estadio Velez Sarsfield" />
                </div>
            </a>
        </div>
       
    )
}