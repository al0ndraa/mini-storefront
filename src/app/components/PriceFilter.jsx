// src/app/components/PriceFilter.jsx

'use client';

import React from 'react';

export default function PriceFilter({ priceRange, setPriceRange }) {
  const handleChange = (e, index) => {
    const value = Number(e.target.value);
    const newRange = [...priceRange];
    newRange[index] = value;
    setPriceRange(newRange);
  };
return (
<div>
<h4>Filter by Price</h4>
<label>
    Min:
<input
    type="number"
    value={priceRange[0]}
    onChange={(e) => handleChange(e, 0)}/>
</label>
<label>
    Max:
<input
    type="number"
    value={priceRange[1] === Infinity ? '' : priceRange[1]}
    onChange={(e) => handleChange(e, 1)}/>
</label>
    </div>
  );
}