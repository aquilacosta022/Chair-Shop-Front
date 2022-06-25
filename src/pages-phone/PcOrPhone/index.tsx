import { Link } from 'react-router-dom';
import {ReactComponent as PcVersion} from 'assets/images-phone/button-pc-version.svg';
import {ReactComponent as PhoneVersion} from 'assets/images-phone/button-phone-version.svg';
import './styles.css';

const PcOrPhone = () =>{
    return(

        <>  
<div className="pop-container">
    <div className="pop-text">
    <h2>Vesão de celular ou de computador?</h2>
    </div>
    <div className="pop-buttons">
        <div className="pop-pc">
        <Link to="/home">
        <PcVersion/>
        </Link>
        </div>
        <div className="pop-phone">
        <Link to="/homephone">
        <PhoneVersion/>
        </Link>
        </div>

    </div>
</div>
               
         

        </>
    )
}

export default PcOrPhone;