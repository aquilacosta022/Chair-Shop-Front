import './styles.css'
import ProductCard from 'components/Navbar/ProductCard';
import ProductChair from 'components/ProductChair';
import NavBarPc from 'components/NavBarPc';

const Favorites = () => {



    return(
        <>
        <NavBarPc/>
        <h1 className="NamePage">MEUS FAVORITOS</h1>
        <div className="container ">
            <div className="row"> 

                <div className="col-sm-6 col-lg-4 col-xl-3">
                    <ProductCard />
                </div>  

                <div className="col-sm-6 col-lg-4 col-xl-3">
                    <ProductChair />
                </div>

                <div className="col-sm-6 col-lg-4 col-xl-3">
                    <ProductCard />
                </div>

                <div className="col-sm-6 col-lg-4 col-xl-3">
                    <ProductChair />
                </div>

                <div className="col-sm-6 col-lg-4 col-xl-3">
                    <ProductCard />
                </div>

                <div className="col-sm-6 col-lg-4 col-xl-3">
                    <ProductChair />
                </div>

                <div className="col-sm-6 col-lg-4 col-xl-3">
                    <ProductCard />
                </div>

                <div className="col-sm-6 col-lg-4 col-xl-3">
                    <ProductChair />
                </div>
            </div>
        </div></>

    );
}
export default Favorites