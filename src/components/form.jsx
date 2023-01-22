import { useState, useEffect } from "react";
import * as json from "../products.json";
function Form(props) {
    const [label, setLabel] = useState("");
    const [price, setPrice] = useState(0);
    const [newProd, setNewProd] = useState({});
    const newId = () => {
        return props.products.length++;
    };

    console.log(json);
    const onSubmit = () => {
        setNewProd({
            label: { label },
            price: { price },
            id: newId,
            sales: 0,
        });
        let json = json + newProd;
        console.log(json);
    };
    return (
        <>
            <div className="pt-28 flex gap-6 flex-col items-center justify-center">
                <h1>Products List</h1>
                <ul>
                    {props.products.map((prod) => (
                        <li>
                            {prod.id}- Product Name : {prod.label} Product Price
                            : {prod.price}, Products Sold : {prod.sales}.{" "}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="flex justify-center items-center flex-col mt-5">
                <div className="w-full max-w-xs ">
                    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        <div className="mb-4">
                            <label
                                className="block text-gray-700 text-sm font-bold mt-4 mb-1"
                                for="label"
                            >
                                ProductName
                            </label>
                            <input
                                onChange={(e) => {
                                    setLabel(e.target.value);
                                }}
                                value={label}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="label"
                                type="text"
                                placeholder="Product Name"
                                required
                            />
                            <label
                                className="block text-gray-700 text-sm font-bold mt-4 mb-1"
                                for="price"
                            >
                                Price
                            </label>

                            <div class="mt-1 flex rounded-md shadow-sm">
                                <span class="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500">
                                    $
                                </span>
                                <input
                                    onChange={(e) => {
                                        setPrice(e.target.value);
                                    }}
                                    value={price}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="price"
                                    type="number"
                                    required
                                />
                            </div>
                        </div>
                        <div className="flex items-center justify-center">
                            <input
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="submit"
                                value={"Add Product"}
                            />
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Form;
