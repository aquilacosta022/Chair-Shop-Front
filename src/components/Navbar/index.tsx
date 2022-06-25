import './styles.css';
import 'bootstrap/js/src/collapse.js'
import { Link, NavLink } from 'react-router-dom';
import logo from 'assets/images/logo.png';
import loginimg from 'assets/images/LoginImage.png';

const Navbar = () => {
    return (
   <><div className="navbar inicio-container $body-bg" >
             <Link to="/" className="nav-logo-text">
              <img className='logo' src={logo} alt="Logo indisponivel" />
              <h4 className='nav-logo-text'>MoblyShop</h4>
              </Link>
             
             <div className="search-card">
                <div className="lupa"> 
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                </svg>
                   

                    
                   
                    <input className="search-text" placeholder="Pequisar"></input>
                    
               
                   
                    
                   
                </div>
             </div>
               
                <img className="loginimg" src={loginimg} alt="imagelogin" />
              
              
                
                
              
      </div>
  
           <nav className="navbar navbar-expand-md navbar-dark bg-primary main-nav">
          <div className="container-fluid">
            

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#dscatalog-navbar"
              aria-controls="dscatalog-navbar"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="dscatalog-navbar">
              <ul className="navbar-nav offset-md-3 main-menu">
                <li>
                  <NavLink to="/">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/favorites">
                  Favoritos 
                  </NavLink>
                  </li> 
                <li>
                  <NavLink to="/cart">
                    Carrinho
                  </NavLink>
                </li>
                <li>
                  
                <div className="dropdown">
                  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown button
                    </button>
                  <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">
                  <li><a className="dropdown-item active" href="3">Action</a></li>
                 <li><a className="dropdown-item" href="2">Another action</a></li>
                    <li><a className="dropdown-item" href="1">Something else here</a></li>
                    <li><a className="dropdown-item" href="4">Separated link</a></li>
                  </ul>
            </div>
                 
 
                      
                        <script src="script.js"></script>


                </li>
                
              </ul>
            </div>
          </div>
        </nav></>
      
    );
  }

   
  
  export default Navbar;
  