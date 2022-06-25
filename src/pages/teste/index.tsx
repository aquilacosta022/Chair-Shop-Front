import Header from "components/Back/Front/Header/sHeader";
import React from "react";
import ProductImg from 'assets/images/productChai1.png'
import ProductChair from 'components/ProductChair';
import "./styles.css"
import ProductPrice from 'components/ProductPrice';
const App = () => {
 
    return(
     <> 
        <div className="process">
         <div className="process-text">
          CART {">"} FINALIZE PURCHARSE {">"} PAY {">"} COMPLETE ORDER 

         </div>
        </div>
          
        <div className="ajust-header">
        <div className="header">
         <div className="header-name">Carrinho</div>
        </div>
        </div>
   <div className="division-containers">  
     <div className="conatiner-principal">

        <div className="sub-img1">
           <div className="img-top">
           <img src={ProductImg} alt="Imagem do produto" />
           </div>
           <div className="text-top">
           <ProductPrice />
           </div>
        </div>
        <div className="sub-img1">
           <div className="img-top">
           <img src={ProductImg} alt="Imagem do produto" />
           </div>
           <div className="text-top">
           <ProductPrice />
           </div>
        </div>

     </div>
    <div className="ajust-card"> 
    <div className="carrinho"> 
        <div className="text-cart">
             <div className="space-to-text">
              <div className="space-to-cart">
                  <div className="Cadeira">
                   4x Cadeira
                  </div>
                  <div className="Cadeira-bottom">
                   4x Cadeira
                  </div>
              </div>
              <div className="space-to-cart-price">
              <div className="price">$319,96</div>
              <div className="price-bottom">$319,96</div>
              </div>
              </div>
       
        </div> 
        <div className="line-border">
         <div className="line"></div>
        </div>
        <div className="line-border"></div>
        <div className="total-text"></div>
        <div className="total-price">
           <div className="total">Total</div>
           <div className="total">$639,92</div>
        
      
        </div>

        <div className="buy">
         <div className="buy-botton">
            <div className="buy-botton-text">BUY</div>
         </div>
        </div>
        
        
        
        </div>  

        </div>


        
     </div>
     
     <div className="ajust">
     <div className="conatiner-principal">



<div className="sub-img1">
   <div className="img-top">
   <img src={ProductImg} alt="Imagem do produto" />
   </div>
   <div className="text-top">
   <ProductPrice />
   </div>
</div>
<div className="sub-img1">
   <div className="img-top">
   <img src={ProductImg} alt="Imagem do produto" />
   </div>
   <div className="text-top">
   <ProductPrice />
   </div>
</div>

</div>
</div>
    
    </>
 
    )

}

export default App;