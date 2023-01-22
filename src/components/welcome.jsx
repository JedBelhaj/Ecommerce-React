import React from "react";
import Product from "./product";
function Welcome(props) {
    const findMostSales = () => {
        let sales = [];
        let index;
        for (let i = 0; i < props.products.length; i++) {
            sales.push(props.products[i].sales);
        }
        index = sales.indexOf(Math.max(...sales));
        return props.products[index];
    };
    const prod = findMostSales();
    return (
        <React.Fragment>
            <div className="text-white rounded-2xl sm:flex-row flex-col mb-6 w-5/6 p-10 pb-20 pt-8 bg-violet-500 hidden">
                <h1 className="text-6xl font-bold w-3/4">
                    Welcome To Ecommerce Website.
                </h1>
                <div className="sm:pl-12 pt-10 sm:pt-0 font-extralight">
                    <h1>About Us : </h1>
                    <br />
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Tenetur cumque maiores quos. Tempore ut vero,
                        consectetur fuga libero corporis, beatae, eum ad
                        pariatur doloribus atque odio architecto ex. Dolores
                        praesentium ipsa magni, commodi expedita molestiae
                        obcaecati consectetur beatae officiis pariatur assumenda
                        minus corporis neque asperiores et illum. Aspernatur,
                        aperiam architecto!
                    </p>
                </div>
            </div>
            <div className="rounded-xl bg-gradient-to-bl from-indigo-500 via-purple-500 to-pink-500 h-fit w-5/6 border flex justify-center items-center flex-col shadow-2xl p-8">
                <button className="m-4 font-bold sm:text-5xl text-4xl text-center text-white">
                    Most Sales :
                </button>
                <Product
                    label={prod.label}
                    price={prod.price}
                    sales={prod.sales}
                />
            </div>
        </React.Fragment>
    );
}
export default Welcome;
