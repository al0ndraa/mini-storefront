// src/app/components/CategoryFilter.jsx

'use client';

import React from 'react';

export default function CategoryFilter({ categories, selectedCategory, setSelectedCategory }) {
  return (
    <div>
    <h4>Filter by Category</h4>
      {categories.map((category) => (
    <button
    key={category}
    onClick={() => setSelectedCategory(category)}
    style={{
    margin: '5px',
    backgroundColor: selectedCategory === category ? '#f300cbff' : '#eaeaeaff',
    color: selectedCategory === category ? '#ff00bfff' : '#ff00d9ff',
    }}
    >
    {category}
    </button>
    ))}
    </div>
  );
}