import React from "react";
// 
import  "./Home.css";
import Product from "../Product/Product";



// icons
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SearchIcon from '@mui/icons-material/Search';


function Home() {

    return(

        // home
        <div className="home">

        {/* home container */}
        <div className="home__container">
            {/* banner image */}
            <img src="https://www.designhill.com/design-blog/wp-content/uploads/2017/07/fashion-banner.jpg" 
            className="home__image" />

            {/* home row 1 */}
            <div className="home_row">
            <Product />
            <Product />
            
            </div>

              {/* home row 2 */}
              <div className="home_row">
              <Product />
              <Product />
              <Product />
            
            </div>

              {/* home row 3 */}
              <div className="home_row">
              <Product />
              
            </div>
            

        </div>
         {/* end of home container */}
        

   
            
        </div>
        
     

    )
    
}

export default Home;