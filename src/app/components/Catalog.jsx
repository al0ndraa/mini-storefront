//src/app/components/Catalog.jsx
'use client';

import React, { useState, useEffect } from 'react';
import './style.css';
import ProductList from './ProductList.jsx';
import CategoryFilter from './CategoryFilter.jsx';
import PriceFilter from './PriceFilter.jsx';
import CartSummary from './CartSummary.jsx';

export default function Catalog(){
const [products, setProducts] = useState([]);
const [filteredProducts, setFilteredProducts] = useState([]);
const [categories, setCategories] = useState([]);
const [selectedCategory, setSelectedCategory] = useState('All');
const [priceRange, setPriceRange] = useState([0,Infinity]);
const [cartItems, setCartItems] = useState([]);

useEffect(() => {
  fetch('/api/products')
    .then(res => res.json())
    .then(data => {
      setProducts(data);
      setFilteredProducts(data);
      // Generate unique categories
      const cats = ['All', ...new Set(data.map(p => p.category))];
      setCategories(cats);
    });
}, []);

useEffect(() => {
    let filtered = products;

    if (selectedCategory !=='All'){
        filtered =filtered.filter(p =>p.category === selectedCategory);
    }
filtered = filtered.filter(p =>p.price>=priceRange[0]&&p.price <= priceRange[1]);

setFilteredProducts(filtered);
},
[selectedCategory, priceRange,products]);

const addToCart =(product)=>{
    setCartItems(prev => [...prev,product]);
};
return(
    <div>
<CategoryFilter 
categories={categories} 
selectedCategory={selectedCategory} 
setSelectedCategory={setSelectedCategory}/>
<PriceFilter 
priceRange={priceRange}
setPriceRange={setPriceRange}/>
<ProductList
products={filteredProducts}
addToCart={addToCart}/>
<CartSummary 
cartItems={cartItems}/>
    </div>
);
}