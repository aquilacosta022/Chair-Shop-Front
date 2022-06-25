import NavBarPhone from 'components-phone/NavBarPhone';
import './styles.css';

const SearchPage = () => {
    return (
      <>

      <div className="search-page-phone">

      <div className="search-content-phone">
      <input className="search-text-phone" placeholder="Pequisar"></input>
      </div>

      </div>
      
      <NavBarPhone/>
      </>
    
    );
  }
  
  export default SearchPage;
  