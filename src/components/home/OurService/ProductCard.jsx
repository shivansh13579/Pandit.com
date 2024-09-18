import ProductCartCard from "@/components/scroller/ProductCartCard";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

function ProductCard() {
  return (
    <div className="w-5/6 mx-auto h-fit">
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
          className="my-4 sm:my-2 flex items-center justify-center"
        >
          <h1 className="text-2xl text-center sm:text-4xl font-bold font-roboto uppercase sm:py-4 sm:mt-3 pt-6 mt-3">
            <span className="text-[#fa0808]">You May Also</span> Like This
          </h1>
        </motion.div>
      </AnimatePresence>
      <AnimatePresence>
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 150 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { delay: 0.2, duration: 1, ease: "linear" },
            },
          }}
          viewport={{ once: true, amount: 0 }}
          initial="hidden"
          whileInView="visible"
        >
          <ProductCartCard />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default ProductCard;
