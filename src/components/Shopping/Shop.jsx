import React from "react"
import DeliveryCard from "./DeliveryCard"
import "../../styles/shop.css"

const deliveryProps = [
    {
        id: 1,
        icon: "src/assets/icons/truck.svg",
        title: "Enviamos tu compra",
        description: "Entregas a todo el pais"
    },
    {
        id: 2,
        icon: "src/assets/icons/credit-card.svg",
        title: "Paga como quieras",
        description: "Tarjetas de credito o efectivo"
    },
    {
        id: 3,
        icon: "src/assets/icons/lock.svg",
        title: "Compra con seguridad",
        description: "Tus datos siempre protegidos"
    }
]




function Shop () {
    return (
        <section className="shop-section">
            <div className="shop-top">
                <h1 className="shop-title">TIENDA</h1>
                <div className="delivery-info">
                    <DeliveryCard deliveryProps={deliveryProps[0]}/>
                    <DeliveryCard deliveryProps={deliveryProps[1]}/>
                    <DeliveryCard deliveryProps={deliveryProps[2]}/>
                </div>
            </div>
            <div className="shop-bottom"></div>
        </section>
    )
}

export default Shop