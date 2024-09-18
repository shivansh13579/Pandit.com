import UseMediaQuary from "@/hooks/UseMediaQuary";
import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSpring, animated } from "react-spring";
import { motion, AnimatePresence } from "framer-motion";

function Number({ n }) {
  const { number } = useSpring({
    from: { number: 0 },
    number: n,
    delay: 5000,
    config: { mass: 1, tension: 20, friction: 10 },
  });
  return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>;
}

function OurAchivements() {
  const isAboveScreen = UseMediaQuary("(min-width:1060px)");
  return isAboveScreen ? (
    <div className="w-5/6 mx-auto flex flex-col gap-4 py-4 border">
      <div className="flex w-full py-6">
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
            // exit="exit"
            className="flex-1 pr-3"
          >
            <h1 className="text-[32px] font-roboto font-semibold pb-4 tracking-tighter uppercase">
              <span className="text-[#fa0808]">Pandit Booking</span> - Book
              Panditji For Puja
            </h1>
            <p className="text-[18px] font-roboto leading-relaxed">
              Panditji Online is the most trusted platform for availing Vedic
              and Hindu Puja Services like performing Vedic Rituals, Religious
              Ceremonies, Vastu Yagya and many more. We provide the best
              experienced and well-known purohits and pandits at your place to
              do puja. We are leading Pandit Booking website. Now, you can
              perform your pooja with our Professional Purohits & Pandits.{" "}
              <br /> <br /> Our pandits perform rituals like Havan, Yagya,
              Shanti Vidhi, Shubh Vivah – Wedding Ceremony, Satyanarayan Katha,
              Griha Pravesh, Namkaran Sanskar, Nava Graha Shanti, Engagement,
              Festival Puja, Janeu, Ganesh Puja, Ram Katha, Mundan Sanskar,
              Shrimant Puja, Namkaran, Bhagwat Katha, Vastu Shanti, etc. <br />{" "}
              <br /> We provide highly qualified and experienced Panditji for
              all communities like Gujarati, Rajasthani, Marathi, Sindhi,
              Bihari, Bengali, and Panjabi. <br /> <br /> Book Pandit Online For
              Any Puja at Your Place In Just One Call –
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
            <Link className=" flex items-center justify-start py-4" to={`/`}>
              <button className="flex items-center justify-start gap-1  border !border-[#fa0808] text-[#fa0808] uppercase font-bold hover:text-white hover:bg-[#fa0808]   px-4 py-2 rounded-full">
                <span>Learn More</span>
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
                transition: { delay: 0.2, duration: 1, ease: "linear" },
              },
            }}
            viewport={{ once: true, amount: 0 }}
            initial="hidden"
            whileInView="visible"
            className="flex-1"
          >
            <img
              src="https://www.panditjeeonline.in/wp-content/uploads/2022/12/h-about-us.png.webp"
              alt=""
            />
          </motion.div>
        </AnimatePresence>
      </div>
      <AnimatePresence>
        <motion.div
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { delay: 0.2, duration: 0.5, ease: "linear" },
            },
          }}
          viewport={{ once: true, amount: 0 }}
          initial="hidden"
          whileInView="visible"
          className="flex items-center justify-center py-1"
        >
          <h1 className="text-5xl font-roboto font-semibold pb-4 leading-7 uppercase">
            <span className="text-[#fa0808]">Our</span> Achivements
          </h1>
        </motion.div>
      </AnimatePresence>
      <AnimatePresence>
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 100 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { delay: 0.1, duration: 1, ease: "linear" },
            },
          }}
          viewport={{ once: true, amount: 0 }}
          initial="hidden"
          whileInView="visible"
          className="grid grid-cols-1 md:grid-cols-4 gap-4 w-full h-full md:w-full md:h-full"
        >
          <div className="relative w-full h-full">
            <img className="w-full h-full" src="../win.svg" alt="" />
            <div className="absolute top-0 right-0 left-0 w-full h-full flex flex-col items-center justify-center gap-2">
              <img className="w-[70px] h-[80px]" src="../temple.svg" alt="" />

              <p className="w-full text-4xl flex justify-center font-bold">
                <Number n={1700} />
                <span>+</span>
              </p>

              <p className="text-xl">Puja Performed</p>
            </div>
          </div>
          <div className="relative w-full h-full">
            <img className="w-full h-full" src="../win.svg" alt="" />
            <div className="absolute top-0 right-0 left-0 w-full h-full flex flex-col items-center justify-center gap-2">
              <img className="w-[70px] h-[80px]" src="../child.svg" alt="" />

              <p className="w-full text-4xl flex justify-center font-bold">
                <Number n={2000} />
                <span>+</span>
              </p>

              <p className="text-xl">Pandit ji Listed</p>
            </div>
          </div>
          <div className="relative w-full h-full">
            <img className="w-full h-full" src="../win.svg" alt="" />
            <div className="absolute top-0 right-0 left-0 w-full h-full flex flex-col items-center justify-center gap-2">
              <img className="w-[70px] h-[80px]" src="../set.svg" alt="" />

              <p className="w-full text-4xl flex justify-center font-bold">
                <Number n={100} />
                <span>+</span>
              </p>

              <p className="text-xl">Type of Puja</p>
            </div>
          </div>
          <div className="relative w-full h-full">
            <img className="w-full h-full" src="../win.svg" alt="" />
            <div className="absolute top-0 right-0 left-0 w-full h-full flex flex-col items-center justify-center gap-2">
              <img className="w-[70px] h-[80px]" src="../center.svg" alt="" />

              <p className="w-full text-4xl flex justify-center font-bold">
                <Number n={95} />
                <span>+</span>
              </p>

              <p className="text-xl">Puja Performed</p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  ) : (
    <div className="w-5/6 mx-auto flex flex-col gap-4 py-4">
      <div className="flex flex-col w-full py-6">
        <div className="flex-1 pr-3">
          <h1 className="text-[22px] font-roboto font-semibold pb-3 tracking-tighter uppercase">
            <span className="text-[#fa0808]">Pandit Booking</span> - Book
            Panditji For Puja
          </h1>
          <p className="text-[16px] font-roboto leading-relaxed">
            Panditji Online is the most trusted platform for availing Vedic and
            Hindu Puja Services like performing Vedic Rituals, Religious
            Ceremonies, Vastu Yagya and many more. We provide the best
            experienced and well-known purohits and pandits at your place to do
            puja. We are leading Pandit Booking website. Now, you can perform
            your pooja with our Professional Purohits & Pandits. <br /> <br />{" "}
            Our pandits perform rituals like Havan, Yagya, Shanti Vidhi, Shubh
            Vivah – Wedding Ceremony, Satyanarayan Katha, Griha Pravesh,
            Namkaran Sanskar, Nava Graha Shanti, Engagement, Festival Puja,
            Janeu, Ganesh Puja, Ram Katha, Mundan Sanskar, Shrimant Puja,
            Namkaran, Bhagwat Katha, Vastu Shanti, etc. <br /> <br /> We provide
            highly qualified and experienced Panditji for all communities like
            Gujarati, Rajasthani, Marathi, Sindhi, Bihari, Bengali, and Panjabi.{" "}
            <br /> <br /> Book Pandit Online For Any Puja at Your Place In Just
            One Call –
            <a href="tel:+91 96620 01600" class="text-[#fa0808]  font-semibold">
              +91 96620 01600,
            </a>
            <a href="tel:+91 70160 73654" class="text-[#fa0808] font-semibold">
              +91 70160 73654
            </a>
          </p>
          <Link className=" flex items-center justify-start py-5" to={`/`}>
            <button className="flex items-center justify-start gap-1  border !border-[#fa0808] text-[#fa0808] uppercase font-bold hover:text-white hover:bg-[#fa0808]   px-4 py-2 rounded-full">
              <span>Learn More</span>
              <span>
                <FaLongArrowAltRight className="hover:text-white" />
              </span>
            </button>
          </Link>
        </div>
        <div
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
          className="flex-1"
        >
          <img
            src="https://www.panditjeeonline.in/wp-content/uploads/2022/12/h-about-us.png.webp"
            alt=""
          />
        </div>
      </div>
      <div
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
        className="flex items-center justify-center py-1"
      >
        <h1 className="text-3xl font-roboto font-semibold pb-4 leading-7">
          <span className="text-[#fa0808]">Our</span> Achivements
        </h1>
      </div>
      <div
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
        className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full h-full sm:w-full sm:h-full"
      >
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
            className="relative w-full h-full"
          >
            <img className="w-full h-full" src="../win.svg" alt="" />
            <div className="absolute top-0 right-0 left-0 w-full h-full flex flex-col items-center justify-center gap-2">
              <img className="w-[70px] h-[80px]" src="../temple.svg" alt="" />

              <p className="w-full text-4xl flex justify-center font-bold">
                <Number n={1700} />
                <span>+</span>
              </p>

              <p className="text-xl">Puja Performed</p>
            </div>
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
            className="relative w-full h-full"
          >
            <img className="w-full h-full" src="../win.svg" alt="" />
            <div className="absolute top-0 right-0 left-0 w-full h-full flex flex-col items-center justify-center gap-2">
              <img className="w-[70px] h-[80px]" src="../child.svg" alt="" />

              <p className="w-full text-4xl flex justify-center font-bold">
                <Number n={2000} />
                <span>+</span>
              </p>

              <p className="text-xl">Pandit ji Listed</p>
            </div>
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
            className="relative w-full h-full"
          >
            <img className="w-full h-full" src="../win.svg" alt="" />
            <div className="absolute top-0 right-0 left-0 w-full h-full flex flex-col items-center justify-center gap-2">
              <img className="w-[70px] h-[80px]" src="../set.svg" alt="" />

              <p className="w-full text-4xl flex justify-center font-bold">
                <Number n={100} />
                <span>+</span>
              </p>

              <p className="text-xl">Type of Puja</p>
            </div>
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
            className="relative w-full h-full"
          >
            <img className="w-full h-full" src="../win.svg" alt="" />
            <div className="absolute top-0 right-0 left-0 w-full h-full flex flex-col items-center justify-center gap-2">
              <img className="w-[70px] h-[80px]" src="../center.svg" alt="" />

              <p className="w-full text-4xl flex justify-center font-bold">
                <Number n={95} />
                <span>+</span>
              </p>

              <p className="text-xl">Puja Performed</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default OurAchivements;
