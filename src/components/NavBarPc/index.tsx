import {ReactComponent as NavBarPcSup} from 'assets/images/navbar-sup.svg';
import { Link } from 'react-router-dom';
import './styles.css';

const NavBarPc = () => {
    return (
   <>
   <div className="navbar-pc-container">
    <div className="navbar-sup-img">
   <NavBarPcSup/>
   </div>
   <div className="navbar-pc-content">
    <div className="navbar-pc-content-2">

    <Link to="/home">
    <h4>Menu</h4>
    </Link>

    <Link to="/favoritespc">
    <h4>Favoritos</h4>
    </Link>

    <Link to="/cartpc">
    <h4>Carrinho</h4>
    </Link>


    </div>
   </div>
   </div>
   </>   
    );
  }

   
  
  export default NavBarPc;
  