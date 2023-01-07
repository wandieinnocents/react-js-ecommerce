import React from "react";
import  "./Product.css";
import Rating from '@mui/material/Rating';


// icons
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SearchIcon from '@mui/icons-material/Search';


function Product() {
    const [value, setValue] = React.useState(3);


    return(

        // product
        <div className="product">
        

        {/* product info */}
        <div className="product__info">
        <p>Product title</p>
        <p className="product__price">UGX 3000</p>
        <div className="product__rating">
        <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      /></div>


        </div>

        {/* product */}

        
        </div>
        
     

    )
    
}

export default Product;