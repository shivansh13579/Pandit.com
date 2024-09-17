import React from "react";
import Layout from "./Layout";
import { motion, AnimatePresence } from "framer-motion";

function About() {
  return (
    <Layout>
      <div className="w-full h-fit mx-auto">
        <div>
          <img
            className="w-full"
            src="https://astroarunpandit.org/wp-content/uploads/2024/01/WhatsApp-Image-2024-01-15-at-12.47.05-PM.jpeg"
            alt=""
          />
        </div>
        {/* About Us */}
        <AnimatePresence>
          <motion.div
            variants={{
              hidden: { opacity: 0, y: -150 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { delay: 0.2, duration: 1, ease: "linear" },
              },
            }}
            viewport={{ once: true, amount: 0.2 }}
            initial="hidden"
            whileInView="visible"
            className="w-5/6 mx-auto flex flex-col items-center justify-center gap-3 my-3 sm:w-4/6 sm:mx-auto sm:flex sm:flex-col sm:items-center sm:justify-center sm:gap-4 sm:h-[640px] md:[480px]"
          >
            <h1 className="border-b !border-[#fa0708] pb-3 border-b-2 px-5 text-4xl text-red-900 font-semibold">
              About Us
            </h1>
            <p className="font-semibold text-xl text-center italic font-opensans py-4">
              The good, the bad, the worse; all of them are meant to pass one
              day. No situation stays forever. It isn’t in your hands to control
              every situation of every cell on the planet, all you could and
              should do is work according to your ultimate purpose. If it’s
              good, then it can be made better. If it’s bad, then it can be made
              easier. All through the power of the science of astrology. Believe
              in yourselves and your stars.
            </p>
            <p className=" text-[18px] font-sans py-4 text-center">
              The modern apocalypse is that astrology has been led to be
              believed as a mere sham. The ignorance of the science behind
              astrology has led to this condition. Astroarunpandit’s main motto
              is to establish back faith in astrology predictions. In the
              puranic times, as well as the modern era; astrology plays an
              important role in everyone’s life. This science is one of the most
              ancient ones among humanity. The legacy of astrology is such that,
              even today the auspicious tasks of one’s life are done according
              to planetary movements known as mahurat.
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Life Struggle */}
        <AnimatePresence>
          <motion.div
            variants={{
              hidden: { opacity: 0, y: -150 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { delay: 0.2, duration: 1, ease: "linear" },
              },
            }}
            viewport={{ once: true, amount: 0.2 }}
            initial="hidden"
            whileInView="visible"
            className="w-5/6 flex flex-col items-center py-3 mb-4 gap-3 mx-auto sm:w-4/6 sm:flex-row sm:gap-5 sm:my-5 sm:py-5 sm:h-[830px] md:h-[700px]"
          >
            <div className="flex-1 sm:mr-2 sm:py-4">
              <img
                className="h-full w-full "
                src="https://astroarunpandit.org/wp-content/uploads/2022/03/Untitled-design-11-2.png.webp"
                alt=""
              />
            </div>
            <div className="flex-1 sm:ml-4 sm:pl-5">
              <h1 className="w-full text-xl py-3 text-red-900 font-serif sm:text-4xl font-semibold sm:pb-4">
                Have Life Struggles? We At Astroarunpandit Is The Answer
              </h1>
              <ul className="flex flex-col gap-3 pl-6">
                <li className="list-disc leading-relaxed text-[17px]">
                  <span className="font-semibold text-xl">Love astrology</span>{" "}
                  – In pain to let go of someone? Not finding good marriage
                  prospects? Have difficulty in relationships? Astro arun pandit
                  has got all the solutions for your troubles in love and
                  relationships.
                </li>
                <li className="list-disc text-[17px]">
                  <span className="font-semibold text-xl">
                    Health astrology
                  </span>{" "}
                  – Struggling to get a grip on your health? Not able to
                  untangle yourself from the loop of hospitals, medicines, and
                  doctors? Astroarunpandit will help you find answers to achieve
                  your optimum health and body.
                </li>
                <li className="list-disc text-[17px]">
                  <span className="font-semibold text-xl">
                    Career astrology
                  </span>{" "}
                  – Not able to get that government job? Struggling to get into
                  the ranks of executives and officers? We have the perfect
                  solutions for your career difficulties.
                </li>
              </ul>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Our Moto */}
        <AnimatePresence>
          <motion.div
            variants={{
              hidden: { opacity: 0, y: -150 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { delay: 0.2, duration: 1, ease: "linear" },
              },
            }}
            viewport={{ once: true, amount: 0.2 }}
            initial="hidden"
            whileInView="visible"
            className="w-5/6 flex flex-col items-center py-3 mb-4 gap-3 mx-auto sm:w-4/6 sm:flex-row sm:gap-5 sm:my-5 sm:py-5 sm:h-[830px] md:h-[600px]"
          >
            <div className="flex-1 sm:ml-4 sm:pl-5">
              <h1 className="w-full text-xl py-3 text-red-900 font-serif sm:text-4xl font-semibold sm:pb-4">
                Our Moto
              </h1>
              <p className="">
                Astro Arun Pandit believes that humanity is far away from its
                astrological potential. Astrology is a practice that is
                supported by science that runs through thousands of years of
                India. The saying is “to read is to grow, and to grow you need
                to know.” The truth of the matter is that as humans, we haven’t
                even scratched the surface of this astonishing science. There is
                so much to know, learn and discover that we can’t possibly
                imagine at this point. As such an organization that believes in
                science; we have some of the most qualified and best astrologers
                in India and we research astrology at every moment. The reality
                is that astrology has been reduced to a nutshell of knowing the
                future. Whereas, it is much more than that. Astrology is so vast
                that it can even identify the good and the evil.
              </p>
            </div>
            <div className="flex-1 sm:mr-2 sm:py-4">
              <img
                className="h-full w-full "
                src="https://astroarunpandit.org/wp-content/uploads/2022/03/Ellipse-69.png.webp"
                alt=""
              />
            </div>
          </motion.div>
        </AnimatePresence>

        {/* We Beleive */}
        <AnimatePresence>
          <motion.div
            variants={{
              hidden: { opacity: 0, y: -150 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { delay: 0.2, duration: 1, ease: "linear" },
              },
            }}
            viewport={{ once: true, amount: 0.2 }}
            initial="hidden"
            whileInView="visible"
            className="w-5/6 flex flex-col items-center py-3 mb-4 gap-3 mx-auto sm:w-4/6 sm:flex-row sm:gap-5 sm:my-5 sm:py-5 sm:h-[830px] md:h-[520px]"
          >
            <div className="flex-1 sm:mr-2 sm:py-4 order-2">
              <img
                className="h-full w-full md:h-fit"
                src="https://astroarunpandit.org/wp-content/uploads/2022/03/Untitled-design-11-1-1-1.png.webp"
                alt=""
              />
            </div>
            <div className="flex-1 sm:ml-4 sm:pl-5 order-1">
              <h1 className="w-full text-xl py-3 text-red-900 font-serif sm:text-4xl font-semibold sm:pb-4">
                Who Do We Believe In?
              </h1>
              <p className="">
                The greatest of individuals like Chanakya, Aryabhatta,
                Brahmagupta, and many more have been graced with the blessing of
                astrology knowledge. Astroarunpandit believes that when these
                legendary sages believed in the power of astrology then why
                can’t it be used to empower present generations. We believe that
                with proper guidance, expertise, and consultation of our
                experts, you can become the most successful version of yourself.
                When you do everything according to astrological sciences then
                no one can drive you away from your path to success because your
                success is meant to be.
              </p>
            </div>
          </motion.div>
        </AnimatePresence>

        <AnimatePresence>
          <motion.div
            variants={{
              hidden: { opacity: 0, y: -150 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { delay: 0.2, duration: 1, ease: "linear" },
              },
            }}
            viewport={{ once: true, amount: 0.2 }}
            initial="hidden"
            whileInView="visible"
            className="w-5/6 flex flex-col items-center py-3 mb-4 gap-3 mx-auto sm:w-4/6 sm:flex-row sm:gap-5 sm:my-5 sm:py-5 sm:h-[830px] md:h-[600px]"
          >
            <div className="flex-1 sm:ml-4 sm:pl-5">
              <h1 className="w-full text-xl py-3 text-red-900 font-serif sm:text-4xl font-semibold sm:pb-4">
                Why Astro Arun Pandit ?
              </h1>
              <p className="">
                Our experts are qualified and trained in such a manner, that
                they will guide you to solve any query you have. Be it money,
                relationships, work, health, or anything else. The core of Astro
                Arun Pandit lies in building long-term relations with our
                clients. Our consultation is personalized for every individual.
                For making astrology predictions, we track and know about all
                your actions, thinking, mentality and capability. This enables
                us to consult you to your optimum self. We have experts assigned
                to track your horoscope in such a manner that you are made aware
                of every minor and major movement and consult you as per them.
              </p>
            </div>
            <div className="flex-1 sm:mr-2 sm:py-4">
              <img
                className="h-full w-full "
                src="https://astroarunpandit.org/wp-content/uploads/2022/03/Ellipse-70.png.webp"
                alt=""
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </Layout>
  );
}

export default About;
