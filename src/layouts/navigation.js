
import React from 'react';
import { NavLink } from 'react-router-dom';
import "../styles/navigation.css";

const list = [
    { name: "Start", path: "/", exact: true },
    { name: "Produkty", path: "/products" },
    { name: "Kontakt", path: "/contacts" },
    { name: "Panel admin", path: "/admin" },

]
const Navigation = () => {

    const menu = list.map(item => (
        <li key={item.name}>
            <NavLink to={item.path} exact = {item.exact ? item.exact : false}>{item.name}</NavLink>
        </li>
    ))
    return (<div>
        <nav className="main">
            <ul>
                {menu}
            </ul>
        </nav>
    </div>);
}

export default Navigation;