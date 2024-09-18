import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "react-toastify";

function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://getform.io/f/bejydova", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Form Submitted Successfully");
        setFormData({
          name: "",
          email: "",
          phone: "",
          address: "",
          message: "",
        });
      } else {
        toast.error("Erorr Submitting the Form.Please try again");
      }
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        style={{
          backgroundImage:
            "url('https://www.panditjeeonline.in/wp-content/uploads/2022/12/h-book-now-bg.jpg.webp')",
        }}
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
        className="w-full sm:w-5/6 sm:mx-auto mb-5 rounded-xl uppercase"
      >
        <div className="flex flex-col gap-1 sm:gap-2  items-center justify-center py-2 my-2   sm:py-8 sm:my-4 w-full sm:px-7">
          <h1 className="text-white text-2xl sm:text-4xl  text-center font-semibold sm:font-semibold font-serif leading-tight py-4">
            <span className="text-[#fa0808]">Book Now</span> - Panditjee Online
          </h1>

          <form class="w-full sm:px-6 px-2" onSubmit={handleSubmit}>
            <div class="grid sm:grid-cols-2 sm:gap-6">
              <div class="relative z-0 w-full mb-3 sm:mb-5 group">
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full py-2 px-3 sm:py-3 sm:px-3 outline-none rounded-lg"
                  placeholder=" Your Name"
                  required
                />
              </div>
              <div class="relative z-0 w-full mb-3 sm:mb-5 group">
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full py-2 px-3 sm:py-3 sm:px-3 outline-none rounded-lg"
                  placeholder="Your Email "
                  required
                />
              </div>
            </div>
            <div class="grid sm:grid-cols-2 sm:gap-6">
              <div class="relative z-0 w-full mb-3 sm:mb-5 group">
                <input
                  type="number"
                  name="phone"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full py-2 px-3 sm:py-3 sm:px-3 outline-none rounded-lg"
                  placeholder="Phone Number"
                  required
                />
              </div>
              <div class="relative z-0 w-full mb-3 sm:mb-5 group">
                <input
                  type="text"
                  name="address"
                  id="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full py-2 px-3 sm:py-3 sm:px-3 outline-none rounded-lg"
                  placeholder="Address"
                  required
                />
              </div>
            </div>
            <div class="relative z-0 w-full mb-4 sm:mb-5 group">
              <textarea
                type="texta"
                rows="3"
                name="message"
                id="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full py-2 px-2 sm:py-3 sm:px-3 outline-none rounded-xl"
                placeholder="Your Message"
                required
              />
            </div>
            <div className="text-center py-1 sm:py-3">
              <button
                type="submit"
                class="text-white uppercase bg-[#fa0808] hover:bg-white hover:!text-[#fa0808] focus:ring-4 focus:outline-none  font-medium rounded-full text-lg w-full sm:w-auto px-5 py-2.5 text-center"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default Form;
