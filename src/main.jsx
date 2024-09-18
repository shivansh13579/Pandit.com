import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import CartProvider from "./contexts/CartProvider.jsx";
import { store } from "./app/store.js";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <CartProvider>
      <App />
      <ToastContainer />
    </CartProvider>
  </Provider>
);
