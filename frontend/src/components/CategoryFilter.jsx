import React from "react";

function CategoryFilter({
  categories,
  selectedCategory,
  handleCategoryChange,
}) {
  return (
    <div>
      <label>Filter by Category: </label>
      <select
        value={selectedCategory}
        onChange={(e) => handleCategoryChange(e.target.value)}
      >
        <option value="">All Categories</option>
        {categories.map((category) => (
          <option key={category.id} value={category.id}>
            {category.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default CategoryFilter;
