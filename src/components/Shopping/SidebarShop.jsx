import React from 'react';

export default function SidebarShop({ categories, handleCategoryChosen }) {
  return (
    <aside className="sidebar-shop">
      <h1 className="sidebar-title">Categorias</h1>
      <div className="categories-container">
        { categories?.map((category) => (
          <button className="category-btn" type="button" key={category} onClick={() => handleCategoryChosen(category)}>
            { category }
          </button>
        )) }
        <button
          className="category-btn"
          type="button"
          onClick={() => {
            handleCategoryChosen('All');
          }}
        >
          All
        </button>
      </div>
    </aside>
  );
}
