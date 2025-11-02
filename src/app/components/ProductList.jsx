//src/app/components/ProductList.jsx
'use client';


import React from 'react';
import ProductCard from './ProductCard';

export default function ProductList({products, addToCart}){
return(
    <div style={{display:'flex',flexWrap:'wrap'}}>
    {products.map((product)=>(
        <ProductCard 
            key={product.id}
            product={product}
            addToCart={addToCart}/>
))}
    </div>
    );
}