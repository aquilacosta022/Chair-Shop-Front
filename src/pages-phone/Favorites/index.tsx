import NavBarPhone from "components-phone/NavBarPhone";
import Chair from 'components-phone/ChairCardFavorites';
import './styles.css';

const Favorites = () =>{
    return(

        <>
        <div className="favorites-container-phone">
            <div className="favorites-title-phone">
                <h2>Favorites</h2>
            </div>

            <div className="favorites-img-phone">

                <div className="favorites-chairs-1-phone">
                <Chair/>
                <Chair/>
                <Chair/>
                </div>

                <div className="favorites-chairs-2-phone">
                <Chair/>
                <Chair/>
                <Chair/>
                </div>

            </div>
        </div>   
        <NavBarPhone/>
        </>
    )
}

export default Favorites;