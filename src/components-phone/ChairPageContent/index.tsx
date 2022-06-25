import {ReactComponent as MaisIcon} from 'assets/images-phone/mais-icon.svg';
import {ReactComponent as MenosIcon} from 'assets/images-phone/menos-icon.svg';
import {ReactComponent as BuyIcon} from 'assets/images-phone/buy-icon.svg';
import './styles.css';

const ChairPageContent = () =>{
    return(

        <>
        <div className="chair-page-content-phone">
            <div className="page-back-phone">
            <div className="page-title-phone">
            <h3 className="page-font-title-phone">Modern chair</h3>
            </div>

            <div className="page-content-phone">
                <h6>Lorem Ipsum is simply dummy text of the
                    printing and typesetting industry. Lorem Ipsum
                    has been the industry's standard dummy text ever
                    since</h6>
            </div>

            <div className="page-content-product-phone">
          
            <div className="page-price-phone">
                <h1 className="page-h1-phone">$79,99</h1>
            </div>

            <div className="add-product-phone">
                <MaisIcon/>
                <h2>01</h2>
                <MenosIcon/>
            </div>

            </div>

            <div className="buy-button-phone">
                <BuyIcon/>
            </div>
          
            </div>
        </div>
        </>
    )
}

export default ChairPageContent;