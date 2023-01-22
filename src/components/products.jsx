import React from "react";
import Product from "./product";
export default function Products(props) {
    return (
        <div className="my-10 border flex flex-wrap items-center justify-center sm:pt-16 pt-10">
            {props.products.map((prod) => (
                <Product
                    key={prod.id}
                    label={prod.label}
                    price={prod.price}
                    sales={prod.sales}
                />
            ))}
        </div>
    );
}
