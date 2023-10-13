import React, { useContext } from "react";
//import product context
import { ProductContext } from "./../contexts/ProductContext";

import Product from "./../components/Product";

const Home = () => {
  const { products } = useContext(ProductContext);
  console.log(products);
  //get only men and women's clothing.
  const filteredProducts = products.filter(
    (product) =>
      product.category === "men's clothing" ||
      product.category === "women's clothing",
  );
  return (
    <div>
      <section className="py-16">
        <div className="container mx-auto">
          <div className="mx-auto grid max-w-sm grid-cols-1 gap-[30px] md:max-w-none md:grid-cols-2 lg:grid-cols-4  xl:grid-cols-5">
            {filteredProducts.map((product) => {
              return <Product key={product.id} product={product} />;
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
