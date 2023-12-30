import React from "react"
import { Link } from "react-router-dom"

const cartSrc = "src/assets/icons/cart.svg"


function HeaderCart () {
    return (
        <div className="header-cart">
            <div className="header-cart-left-container">
                <Link className="header-cart-linkIcon" to={ "/cart" }>
                    <img src={ cartSrc } alt="Shopping cart" />
                </Link>
                <span className="header-cart-count">0</span>
            </div>
            <div className="header-subtotal-count">
              $ 0.00
            </div>

            
        </div>

      
    )
}

export default HeaderCart
