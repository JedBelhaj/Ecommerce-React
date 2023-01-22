import React from "react";
import Navbar from "../components/navbar";
import { useState, useEffect } from "react";
import Form from "../components/form";
function AddProducts(props) {
    const handleSubmit = () => {};

    return (
        <>
            <Navbar />
            <Form products={props.products} />
        </>
    );
}

export default AddProducts;
