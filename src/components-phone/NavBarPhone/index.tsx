import {ReactComponent as CartNav} from 'assets/images-phone/cart-navbar.svg';
import {ReactComponent as HeartNav} from 'assets/images-phone/heart-navbar.svg';
import {ReactComponent as HomeNav} from 'assets/images-phone/home-navbar.svg';
import {ReactComponent as SearchNav} from 'assets/images-phone/search-navbar.svg';
import {ReactComponent as AccountNav} from 'assets/images-phone/account-navbar.svg';
import { NavLink } from 'react-router-dom';

import './styles.css';

const NavBarPhone = () => {
    return (
        <nav className="navbar navbar-expand bg-primary main-nav-phone">
        <div className="container-fluid nav-card-phone">

          <div className="nav-text-phone">
            <ul className="navbar-nav-phone main-menu-phone">

              
              <li>
              <NavLink to="/cart">
                Cart  
              </NavLink>        
              </li>

              <li>
              <NavLink to="/favorites">
               Favorites
               </NavLink>
              </li>

              
              <li>
                <NavLink to="/homephone">
                HOME
                </NavLink>
              </li>

              
              <li>
                <NavLink to="/search">
                <a href="link">Search</a>
                </NavLink>
              </li>
             

              
              <li>
                <NavLink to="/login">
                Account
                </NavLink>
              </li>
              

            </ul>
          </div>

          <div className="nav-images-phone">
            <ul  className="navbar-nav2-phone main-menu2-phone">

              <NavLink to="/cart">
              <li> <CartNav/> </li>
              </NavLink>

              <NavLink to="/favorites">
              <li> <HeartNav/> </li>
              </NavLink>

              <NavLink to="/homephone">
              <li> <HomeNav/> </li>
              </NavLink>

              <NavLink to="/search">
              <li> <SearchNav/> </li>
              </NavLink>

              <NavLink to="/login">
              <li> <AccountNav/> </li>
              </NavLink>

            </ul>
          </div>

        </div>
      </nav>
      
    );
  }
  
  export default NavBarPhone;
  