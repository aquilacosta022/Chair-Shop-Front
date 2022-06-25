import {ReactComponent as Senha} from 'assets/images-phone/senha-barra.svg';
import './styles.css';

const SenhaBarra = () => {
    return (
      <>
      <div className="senha-barra-phone">
      <Senha/>
      </div>
      <div className="senha-esquecida-container-phone">
        <h6 className="senha-esquecida-phone">Forgot your password?</h6>
      </div>
      </>
    
    );
  }
  
  export default SenhaBarra;
  