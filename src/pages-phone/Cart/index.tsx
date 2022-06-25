import NavBarPhone from "components-phone/NavBarPhone";
import CartBuyCard from "components-phone/CartCardPhone";
import {ReactComponent as Line} from 'assets/images-phone/line-icon.svg';
import './styles.css';

const Cart = () =>{
    return(

        <>  
        <div className="cart-container-phone">
            <div className="cart-title-phone">
                <h2>Cart</h2>
            </div>

            <div className="cart-img-phone">
                <CartBuyCard/>
                <CartBuyCard/>
            </div>

            <div className="cart-page-content-phone">
                <div className="cart-page-subtotal-phone">
                <h6>Subtotal</h6>
                <h6>$159,98</h6>
                </div>

                <div className="cart-page-freight-phone">
                <h6>Freight</h6>
                <h6>$15,99</h6>
                </div>

                <div className="cart-page-line-phone">
                    <Line/>
                </div>

                <div className="cart-page-total-phone">
                <h6 className="cart-page-text-phone">Total</h6>
                <h6 className="cart-page-text-phone">$175,97</h6>
                </div>

            </div>
        </div>   
        <NavBarPhone/>
        </>
    )
}

export default Cart;