import {ReactComponent as HeartCard} from 'assets/images-phone/heart-card-home.svg';
import MainBed from 'assets/images-phone/main-bed.png';
import './styles.css';

const BedCard = () => {
    return (
      <>

<div className="bed-card-container-phone">

<div className="img-container-phone">

<img src={MainBed} alt="imagem do produto"/>

</div>

<div className="bed-card-text-container-phone">
<h6 className="bed-card-text-phone" >Cama Moderna</h6>
</div>

<div className="bed-card-content-phone">
  <h6>$79,99</h6>
  <div className="heart-img">
        <HeartCard/>
  </div>
</div>



</div>

      </>
    
    );
  }
  
  export default BedCard;
  