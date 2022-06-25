import { Link } from 'react-router-dom';
import {ReactComponent as LogoIcon} from 'assets/images-phone/logo-icon.svg';
import {ReactComponent as ButtonIcon} from 'assets/images-phone/seta-login.svg';
import EmailBarra from 'components-phone/EmailBarra';
import SenhaBarra from 'components-phone/SenhaBarra';
import LoginButton from 'components-phone/LoginContent';


import './styles.css';

const LoginPage = () => {
    return (
      <>
      <div className="login-page-container-phone">

        <div className="button-seta-phone">

        <Link to="/homephone">
        <ButtonIcon/>  
        </Link>

        </div>

        <div className="logo-container-phone">
        <LogoIcon className="logo-img-phone"/>
        </div>

        <div>
            <EmailBarra/>
        </div>

        <div>
            <SenhaBarra/>
        </div>

        <div>
          <LoginButton/>
        </div>
      </div>
      </>
    
    );
  }
  
  export default LoginPage;
  