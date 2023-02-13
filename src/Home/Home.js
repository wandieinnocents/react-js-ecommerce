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
            alt="banner" className="home__image" />

            {/* home row 1 */}
            <div className="home__row">
           
             <Product
                id="12321341"
                title="Bennett Mystic 15.6 inch Laptop Shoulder Messenger Sling Office Bag, Water Repellent Fabric for Men and Women (Blue)"
                price={110000.96}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/71mEsHyzSCL._SL1000_.jpg"
            />
             
             <Product
                id="49538094"
                title="IFB 30 L Convection Microwave Oven (30BRC2, Black, With Starter Kit)"
                price={2390000.0}
                rating={4}
                image="https://images-na.ssl-images-amazon.com/images/I/81D8pNFmWzL._SL1500_.jpg"
            />

<Product
                id="49538094"
                title="IFB 30 L Convection Microwave Oven (30BRC2, Black, With Starter Kit)"
                price={2390000.0}
                rating={4}
                image="https://images-na.ssl-images-amazon.com/images/I/81D8pNFmWzL._SL1500_.jpg"
            />
             <Product
                id="49538094"
                title="IFB 30 L Convection Microwave Oven (30BRC2, Black, With Starter Kit)"
                price={2390000.0}
                rating={4}
                image="https://images-na.ssl-images-amazon.com/images/I/81D8pNFmWzL._SL1500_.jpg"
            />
            
            </div>

              {/* home row 2 */}
              <div className="home__row">
              <Product
                        id="4903850"
                        title="All the Light we Cannot See: The Breathtaking World Wide Bestseller Paperback"
                        price={1990000.99}
                        rating={3}
                        image="https://images-eu.ssl-images-amazon.com/images/I/514kNkerQ0L._SY264_BO1,204,203,200_QL40_FMwebp_.jpg"
                    />
                    <Product
                        id="23445930"
                        title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
                        price={980000.99}
                        rating={5}
                        image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
                    />
                    <Product
                        id="3254354345"
                        title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
                        price={5980000.99}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
                    />
            
            </div>

              {/* home row 3 */}
              <div className="home__row">
              <Product
                        id="90829332"
                        title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
                        price={1090000.98}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
                    />
                      <Product
                        id="90829332"
                        title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
                        price={1090000.98}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
                    />
                      <Product
                        id="90829332"
                        title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
                        price={1090000.98}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
                    />
         
              
            </div>
            

        </div>
         {/* end of home container */}
        

   
            
        </div>
        
     

    )
    
}

export default Home;