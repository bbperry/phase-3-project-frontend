import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function OrderCard({order}) {

      const { total_quantity, total_price, created_at } = order;

    


  return (
    <section className='card-container'>
      <div className='ui card'>
          <div className='card'>
        <div className='order-header'>
            <h3>Order on {created_at.slice(0,10)}</h3>
        </div>
        <p>Items Purchased: {total_quantity}</p>
        <p>Total Cost: {total_price}</p>
        </div>
      </div>
    </section>
  );
}

export default OrderCard;