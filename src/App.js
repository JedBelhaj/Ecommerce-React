import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { Routes, Route } from "react-router-dom";
import AddProducts from "./pages/AddProducts";
import { useState } from "react";

function App() {
    const [products, setProducts] = useState([
        { label: "Product_Name1", id: 1, price: "$35", sales: 4 },
        { label: "Product_Name2", id: 2, price: "$15", sales: 14 },
        { label: "Product_Name3", id: 3, price: "$55", sales: 34 },
        { label: "Product_Name4", id: 4, price: "$55", sales: 0 },
        { label: "Product_Name5", id: 5, price: "$55", sales: 100 },
    ]);
    return (
        <Routes>
            <Route path="/" element={<Home products={products} />} />
            <Route path="/login" element={<Login />} />
            <Route
                path="addproducts"
                element={<AddProducts products={products} />}
            />
        </Routes>
    );
}

export default App;
