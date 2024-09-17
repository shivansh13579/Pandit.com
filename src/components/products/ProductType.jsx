import React, { useEffect, useState } from "react";
import UseMediaQuary from "@/hooks/UseMediaQuary";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function ProductType({ productLists }) {
  const isAboveScree = UseMediaQuary("(min-width:620px)");
  const searchQuery = useSelector((state) => state.searches.query);
  const [filterProducts, setFilteredProducts] = useState(productLists);

  useEffect(() => {
    const filterProduct = filterProducts.filter((product) => {
      return product.name.toLowerCase().includes(searchQuery.toLowerCase());
    });
    setFilteredProducts(filterProduct);
  }, [searchQuery]);

  return (
    <>
      {isAboveScree ? (
        <>
          <AnimatePresence>
            <motion.div
              variants={{
                hidden: { opacity: 0, y: -70 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.4, duration: 1.5, ease: "linear" },
                },
              }}
              viewport={{ once: true, amount: 0 }}
              initial="hidden"
              whileInView="visible"
              className="w-5/6 mx-auto flex items-center justify-center flex-wrap gap-6 my-6 py-4"
            >
              {filterProducts.map((product) => {
                return (
                  <Link to={`/collection/${product.slug}`}>
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
                        <img
                          className="w-[220px] h-[220px] rounded-xl "
                          src={product.src}
                          alt={product.alt}
                        />
                      </motion.div>

                      <h1 className="text-xl">{product.name}</h1>
                      <p className="flex items-center gap-2 font-bold border-b border-black hover:border-pink-400 pb-1">
                        Shop Collection
                        <span>
                          <img src="../arrow.svg" alt="" />
                        </span>
                      </p>
                    </div>
                  </Link>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </>
      ) : (
        <>
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
              className="w-5/6 mx-auto my-2 md:my-6 py-4 overflow-auto"
            >
              {productLists.map((product) => {
                return (
                  <div className="">
                    <Link to={`/collection/${product.slug}`}>
                      <div
                        key={product.id}
                        className="w-full flex flex-col items-center gap-2 py-3"
                      >
                        <img
                          className="w-[240px] h-[220px] rounded-lg"
                          src={product.src}
                          alt={product.alt}
                        />
                        <h1 className="text-xl">{product.name}</h1>
                        <p className="flex items-center gap-2 font-bold border-b border-black hover:border-pink-400 pb-1">
                          Shop Collection
                          <span>
                            <img src="../arrow.svg" alt="" />
                          </span>
                        </p>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </>
      )}
    </>
  );
}

export default ProductType;
