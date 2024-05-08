import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const Products = ({ image, name, price, id }) => {
  return (
    <main>
      {/* <div className="">
        <Link to={`/product/${id}`}>
          <img
            src={image}
            alt={name}
            className="h-[30vh] w-[100vh] object-cover hover:opacity-50 rounded-md shadow-sm"
          />
        </Link>
      </div>
      <div className="flex flex-1 justify-between mt-5">
        <h5>{name}</h5>
        <p>{price}</p>
      </div> */}

      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore
        culpa laudantium corporis impedit aliquam quae quisquam voluptatem
        tenetur sunt dicta eaque, cum vitae dolor est sequi officiis ducimus
        natus. Architecto.
      </p>
    </main>
  );
};

export default Products;
