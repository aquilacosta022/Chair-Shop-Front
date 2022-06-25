import './styles.css'
import ProductImgChair from 'assets/images/productChair2.png'
import ProductPrice from 'components/ProductPrice';

const ProductChair = () =>{
    

return(
     <div className="base-card prodcutchair-card">

       <div className="card-top-container">
         <img src={ProductImgChair} alt="Imagem do produto" />
           <div className="card-bottom-container">

           
              <ProductPrice />
         </div>

          

       </div>
     </div>
) 

    
}

export default ProductChair;