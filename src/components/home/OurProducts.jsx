import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";
import UseMediaQuary from "@/hooks/UseMediaQuary";
import { motion, AnimatePresence } from "framer-motion";

function OurProducts() {
  const isAboveScreen = UseMediaQuary("(min-width:1060px)");
  const { item } = useSelector((state) => state.allCarts);

  const filterItem = item.filter((item) => {
    if (item.id <= 3) {
      return item;
    }
  });

  return isAboveScreen ? (
    <div className="w-5/6 mx-auto flex flex-col gap-4 py-5">
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
          className="flex items-center justify-center pt-4"
        >
          <h1 className="text-5xl font-roboto font-semibold pb-4 leading-7 uppercase">
            <span className="text-[#fa0808]">Our</span> Products
          </h1>
        </motion.div>
      </AnimatePresence>

      <AnimatePresence>
        <motion.div
          variants={{
            hidden: { opacity: 0, y: -100 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { delay: 0.2, duration: 1, ease: "linear" },
            },
          }}
          viewport={{ once: true, amount: 0 }}
          initial="hidden"
          whileInView="visible"
          className="flex w-full items-center justify-between gap-4 mb-3"
        >
          {filterItem.map((product) => (
            <div
              key={product.id}
              className="relative flex flex-col justify-between gap-5 items-center w-1/3 border bg-white py-3 px-3 rounded-xl"
            >
              <div className="overflow-hidden">
                <Link to={`/product/${product.slug}`}>
                  <motion.div
                    whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                    whileTap={{ scale: 0.9 }}
                    className="w-full "
                  >
                    <img
                      className="w-full h-[250px] rounded-xl"
                      src={product.images.src1}
                      alt={product.heading}
                    />
                  </motion.div>
                </Link>
                <div className="text-wrap w-full py-2">
                  <h1 className="text-[19px] font-semibold font-roboto py-2">
                    {product.heading}
                  </h1>
                  <p className="text-[16px] font-roboto py-2">
                    {product.description}
                  </p>
                </div>
                <div className="w-full flex items-end justify-between">
                  <Link to={`/product/${product.slug}`}>
                    <button className="border !border-[#fa0808] text-[#fa0808] uppercase font-semibold hover:text-white hover:bg-[#fa0808]   px-3 py-1 rounded-2xl">
                      Read More
                    </button>
                  </Link>
                  <Link to={"/"}>
                    <button className="bg-[#d49292] hover:bg-[#c37a7a] px-2 py-2 text-center rounded-full">
                      <img
                        className="w-[20px] h-[20px]"
                        src="../share.svg"
                        alt=""
                      />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </AnimatePresence>

      <Link className=" flex items-center justify-center" to={`/lucky-braclet`}>
        <AnimatePresence>
          <motion.button
            variants={{
              hidden: { opacity: 0, y: -50 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { delay: 0.1, duration: 0.4, ease: "linear" },
              },
            }}
            viewport={{ once: true, amount: 0 }}
            initial="hidden"
            whileInView="visible"
            className="flex items-center justify-center gap-1  border !border-[#fa0808] text-[#fa0808] uppercase font-bold hover:text-white hover:bg-[#fa0808]   px-4 py-2 rounded-full"
          >
            <span>View All Products</span>
            <span>
              <FaLongArrowAltRight className="hover:text-white" />
            </span>
          </motion.button>
        </AnimatePresence>
      </Link>
    </div>
  ) : (
    <div className="w-5/6 mx-auto flex flex-col  gap-4 py-5">
      <div className="flex items-center justify-center pt-4">
        <h1 className="text-3xl font-roboto font-semibold pb-4">
          <span className="text-[#fa0808]">Our</span> Products
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 justify-items-center items-center sm:gap-3 sm:w-full w-full gap-4 mb-3">
        {filterItem.map((product) => (
          <div
            key={product.id}
            className="relative w-full border bg-white py-3 px-3 rounded-xl"
          >
            <div>
              <Link className="" to={`/product/${product.slug}`}>
                <div className="w-full ">
                  <img
                    className="w-full h-[250px] rounded-xl"
                    src={product.images.src1}
                    alt={product.heading}
                  />
                </div>
              </Link>
              <div className="text-wrap w-full py-2">
                <h1 className="text-[19px] font-semibold font-roboto py-2">
                  {product.heading}
                </h1>
                <p className="text-[16px] font-roboto py-2">
                  {product.description}
                </p>
              </div>
              <div className="w-full flex items-end justify-between">
                <Link to={`/product/${product.slug}`}>
                  <button className="border !border-[#fa0808] text-[#fa0808] uppercase font-semibold hover:text-white hover:bg-[#fa0808]   px-3 py-1 rounded-2xl">
                    Read More
                  </button>
                </Link>
                <Link to={"/"}>
                  <button className="bg-[#d49292] hover:bg-[#c37a7a] px-2 py-2 text-center rounded-full">
                    <img
                      className="w-[20px] h-[20px]"
                      src="../share.svg"
                      alt=""
                    />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Link className=" flex items-center justify-center" to={`/lucky-braclet`}>
        <button className="flex items-center justify-center gap-1  border !border-[#fa0808] text-[#fa0808] uppercase font-bold hover:text-white hover:bg-[#fa0808]   px-4 py-2 rounded-full">
          <span>View All Products</span>
          <span>
            <FaLongArrowAltRight className="hover:text-white" />
          </span>
        </button>
      </Link>
    </div>
  );
}

export default OurProducts;
