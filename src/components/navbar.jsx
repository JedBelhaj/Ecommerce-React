import React, { useState } from "react";
import { NavLink } from "react-router-dom";
function Navbar() {
    const [op, setOp] = useState("hidden");
    const defaultBtnClasses =
        "sm:text-sm sm:my-1 my-4 text-2xl mx-1 px-3 py-1 rounded-lg text-center text-white hover:scale-125";
    const buttons = [
        { lab: "Home", link: "/" },
        { lab: "Add Products", link: "/addproducts" },
        { lab: "About Us", link: "aboutus" },
        { lab: "Login", link: "/login" },
    ];
    const hamtwclass = "relative sm:hidden " + defaultBtnClasses;
    const [toggle, setToggle] = useState(false);
    const [menu, setMenu] = useState(defaultBtnClasses + " my-1 hidden");
    const [dmenu, setdMenu] = useState("hidden");

    function handleClick() {
        setToggle(!toggle);
        if (toggle) {
            setdMenu("notactive");
            setOp(" fadeout ");
            setTimeout(() => setdMenu("hidden "), 500);
            setTimeout(() => setOp("hidden "), 500);
        } else {
            setMenu(defaultBtnClasses + " my-1 inline sm:hidden");
            setdMenu("inline Active");
            setOp(" fadein ");
        }
    }
    return (
        <React.Fragment>
            <nav className="bg-blue-500 z-10 fixed w-full shadow-lg">
                <div className="flex justify-between sm:justify-around p-3 items-center">
                    <h3 className="font-medium text-white ml-4">
                        E-commerce Website
                    </h3>
                    <div className="flex-col items-center justify-center">
                        <button
                            className={hamtwclass + " right-8"}
                            onClick={handleClick}
                        >
                            ☰
                        </button>
                        {buttons.map((button) => {
                            return (
                                <Btn
                                    link={button.link}
                                    key={button.lab}
                                    btn={button.lab}
                                />
                            );
                        })}
                    </div>
                </div>
            </nav>
            <div
                onClick={handleClick}
                className={
                    "bg-black w-full h-screen fixed z-10 opacity-0 " + op
                }
            ></div>
            <div
                className={
                    "flex flex-col fixed px-5 pt-4 z-30 right-0 bottom-0 bg-blue-500 sm:hidden h-full shadow-lg " +
                    dmenu
                }
            >
                <button className={hamtwclass} onClick={handleClick}>
                    ☰
                </button>
                {buttons.map((button) => {
                    return (
                        <NavLink
                            to={button.link}
                            key={button.lab}
                            className={menu}
                        >
                            {button.lab}
                        </NavLink>
                    );
                })}
            </div>
        </React.Fragment>
    );
}
function Btn(props) {
    const defaultBtnClasses =
        "text-sm mx-1 px-3 py-1 rounded-lg text-center text-white";
    const [classes, setClasses] = useState(
        defaultBtnClasses + " hidden sm:inline"
    );
    return (
        <NavLink to={props.link} className={classes}>
            {props.btn}
        </NavLink>
    );
}

export default Navbar;
