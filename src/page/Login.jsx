import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import authService from "@/appwrite/auth";
import { useDispatch } from "react-redux";
import { loginSchema } from "@/validatinSchema/LoginSchema";
import { login } from "@/features/authSlice";

function Login() {
  const navigat = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [initialValues, setInitialValues] = useState({
    email: "",
    password: "",
  });

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: loginSchema,
      onSubmit: async (values, helper) => {
        setLoading(true);
        try {
          const userData = await authService.login(values);
          console.log("user", userData);

          if (userData) {
            const userData = await authService.getCurrentUser();
            if (userData) dispatch(login(userData));
            navigat("/");
          }
          setLoading(false);
        } catch (error) {
          console.log(error.message);
          setLoading(false);
        }
      },
    });

  return (
    <div>
      <section class="bg-gray-50 dark:bg-gray-900 pt-6">
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a
            href="#"
            class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
          >
            <img
              class="w-8 h-8 mr-2"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
              alt="logo"
            />
            Pandit.Com
          </a>
          <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Sign in to your account
              </h1>
              <form
                onSubmit={handleSubmit}
                class="space-y-4 md:space-y-6"
                action="#"
              >
                <div>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Enter Your Email"
                    required=""
                  />
                  {errors.email && touched.email ? (
                    <p className="text-red-500">{errors.email}</p>
                  ) : null}
                </div>
                <div>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Enter Your password"
                    class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  />
                  {errors.email && touched.email ? (
                    <p className="text-red-500">{errors.email}</p>
                  ) : null}
                </div>
                <div class="flex items-center justify-between"></div>
                <button
                  type="submit"
                  class="w-full bg-blue-600 text-white hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-mono text-xl rounded-full px-5 py-2.5 text-center"
                >
                  Sign in
                </button>
                <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                  Don’t have an account yet?{" "}
                  <a
                    href="/signup"
                    class="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Sign up
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;
