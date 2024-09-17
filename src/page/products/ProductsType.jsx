import React, { useState } from "react";
import Layout from "../Layout";
import { productList } from "@/data/products";
import ProductType from "@/components/products/ProductType";

function ProductsType() {
  const [productLists, setProductLists] = useState(productList);

  return (
    <Layout>
      <div className="w-full relative">
        <img
          className="w-full h-[150px] sm:h-[200px]"
          src="https://www.pandit.com/cdn/shop/files/collections_page_header_page_15.jpg?v=1718798982&width=1920"
          alt=""
        />
        <h1 className="absolute left-0 right-0 font-serif top-14 sm:top-14 text-white text-center text-4xl md:text-6xl font-bold tracking-wide">
          Collections
        </h1>
      </div>
      <ProductType productLists={productLists} />
    </Layout>
  );
}

export default ProductsType;
