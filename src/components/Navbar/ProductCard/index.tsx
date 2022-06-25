import './styles.css'

import ProductImg from 'assets/images/productChai1.png'
import ProductPrice from 'components/ProductPrice';

const ProductCard = () =>{
    

return(
     <div className="base-card prodcut-card">

       <div className="card-top-container">
         <img src={ProductImg} alt="Imagem do produto" />
           <div className="card-bottom-container">

           
              <ProductPrice />
         </div>

          

       </div>
     </div>
) 

    
}

export default ProductCard;