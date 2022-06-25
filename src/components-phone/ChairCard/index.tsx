import {ReactComponent as HeartCard} from 'assets/images-phone/heart-card-home.svg';
import MainChair from 'assets/images-phone/main-chair.png';
import { Link } from 'react-router-dom';
import './styles.css';

const ChairCard = () => {
    return (
      <>
      <div className="chair-card-container-phone">

      <div>
      <Link to="/chair">
      <img src={MainChair} alt="imagem do produto"/>
      </Link>
      </div>

      <div className="chair-card-text-container-phone">
      <h6 className="chair-card-text-phone" >Cadeira Moderna</h6>
      </div>

      <div className="chair-card-content-phone">
        <h6>$79,99</h6>
        <div className="heart-img">
        <HeartCard/>
        </div>
      </div>

      </div>
      </>
    
    );
  }
  
  export default ChairCard;
  