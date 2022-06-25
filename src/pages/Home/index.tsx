
import './styles.css';
import MainImage  from 'assets/images/main-image.png'
import ProductCard from 'components/Navbar/ProductCard';
import ProductChair from 'components/ProductChair';
import BottonImage from 'assets/images/bottom-image.png';

import NavBarPc from "components/NavBarPc";

const Home = () => {
    return (
 
 <>
 <NavBarPc/>
  <div> <img className="ImageCenter" src={MainImage} alt="Img" />;
   </div>
   <div className="container my-4">
       <div className="row">
       
        <div className="col-sm-6 col-lg-4 col-xl-3">
        <ProductCard/>
        </div>
        
        <div className="col-sm-6 col-lg-4 col-xl-3">
        <ProductChair/>
        </div>
        
        <div className="col-sm-6 col-lg-4 col-xl-3">
        <ProductCard/>
        </div>
        
        <div className="col-sm-6 col-lg-4 col-xl-3">
        <ProductChair/>
        </div>
        
        <div className="col-sm-6 col-lg-4 col-xl-3">
        <ProductCard/>
        </div>
        
        
        <div className="col-sm-6 col-lg-4 col-xl-3">
        <ProductChair/>
      </div> 

      <div className="col-sm-6 col-lg-4 col-xl-3">
        <ProductCard/>
        </div>

        <div className="col-sm-6 col-lg-4 col-xl-3">
        <ProductChair/>
      </div> 
        
      </div>

  </div>

     
  <div> <img className="ImageBotton" src={BottonImage} alt="Img" />;
   </div>
     
     
   <div className="container my-4">
       <div className="row">
       
        <div className="col-sm-6 col-lg-4 col-xl-3">
        <ProductCard/>
        </div>
        
        <div className="col-sm-6 col-lg-4 col-xl-3">
        <ProductChair/>
        </div>
        
        <div className="col-sm-6 col-lg-4 col-xl-3">
        <ProductCard/>
        </div>
        
        <div className="col-sm-6 col-lg-4 col-xl-3">
        <ProductChair/>
        </div>
        
        <div className="col-sm-6 col-lg-4 col-xl-3">
        <ProductCard/>
        </div>
        
        <div className="col-sm-6 col-lg-4 col-xl-3">
        <ProductChair/>
      </div> 

      <div className="col-sm-6 col-lg-4 col-xl-3">
        <ProductCard/>
        </div>

        <div className="col-sm-6 col-lg-4 col-xl-3">
        <ProductChair/>
      </div> 
        
      </div>

  </div>




 

 
 
 
 
 
 
 </>
 );



}  ;

   
  
  export default Home;
  