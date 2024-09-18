import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { productList } from "@/data/products";

const ServiceCard = ({ filterItem }) => {
  return (
    <div className=" w-full mx-auto flex flex-wrap justify-center gap-7 pb-9 pt-4">
      {filterItem.map((product) => {
        return (
          <AnimatePresence>
            <motion.div
              variants={{
                hidden: { opacity: 0, y: -50 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.2, duration: 1, ease: "linear" },
                },
              }}
              viewport={{ once: true, amount: 0 }}
              initial="hidden"
              whileInView="visible"
              key={product.id}
              className="w-full sm:w-1/3 md:w-1/3 lg:w-1/4 h-full flex flex-col  items-center justify-center gap-3 overflow-hidden rounded-lg"
            >
              <motion.div
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.4 },
                }}
                whileTap={{ scale: 0.9 }}
                className="w-full"
              >
                <Link to={`/collection/${product.slug}`}>
                  <img
                    className="w-full h-fit rounded-xl "
                    src={product.src}
                    alt={product.alt}
                  />
                </Link>
              </motion.div>
              <h1 className="text-2xl w-full text-center">{product.name}</h1>
              <Link to={`/collection/${product.slug}`}>
                <p className="w-full flex items-center gap-2 font-bold border-b border-black hover:border-pink-400 pb-1">
                  Shop Collection
                  <span>
                    <img src="../arrow.svg" alt="" />
                  </span>
                </p>
              </Link>
            </motion.div>
          </AnimatePresence>
        );
      })}
    </div>
  );
};

function OurService() {
  const [productLists, setProductLists] = useState(productList);

  const filterItem = productLists.filter((item) => {
    if (item.id >= 1 && item.id <= 5) {
      return item;
    }
  });

  return (
    <div>
      <div className="w-5/6 mx-auto">
        <motion.h1
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { delay: 0.2, duration: 1, ease: "linear" },
            },
          }}
          viewport={{ once: true, amount: 0 }}
          initial="hidden"
          whileInView="visible"
          className="uppercase py-3 pt-5 font-roboto text-2xl sm:text-4xl text-center  text-black font-bold"
        >
          <span className="text-[#fa0808]">Categories </span>you might like
        </motion.h1>
        <ServiceCard filterItem={filterItem} />
        <div className="w-full flex items-center justify-center my-3">
          <Link to={`/products`}>
            <button className="border text-[17px] flex items-center justify-center gap-2 !border-[#fa0808] text-[#fa0808] uppercase font-semibold hover:text-white hover:bg-[#fa0808] px-5 py-2 rounded-full">
              <span className="uppercase">All Products</span>
              <span>
                <FaLongArrowAltRight className="hover:text-white" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default OurService;
