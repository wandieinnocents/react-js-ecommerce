import React from "react";
import "./Header.css"

// icons
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SearchIcon from '@mui/icons-material/Search';


function Header() {

    return(
        <div className="header">

     {/* header logo */}
     <div className="header_logo">
     <StorefrontIcon  fontSize="large" className="logo_header_image" />
     <h2 className="headerLogoTitle"></h2>
     </div>

     {/* search bar */}
     <div className="header_search">
     <input type="text" className="header_search_input" />
     <SearchIcon  fontSize="large" className="header_search_icon" />
     
     </div>

     {/* nav header */}
     <div className="header_nav">

      <div className="nav_item">
        <span className="nav_item_one">Hello Guest</span>
        <span className="nav_item_two">Signin</span>

      </div>

      <div className="nav_item">
        <span className="nav_item_one">Your</span>
        <span className="nav_item_two">Shop</span>
        
      </div>


      <div className="nav_item">
     <ShoppingCartIcon  fontSize="large"  />
      <span className="nav_item_two">0</span>
        
      </div>
     </div>
     

     
     

        </div>
    )
    
}

export default Header;