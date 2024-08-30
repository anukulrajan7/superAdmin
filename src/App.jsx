import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Dashboard from "./pages/Dashboard";
import Myaccount from "./pages/Myaccount";

import Login from "./pages/Login";
import Reviews from "./pages/Products/Reviews";
import Category from "./pages/Products/Category";

import Commission from "./pages/Products/Commission";
import Commision from "./pages/Merchant/Commision";
import Payments from "./pages/Merchant/Payments";

import Bulkupload from "./pages/Products/Bulkupload";
import Merchant from "./pages/Merchant/Merchant";
import Products from "./pages/Products/Products";
import Customers from "./pages/Customers/Customers";
import AddCustomers from "./pages/Customers/Addcustomers";
import Orders from "./pages/Orders/Orders";
import AddMerchant from "./pages/Merchant/AddMerchant";
import EditMerchant from "./pages/Merchant/EditMerchant";
import Details from "./pages/Orders/Details";
import Address from "./pages/Customers/Address";
import City from "./pages/Customers/City";
import State from "./pages/Customers/State";
import Country from "./pages/Customers/Country";
// import Basicinfo from "./pages/Orders/Basicinfo";
// import Paymentdetails from "./pages/Orders/Paymentdetails";
// import Shippingdetails from "./pages/Orders/Shippingdetails";
// import Ordernote from "./pages/Orders/Ordernote";
import Addproducts from "./pages/Products/Addproducts";
import Editproducts from "./pages/Products/Editproducts";
import Reviewsdetails from "./pages/Products/Reviewsdetails";
import Editcategories from "./pages/Products/Editcategories";
import Home from "./pages/Home";
// import Basic_info from "./pages/Products/Addeditproductfiles/Basic_info";

// import Shipping_Basic_info from "./pages/Products/Addeditproductfiles/Shipping_Basic_info";
// import Inventory_Basic_info from "./pages/Products/Addeditproductfiles/Inventory_Basic_info";
// import Pictures_Basic_info from "./pages/Products/Addeditproductfiles/Pictures_Basic_info";
// import Seo_Basic_info from "./pages/Products/Addeditproductfiles/Seo_Basic_info";
// import ProductAttributesBasic_info from "./pages/Products/Addeditproductfiles/ProductAttributesBasic_info";
// import Prices_info from "./pages/Products/Addeditproductfiles/Prices_info";




const App = () => {
  return (




    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Home />} >
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="myaccount" element={<Myaccount />} />
        <Route path="orders" element={<Orders />} />
        {/* <Route path="/basicinfo" element={<Basicinfo />} /> */}
        {/* <Route path="/ordernote" element={<Ordernote />} /> */}
        {/* <Route path="/paymentdetails" element={<Paymentdetails />} /> */}
        {/* <Route path="/shippingdetails" element={<Shippingdetails />} /> */}

        <Route path="orders/details" element={<Details />} />
        <Route path="customers" element={<Customers />} />
        <Route path="customers/country" element={<Country />} />
        <Route path="customers/state" element={<State />} />
        <Route path="customers/city" element={<City />} />
        <Route path="customers/address types" element={<Address />} />
        <Route path="/customers/addcustomers" element={<AddCustomers />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/addproducts" element={<Addproducts />} />

        {/* <Route path="/basic_info" element={<Basic_info />} /> */}
        {/* <Route path="/pricesinfo" element={<Prices_info />} /> */}
        {/* <Route path="/shipping" element={<Shipping_Basic_info />} /> */}
        {/* <Route path="/inventory" element={<Inventory_Basic_info />} /> */}
        {/* <Route path="/pictures" element={<Pictures_Basic_info />} /> */}
        {/* <Route path="/seo" element={<Seo_Basic_info />} /> */}
        {/* <Route path="/productAttribute" element={<ProductAttributesBasic_info />} /> */}

        <Route path="/products/editproducts" element={<Editproducts />} />
        <Route path="/products/reviews" element={<Reviews />} />
        <Route path="/products/reviews/reviewsdetails" element={<Reviewsdetails />} />
        <Route path="/products/commission" element={<Commission />} />
        <Route path="/products/bulk upload" element={<Bulkupload />} />
        <Route path="/products/category" element={<Category />} />
        <Route path="/products/category/editcategories" element={<Editcategories />} />
        <Route path="/merchant/commission" element={<Commision />} />
        <Route path="/merchant/payments" element={<Payments />} />
        <Route path="/merchant/addmerchant" element={<AddMerchant />} />
        <Route path="/merchant/editmerchant" element={<EditMerchant />} />

        <Route path="/merchant" element={<Merchant />} />
      </Route>

    </Routes>


  );
};

export default App;
