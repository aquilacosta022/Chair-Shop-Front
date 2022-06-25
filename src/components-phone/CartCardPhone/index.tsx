import {ReactComponent as ChairBuy} from 'assets/images-phone/chair-img-buy.svg';
import {ReactComponent as MaisIconCard} from 'assets/images-phone/mais-icon-2.svg';
import {ReactComponent as MenosIconCard} from 'assets/images-phone/menos-icon-2.svg';
import {ReactComponent as Lixeira} from 'assets/images-phone/lixeira-icon.svg';
import './styles.css';

const CartBuyCard = () => {
return(

   <>
    <div className="cart-buy-card-container-phone">

        <div className="card-buy-phone">

            <div className="card-buy-phone-img">
            <ChairBuy/>
            </div>

            <div className="card-buy-phone-content">
                <h6 className="chair-card-text-phone">Cadeiras Modernas</h6>
                <h6 className="chair-card-buy-phone"> $79,99</h6>

                <div className="add-remove-phone">
                <MenosIconCard/> <h6 className="chair-card-text-phone2">01</h6> <MaisIconCard/>
                </div>

                <div className="lixeira-icon">
                <Lixeira/>
                </div>

            </div>

        </div>

    </div>
    </>
    
 );
  }
  
  export default CartBuyCard;
  