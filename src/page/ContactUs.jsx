import React from "react";
import Layout from "./Layout";
import { Link, useNavigate } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import Form from "@/components/home/Form";
import { motion, AnimatePresence } from "framer-motion";

const GoogleMapEmbed = () => {
  return (
    <div className="mapouter flex justify-center">
      <div className="gmap_canvas w-5/6 h-96 md:h-[570px] relative overflow-hidden bg-white">
        <iframe
          title="Google Map"
          src="https://maps.google.com/maps?q=purnea%20bihar&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
          frameBorder="0"
          scrolling="no"
          className="w-full h-full relative"
        ></iframe>
        <a
          href="https://fnfmods.net"
          className="text-white absolute top-0 left-0 z-0"
        >
          fnf mod
        </a>
      </div>
    </div>
  );
};

function ContactUs() {
  return (
    <Layout>
      <div>
        <div className="relative ">
          <img
            className="w-full h-[200px]"
            src="https://www.panditjeeonline.in/wp-content/themes/panditjeeonline/images/default-bnr.jpg"
            alt=""
          />
          <div className="absolute inset-0 bg-black opacity-60"></div>

          <div className="breadcrumbs flex flex-col items-center justify-center gap-3 absolute left-0 right-0 font-serif top-10 text-white text-center font-bold tracking-widest">
            <h1 className="text-5xl">Contact Us</h1>
            <ul>
              <li>
                <Link
                  className="hover:text-red-600  hover:no-underline"
                  //   onClick={navigate("/")}
                >
                  Home
                </Link>
              </li>
              <li>
                <a>Contact Us</a>
              </li>
            </ul>
          </div>
        </div>

        {/* card */}
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
          className="w-5/6 mx-auto grid sm:grid-cols-3 gap-2 my-5"
        >
          <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow pt-4">
            <div class="flex flex-col items-center justify-center pb-5 px-4 gap-1">
              <div className="bg-[#fa0808] py-3 px-3 rounded-full">
                <FaLocationDot className=" text-3xl text-white" />
              </div>
              <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                Panditjee Online
              </h5>
              <p class="text-[16px] text-black text-center ">
                1113, Iconic Shyamal, Shyamal Cross Road, Satellite, Ahmedabad -
                380015, (Gujarat) - India
              </p>
            </div>
          </div>
          <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow pt-4">
            <div class="flex flex-col items-center pb-5 gap-1">
              <div className="bg-[#fa0808] py-3 px-3 rounded-full">
                <MdEmail className=" text-3xl text-white" />
              </div>
              <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                Email Address
              </h5>
              <span class="text-[16px] font-semibold text-[#fa0808] dark:text-gray-400">
                shivansh0975@gmail.com
              </span>
            </div>
          </div>
          <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow pt-4">
            <div class="flex flex-col items-center pb-5 gap-1">
              <div className="bg-[#fa0808] py-3 px-3 rounded-full">
                <FaPhoneAlt className=" text-3xl text-white" />
              </div>
              <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                Phone Number
              </h5>
              <span class="text-[16px] font-semibold text-[#fa0808] dark:text-gray-400">
                9306585702
              </span>
            </div>
          </div>
        </motion.div>

        {/* form */}

        <div>
          <Form />
        </div>

        <div className="w-5/6 mx-auto">
          <GoogleMapEmbed />
        </div>
      </div>
    </Layout>
  );
}

export default ContactUs;
