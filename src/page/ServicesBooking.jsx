import React from "react";
import Layout from "./Layout";
import { Link } from "react-router-dom";
import Form from "@/components/home/Form";

// const FormLayout = () => {
//   return (
//     <form class="max-w-sm mx-auto">
//       <div class="mb-5">
//         <label
//           for="email"
//           class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//         >
//           Your email
//         </label>
//         <input
//           type="email"
//           id="email"
//           class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
//           placeholder="name@flowbite.com"
//           required
//         />
//       </div>
//       <div class="mb-5">
//         <label
//           for="password"
//           class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//         >
//           Your password
//         </label>
//         <input
//           type="password"
//           id="password"
//           class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
//           required
//         />
//       </div>
//       <div className="mb-5">
//         <select
//           id="countries"
//           class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//         >
//           <option>United States</option>
//           <option>Canada</option>
//           <option>France</option>
//           <option>Germany</option>
//         </select>
//       </div>
//       <div className="mb-5">
//         <textarea
//           id="message"
//           rows="4"
//           class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//           placeholder="Leave a comment..."
//         ></textarea>
//       </div>
//       <button
//         type="submit"
//         class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//       >
//         Register new account
//       </button>
//     </form>
//   );
// };

function ServicesBooking() {
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
          <h1 className="text-5xl">Book Pandit Ji</h1>
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
              <a>Book Pandit Ji</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-pink-50 py-8 flex flex-col">
        <div className="w-5/6 mx-auto my-4 flex items-center justify-center">
          <h1 className="text-xl sm:text-4xl md:text-5xl font-semibold underline pb-5">
            <span className="text-[#fa0808]">Book</span> Pandit Ji
          </h1>
        </div>
        <div className="w-5/6 mx-auto grid sm:grid-cols-2">
          <div className="grid-cols-1 flex items-center justify-center">
            <img
              className="h-[450px] w-full"
              src="https://www.99panditji.com/assets/img/about.png"
              alt=""
            />
          </div>
          <div className="grid-cols-1  text-center">
            <Form className="h-[500px] w-full" />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default ServicesBooking;
