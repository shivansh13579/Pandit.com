import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import authService from "@/appwrite/auth";
import { useDispatch } from "react-redux";
import { loginSchema } from "@/validatinSchema/LoginSchema";
import { login } from "@/features/authSlice";
import { toast } from "react-toastify";
import { BeatLoader } from "react-spinners";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

function Login() {
  const [color, setColor] = useState("#ffffff");
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

          if (userData) {
            const userData = await authService.getCurrentUser();
            if (userData) dispatch(login(userData));
            toast.success("Login Successfully");
            navigat("/");
          }
          setLoading(false);
        } catch (error) {
          toast.error(error.message);
          setLoading(false);
        }
      },
    });

  return (
    <div className="w-full flex items-center justify-center h-screen bg-gray-200">
      <div class="w-full h-full flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full flex items-center justify-center py-4">
          <img
            class=""
            src="https://www.pandit.com/cdn/shop/files/panditcomlogo_8fdb6d70-7baa-4df1-ad59-d123869184e9.png?v=1714642504"
            alt="logo"
          />
        </div>
        <div class="w-full bg-transparent rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 class="text-center text-xl font-bold leading-tight tracking-tight text-zinc-600 md:text-2xl dark:text-white">
              Log In
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
                disabled={loading}
                value={color}
                onChange={(input) => setColor(input.target.value)}
                type="submit"
                class="w-full bg-violet-600  text-white hover:bg-violet-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-mono text-xl rounded-xl px-5 py-2.5 text-center"
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
                  "Sign in"
                )}
              </button>
              <p class="text-sm font-light text-gray-500 dark:text-gray-400 text-center">
                Don’t have an account yet?
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
    </div>
  );
}

export default Login;
