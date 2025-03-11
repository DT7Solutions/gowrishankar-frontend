// import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HashRouter as Router, Route, Routes } from "react-router-dom";

import RouteScrollToTop from "./helper/RouteScrollToTop";
import ScrollToTop from "react-scroll-to-top";
import AboutPage from "./pages/AboutPage";
import ServicePage from "./pages/ServicePage";
import ServiceDetailsPage from "./pages/ServiceDetailsPage";
import BlogPage from "./pages/BlogPage";
import BlogDetailsPage from "./pages/BlogDetailsPage";
import ShopPage from "./pages/ShopPage";
import ShopDetailsPage from "./pages/ShopDetailsPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import WishlistPage from "./pages/WishlistPage";
import ContactPage from "./pages/ContactPage";
import HomePageSix from "./pages/HomePageSix";
import LoginPage  from "./pages/LoginPage";
import RegisterPage  from "./pages/RegisterPage";

function App() {
  return (
    <Router>
      <RouteScrollToTop />
      <ScrollToTop smooth color="#E8092E" />
      <Routes>
       
        <Route exact path="/" element={<HomePageSix />} />
        <Route exact path="/about" element={<AboutPage />} />
        <Route exact path="/service" element={<ServicePage />} />
        <Route exact path="/service-details" element={<ServiceDetailsPage />} />

        <Route exact path="/blog" element={<BlogPage />} />
        <Route exact path="/blog-details" element={<BlogDetailsPage />} />

        <Route exact path="/shop" element={<ShopPage />} />
        <Route exact path="/shop-details" element={<ShopDetailsPage />} />
        <Route exact path="/cart" element={<CartPage />} />
        <Route exact path="/checkout" element={<CheckoutPage />} />
        <Route exact path="/wishlist" element={<WishlistPage />} />
        <Route exact path="/contact" element={<ContactPage />} />
        <Route exact path="/Login" element={<LoginPage />} />
        <Route exact path="/Register" element={<RegisterPage />} />
      </Routes>
    </Router>
  );
}

export default App;
