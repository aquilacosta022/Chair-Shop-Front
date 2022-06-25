import './styles.css';
import {ReactComponent as MainImage} from 'assets/images-phone/main-image.svg';
import NavBarPhone from 'components-phone/NavBarPhone';
import List from 'components-phone/List';
import Chair from 'components-phone/ChairCard';
import Bad from 'components-phone/BedCard';
import Table from 'components-phone/TableCard';

const Home = () =>{
    return(

        <>
        
        <div className="home-container-phone">
            <div className="home-image-container-phone">
                <MainImage/>
            </div>
            <div>
                <List/>
            </div>
            <div className="home-text-phone">
                <h4>New Chairs</h4>
            </div>
            <div className="chair-card-phone">
                <Chair/>
                <Chair/>
                <Chair/>
            </div>

            <div className="home-text-phone">
                <h4>Beds</h4>
            </div>
            <div className="bed-card-phone">
            <Bad/>
            <Bad/>
            <Bad/>     
            </div>

            <div className="home-text-phone">
                <h4>Tables</h4>
            </div>
            <div className="table-card-phone">
                <Table/>
                <Table/>
                <Table/>
            </div>






        </div>   
        <NavBarPhone/>
        </>
    )
}

export default Home;