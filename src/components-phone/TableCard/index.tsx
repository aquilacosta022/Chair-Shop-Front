import {ReactComponent as HeartCard} from 'assets/images-phone/heart-card-home.svg';
import MainTable from 'assets/images-phone/main-table.png';
import './styles.css';

const TableCard = () => {
    return (
      <>


<div className="table-card-container-phone">

<div className="table-img-container-phone">
<img src={MainTable} className="table-img-phone" alt="imagem do produto"/>
</div>

<div className="table-card-text-container-phone">
<h6 className="table-card-text-phone" >Mesa Moderna</h6>
</div>

<div className="table-card-content-phone">
  <h6>$79,99</h6>

  <div className="heart-img">
    <HeartCard/>
    </div>
</div>



</div>


      </>
    );
  }
  
  export default TableCard;
  