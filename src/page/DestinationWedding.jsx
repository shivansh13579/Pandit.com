import React from "react";
import Layout from "./Layout";
import { Link } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

function DestinationWedding() {
  return (
    <Layout>
      <div>
        <div className="relative mb-4">
          <img
            className="w-full h-[200px]"
            src="https://www.panditjeeonline.in/wp-content/themes/panditjeeonline/images/default-bnr.jpg"
            alt=""
          />
          <div className="absolute inset-0 bg-black opacity-60"></div>

          <div className="breadcrumbs flex flex-col items-center justify-center gap-3 absolute left-0 right-0 font-serif top-10 text-white text-center font-bold tracking-widest">
            <h1 className=" text-xl sm:text-5xl">Destination Wedding</h1>
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
                <a>Destination Wedding</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="w-5/6 mx-auto grid sm:grid-cols-2 gap-3 py-6 my-6">
          <AnimatePresence>
            <motion.div
              variants={{
                hidden: { opacity: 0, x: -200 },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: { delay: 0.4, duration: 1, ease: "linear" },
                },
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0 }}
            >
              <p className="font-semibold text-[17px]">
                An opportunity for a couple to hold a wedding in a romantic
                location without spending a fortune, a destination wedding
                removes many of the stresses of planning a regular wedding.
                Every wedding detail can be arranged at a resort destination to
                suit your taste from afar. After the wedding ceremony, the
                celebration can last for hours or even days, with meals and
                outings arranged for you and your guests. <br /> <br /> A
                destination wedding can be as cool and casual as you like. Want
                to wear flip-flops or barefoot and dig your toes into the sand
                at a beach wedding? You got it! No heavy brocade wedding gowns
                or stultifying tuxedoes are required, either. Make the ceremony
                as short as you like, then strip down to your bathing suits and
                swim away. Or head to a patio, and start the music and champagne
                toasts for a party that can last until the stars come out.{" "}
                <br /> <br /> Book Online Pandit Ji For Destination Wedding.
                Call Or Whatsapp on: <br /> <br />{" "}
                <a
                  href="tel:+91 96620 01600"
                  class="text-[#fa0808]  font-semibold"
                >
                  +91 96620 01600,
                </a>
                <a
                  href="tel:+91 70160 73654"
                  class="text-[#fa0808] font-semibold"
                >
                  +91 70160 73654
                </a>
              </p>
              <Link
                className=" flex items-center justify-start py-4"
                to={`/Servicesid`}
              >
                <button className="flex items-center justify-start gap-1  border !border-[#fa0808] text-[#fa0808] uppercase font-bold hover:text-white hover:bg-[#fa0808]   px-4 py-2 rounded-full">
                  <span>Book Pandit Online</span>
                  <span>
                    <FaLongArrowAltRight className="hover:text-white" />
                  </span>
                </button>
              </Link>
            </motion.div>
          </AnimatePresence>
          <AnimatePresence>
            <motion.div
              variants={{
                hidden: { opacity: 0, x: 200 },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: { delay: 0.4, duration: 1, ease: "linear" },
                },
              }}
              viewport={{ once: true, amount: 0 }}
              initial="hidden"
              whileInView="visible"
            >
              <img
                className="rounded-lg"
                src="https://www.panditjeeonline.in/wp-content/uploads/2022/12/destination-wedding.jpeg"
                alt=""
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </Layout>
  );
}

export default DestinationWedding;
