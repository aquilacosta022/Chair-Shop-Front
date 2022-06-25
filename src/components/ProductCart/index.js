import "./products.css"
import ProductImgChair from 'assets/images/productChair2.png'
const Products = ({productItems}) =>{
    return (
        <div className="products">
            {productItems.map((productItem)=>(
                <div className="card">
                    <div>
                    <div className="card-top-container">
         <img src={ProductImgChair} alt="Imagem do produto" />
                    </div>
                </div> </div>
            ))}
        </div>

    ) 
   

}