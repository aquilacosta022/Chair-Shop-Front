import React from "react";
import "/.index.css";
import ProductImgChair from 'assets/images/productChair2.png'
const Products = ({productItems}) => {
    return( 
        <div className="products">
            {productItems.map((productItem)=> (

                <div className="card">
                    <div><img className="product-image" src={ProductImgChair} alt="Imagem do produto" /></div>

                </div>
            ))}
        </div>
    )
}
export default Products;