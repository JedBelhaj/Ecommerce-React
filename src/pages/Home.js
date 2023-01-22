import React from "react";
import Navbar from "../components/navbar";
import Body from "../components/body";
import Footer from "../components/footer";
function Home(props) {
    return (
        <>
            <Navbar />
            <Body products={props.products} />
            <Footer />
        </>
    );
}

export default Home;
