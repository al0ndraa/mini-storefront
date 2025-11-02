//src/app/components/ProductCard.jsx
'use client';

import React from 'react';

export default function ProductCard({product,addToCart}){
    return(
        <div style={{ border: '1px solid #ccc', margin: '10px', padding: '10px', width: '200px' }}>
      <h3>{product.name}</h3>
      <p>Category: {product.category}</p>
      <p>Price: ${product.price}</p>
      <p>{product.description}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
}