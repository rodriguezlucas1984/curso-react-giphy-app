import React, { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

function GifExpertApp(props) {
  const [categories, setCategories] = useState(["Dragon Ball"]);

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
