import React, { useState } from "react";
import { useFormik } from "formik";
import { singUpSchema } from "@/validatinSchema/SignUpSchema";
import authService from "@/appwrite/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "@/features/authSlice";
import { toast } from "react-toastify";
import { setCartItem } from "@/features/cartSlice";
import { BeatLoader } from "react-spinners";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

export function SignUp() {
  const [color, setColor] = useState("#ffffff");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [initialValues, setInitialValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { values, errors, touched, handleBlur, handleSubmit, handleChange } =
    useFormik({
      initialValues,
      validationSchema: singUpSchema,
      onSubmit: async (values, helper) => {
        setLoading(true);
        try {
          const userData = await authService.createAccount(values);

          if (userData) {
            const userData = await authService.getCurrentUser();
            if (userData) dispatch(login(userData));

            localStorage.removeItem("cart"); // Clear cart from localStorage
            dispatch(setCartItem([]));
            toast.success("Registration SuccessFully");
            navigate("/");
            setLoading(false);
          }
        } catch (error) {
          toast.error(error.message);
          setLoading(false);
        }
      },
    });
  return (
    <div className="w-full flex items-center justify-center h-screen bg-gray-200">
      <div class="w-full flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full flex items-center justify-center py-4">
          <img
            class=""
            src="https://www.pandit.com/cdn/shop/files/panditcomlogo_8fdb6d70-7baa-4df1-ad59-d123869184e9.png?v=1714642504"
            alt="logo"
          />
        </div>
        <div class="w-full bg-transparent rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 class="text-xl font-bold leading-tight tracking-tight text-zinc-600 md:text-2xl text-center">
              Sign Up
            </h1>
            <form
              onSubmit={handleSubmit}
              class="space-y-4 md:space-y-6"
              action="#"
            >
              <div>
                <input
                  type="name"
                  name="name"
                  id="name"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="Enter Your Name"
                />
                {errors.name && touched.name ? (
                  <p className="text-red-500">{errors.name}</p>
                ) : null}
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                  placeholder="password"
                  class=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  required=""
                />
                {errors.password && touched.password ? (
                  <p className="text-red-500">{errors.password}</p>
                ) : null}
              </div>
              <button
                disabled={loading}
                value={color}
                onChange={(input) => setColor(input.target.value)}
                type="submit"
                class="w-full text-white bg-violet-600 hover:bg-violet-800 bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
              >
                {loading ? (
                  <>
                    <BeatLoader
                      color={color}
                      loading={loading}
                      cssOverride={override}
                      size={12}
                      aria-label="Loading Spinner"
                      data-testid="loader"
                    />
                  </>
                ) : (
                  " Create an account"
                )}
              </button>
              <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                Already have an account?{" "}
                <a
                  href="/login"
                  class="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Login here
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
