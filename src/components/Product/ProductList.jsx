import React from "react";
import { useFilterContext } from "../../context/filter_context";
import { useProductsContext } from "../../context/products_context";
import Product from "./Products";

const ProductList = () => {
  const { featured_products: featured } = useProductsContext();
  // const { filtered_products: products } = useFilterContext();
  return (
    <div>
      {/* <ProductView products={products} /> */}{" "}
      <div className="grid lg:grid-cols-3 px-10 gap-10">
        {featured.map((product) => {
          return <Product key={product.id} {...product} />;
        })}
      </div>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo, minima.
        Nihil dolorum corporis adipisci, enim unde sint deserunt fugit
        laboriosam provident necessitatibus ut quis delectus illo sapiente totam
        eum debitis?
      </p>
    </div>
  );
};

export default ProductList;
