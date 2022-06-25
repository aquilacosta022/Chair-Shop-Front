import PcOrPhone from 'pages-phone/PcOrPhone';
import Cart from 'pages-phone/Cart';
import FavoritesPhone from 'pages-phone/Favorites';
import Login from 'pages-phone/Login';
import Search from 'pages-phone/Search';
import Chair from "pages-phone/Chair";
import HomePhone from "pages-phone/Home";

import Carrinho from "pages/Carrinho";
import Favorites from "pages/Favorites";
import Home from "pages/Home";
import Test from "pages/teste/index";

import { BrowserRouter, Route, Routes } from "react-router-dom";

const BRoutes = () => (


      <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<PcOrPhone/>}/>
        <Route path="/chair" element={<Chair/>}/>
        <Route path="/search" element={<Search/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path='/favorites' element={<FavoritesPhone/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path="/homephone" element={<HomePhone/>}/>

        <Route path="/home" element={<Home/>} />
        <Route path="/cartpc" element={<Carrinho />} />
        <Route path="/test" element={<Test />} />
        <Route path="/favoritespc" element={<Favorites   />} />



      </Routes>
      </BrowserRouter>


    );


export default BRoutes;