// src/app/components/CartSummary.js

'use client';

import React from 'react';

export default function CartSummary({ cartItems }) {
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

return (
<div style={{ border: '1px solid #000', padding: '10px', marginTop: '20px' }}>
<h4>Shopping Cart</h4>
    {cartItems.length === 0 ? (
    <p>No items in cart.</p>
    ):(
<ul>
    {cartItems.map((item, index) => (
    <li key={index}>{item.name} - ${item.price}</li>
    ))}
</ul>
    )}
    <p>Total: ${total}</p>
    </div>
  );
}