import React from "react";
import "./Header.css";

// icons
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SearchIcon from '@mui/icons-material/Search';

// Links
import {Link} from "react-router-dom";

function Header() {

    return(
        <div className="header">

     {/* header logo */}
     <Link to="/" style={{ textDecoration:"none"}}>
     <div className="header_logo">
     <StorefrontIcon  fontSize="large" className="logo_header_image" />
     <h2 className="header_logo_title">eShop</h2>
     </div>
     </Link>

     {/* search bar */}
     <div className="header_search">
     <input type="text" className="header_search_input" />
     <SearchIcon  fontSize="large" className="header_search_icon" />
     
     </div>

     {/* nav header */}
     <div className="header_nav">
     <Link to="/login" style={{ textDecoration:"none"}}>
      <div className="nav_item">
        <span className="nav_item_one">Hello Guest</span>
        <span className="nav_item_two">Signin</span>

      </div>
      </Link>


      
      <div className="nav_item">
        <span className="nav_item_one">Your</span>
        <span className="nav_item_two">Shop</span>
        
      </div>
   


      {/* basket */}

      <Link to="/checkout" style={{ textDecoration:"none"}}>
      <div className="nav__itemBasket">
        <ShoppingCartIcon   />
        
        <span className="nav_basketCount">0</span>
      </div>
      </Link>

     
    


      
     </div>
     

     
     

        </div>
    )
    
}

export default Header;