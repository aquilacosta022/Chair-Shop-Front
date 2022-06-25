import {ReactComponent as LoginButton} from 'assets/images-phone/login-button.svg';
import {ReactComponent as GoogleButton} from 'assets/images-phone/google-button.svg';
import {ReactComponent as FacebookButton} from 'assets/images-phone/facebook-button.svg';
import './styles.css';

const LoginContent = () => {
    return (
      <>
      <div className="login-content-phone">
      <LoginButton/>
      <div className="enter-container-phone">
          <h6 className="enter-with-phone">Enter with</h6>
      </div>
      
      <div className="login-butttons-phone">
        <GoogleButton/>
        <FacebookButton/>
      </div>

      <div className="no-account-phone">

        <div>
        <h6 className="no-account-1-phone">Don't have an account?</h6>
        </div>

        <div>
        <h6 className="no-account-2-phone">Create an accouunt</h6>
        </div>
        
      </div>


      </div>
      </>
    
    );
  }
  
  export default LoginContent;
  