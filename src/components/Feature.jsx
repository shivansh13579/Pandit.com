import UseMediaQuary from "@/hooks/UseMediaQuary";
import React, { useState } from "react";
import { featureData } from "@/data/products";

function Feature() {
  const isAboveScree = UseMediaQuary("(min-width:1060px )");
  const [productList, setProductList] = useState(featureData);

  return (
    <>
      {isAboveScree ? (
        <div className="w-5/6 mx-auto py-8 flex justify-between">
          {productList.map((item) => (
            <div
              key={item.id}
              className="flex flex-col justify-center items-center"
            >
              <img
                className="rounded-full w-20 h-20"
                src={item.src}
                alt={item.name}
              />
              <h1 className="font-semibold text-lg text-center mt-2">
                {item.name}
              </h1>
            </div>
          ))}
        </div>
      ) : (
        <div className="w-5/6 mx-auto pt-6 overflow-x-auto overflow-y-hidden flex space-x-4 touch-auto scrollbar-hide snap-x snap-mandatory">
          {productList.map((item) => (
            <div
              key={item.id}
              className="flex flex-col justify-center items-center min-w-[80px] snap-center"
            >
              <img
                className="rounded-full object-cover w-20 h-20"
                src={item.src}
                alt={item.name}
              />
              <h1 className="font-semibold text-lg text-center mt-2">
                {item.name}
              </h1>
            </div>
          ))}
        </div>
      )}
      ,
    </>
  );
}

export default Feature;
