import React from 'react';

export default function DeliveryCard({ deliveryProps }) {
  return (
    <div className="card-delivery">
      <div className="card-delivery-left">
        <img src={deliveryProps.icon} width={15} height={15} alt={`${deliveryProps.title}. ${deliveryProps.description}`} />
      </div>
      <div className="card-delivery-right">
        <h4>{deliveryProps.title}</h4>
        <p>{deliveryProps.description}</p>
      </div>
    </div>
  );
}
