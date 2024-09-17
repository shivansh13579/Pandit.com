import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Services from "./page/Services";
import LuckyBraclet from "./page/products/LuckyBraclet";
import ProductOneDetails from "./page/products/ProductOneDetails";
import ProductsType from "./page/products/ProductsType";
import ProductCart from "./page/products/ProductCart";
import ProductWishlist from "./page/products/ProductWishlist";
import Login from "./page/Login";
import ContactUs from "./page/ContactUs";
import About from "./page/About";
import ServicesBooking from "./page/ServicesBooking";
import SignUp from "./page/SignUp";
import DestinationWedding from "./page/DestinationWedding";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/header" element={<Header />} />
        {/* Products */}
        <Route path="/products" element={<ProductsType />} />
        <Route path="/collection/:id" element={<LuckyBraclet />} />
        <Route path="/lucky-braclet" element={<LuckyBraclet />} />
        <Route path="/product/:slug" element={<ProductOneDetails />} />
        <Route path="/productCart" element={<ProductCart />} />
        <Route path="/productWishlist" element={<ProductWishlist />} />

        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Servicesid" element={<ServicesBooking />} />
        <Route path="/destinatinWedding" element={<DestinationWedding />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
