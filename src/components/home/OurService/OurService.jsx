import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { productList } from "@/data/products";
import { useSelector } from "react-redux";

const ServiceCard = ({ filterItem }) => {
  return (
    <AnimatePresence>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: -100 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { delay: 0.4, duration: 1, ease: "linear" },
          },
        }}
        viewport={{ once: true, amount: 0 }}
        initial="hidden"
        whileInView="visible"
        className="w-full mx-auto flex items-center justify-center flex-wrap gap-6 my-6 py-4"
      >
        {filterItem.map((product) => {
          return (
            <div
              key={product.id}
              className="flex flex-col gap-4 items-center overflow-hidden rounded-lg"
            >
              <motion.div
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.4 },
                }}
                whileTap={{ scale: 0.9 }}
              >
                <Link to={`/collection/${product.slug}`}>
                  <img
                    className="w-[220px] h-[220px] rounded-xl "
                    src={product.src}
                    alt={product.alt}
                  />
                </Link>
              </motion.div>
              <h1 className="text-xl">{product.name}</h1>
              <Link to={`/collection/${product.slug}`}>
                <p className="flex items-center gap-2 font-bold border-b border-black hover:border-pink-400 pb-1">
                  Shop Collection
                  <span>
                    <img src="../arrow.svg" alt="" />
                  </span>
                </p>
              </Link>
            </div>
          );
        })}
      </motion.div>
    </AnimatePresence>
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
          className="uppercase pt-5 font-roboto text-2xl sm:text-4xl text-center  text-black font-bold"
        >
          <span className="text-[#fa0808]">Categories </span>you might like
        </motion.h1>
        <ServiceCard filterItem={filterItem} />
        <div className="w-full flex items-center justify-center my-5">
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
