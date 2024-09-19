import React, { useEffect, useState } from "react";
import Layout from "./Layout";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import OurProducts from "@/components/home/OurProducts";
import { ServiceData } from "@/data/products";
import Form from "@/components/home/Form";
import { useSelector } from "react-redux";

function Services() {
  // const searchQuery = useSelector((state) => state.searches.query);
  const [serviceData, setServiceData] = useState(ServiceData);

  // useEffect(() => {
  //   const filterProduct = serviceData.filter((data) => {
  //     return data.heading.toLowerCase().includes(searchQuery.toLowerCase());
  //   });
  //   setServiceData(filterProduct);
  // }, [searchQuery]);

  return (
    <Layout>
      <div className="relative">
        <img
          className="w-full h-[200px]"
          src="https://www.panditjeeonline.in/wp-content/themes/panditjeeonline/images/default-bnr.jpg"
          alt=""
        />
        <div className="absolute inset-0 bg-black opacity-60"></div>

        <div className="breadcrumbs flex flex-col items-center justify-center gap-3 absolute left-0 right-0 font-serif top-10 text-white text-center font-bold tracking-widest">
          <h1 className="text-5xl">Services</h1>
          <ul>
            <li>
              <Link to={"/"} className="hover:text-red-600  hover:no-underline">
                Home
              </Link>
            </li>
            <li>
              <a>Services</a>
            </li>
          </ul>
        </div>
      </div>

      {/* PujaService */}
      <div className="bg-pink-50">
        <AnimatePresence>
          <motion.div
            variants={{
              hidden: { opacity: 0, y: -30 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { delay: 0.2, duration: 1, ease: "linear" },
              },
            }}
            viewport={{ once: true, amount: 0 }}
            initial="hidden"
            whileInView="visible"
            className="w-5/6 mx-auto pt-6  flex items-center justify-center "
          >
            <h1 className="uppercase  text-black font-semibold underline text-center text-xl sm:text-4xl my-4">
              <span className="text-[#fa0808] ">Our Puja</span> Services
            </h1>
          </motion.div>
        </AnimatePresence>
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
            className=" w-5/6 mx-auto flex flex-wrap justify-center gap-4 pb-9 pt-4"
          >
            {serviceData.map((data) => {
              return (
                <div class="w-full sm:w-1/3 md:w-1/3 lg:w-1/4 h-full flex flex-col  items-center justify-center gap-3 overflow-hidden rounded-lg bg-white border border-gray-200 rounded-lg shadow   overflow-hidden">
                  <motion.div
                    whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Link to={"#"}>
                      <img class="rounded-t-lg" src={data.src} alt="" />
                    </Link>
                  </motion.div>

                  <div class="py-2 flex items-center justify-center">
                    <a href="#">
                      <h5 class="mb-2 text-2xl md:text-xl tracking-tight text-gray-900 dark:text-white">
                        {data.heading}
                      </h5>
                    </a>
                  </div>
                  <div class="py-2 mb-2 flex items-center justify-center ">
                    <Link
                      to={`/Servicesid`}
                      class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#fa0808] rounded-lg hover:bg-[#fa0808b5] focus:ring-4 focus:outline-none focus:ring-blue-300  "
                    >
                      Book Now
                    </Link>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ProductCard */}
      <div>
        <OurProducts />
      </div>

      <div>
        <Form />
      </div>
    </Layout>
  );
}

export default Services;
