import { Link } from 'react-router-dom';
import MainChairg from 'assets/images-phone/main-chairg.png';
import {ReactComponent as Seta} from 'assets/images-phone/seta-icon.svg';
import {ReactComponent as Cart} from 'assets/images-phone/cart-icon.svg';
import {ReactComponent as Bolinhas} from 'assets/images-phone/bolinhas-icon.svg';
import './styles.css';

const ChairPageCard = () =>{
    return(

        <>
        <div className="page-chair-container-phone">
            <div className="card-buttons-phone">
             <Link to="/homephone">
                <Seta />
             </Link>
                <Cart/>
            </div>
            <div className="img-product-phone">
           <img src={MainChairg} alt="imagem do produto" className="img-chair-page-phone"/>
           
          </div>
          <div className="bolinha-content-phone">
            <Bolinhas/>
          </div>
        </div>
        </>
    )
}

export default ChairPageCard;