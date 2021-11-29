import React, { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

function GifExpertApp({ defaultCategories = [] }) {
  const [categories, setCategories] = useState(defaultCategories);

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr />

      <ol>
        {categories.map((category, index) => {
          return <GifGrid key={category} category={category} />;
        })}
      </ol>
    </>
  );
}

export default GifExpertApp;
