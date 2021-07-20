import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ProductList.css';


const products = ["car","bike","motocycle"];

const ProductList = () => {

    const list = products.map(item =>(
        <li>
            <Link to={`/product/${item}}`}>{item}</Link>
        </li>
    ))
    return ( <>
    <div className="product">
        <h2>Lista produktów</h2>
        <div>
            <ul>
        {list}
            </ul>
        </div>
    </div>    
    </> );
}
 
export default ProductList;