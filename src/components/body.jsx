import React, { useState } from "react";
import Welcome from "./welcome";
import Products from "./products";

function Body(props) {
    console.log(props);
    return (
        <React.Fragment>
            <div className="flex items-center justify-center flex-col sm:pt-24 pt-36">
                <Welcome products={props.products} />
                <Products products={props.products} />
            </div>
        </React.Fragment>
    );
}

export default Body;
