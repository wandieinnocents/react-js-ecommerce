import React from "react";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct"


function Checkout() {

    return(
        <div className="checkout">
            {/* left checkout  */}
            <div className="checkout__left">
                {/* banner */}
                <img src="https://www.wearit.com.bd/assets/images/shop-banner1.png" 
                alt="shopping banner"
                className="checkout__ad" />

                {/* heading */}
                <div>
                <h2>YOUR CHECKOUT BASKET</h2>
                </div>

                {/* checkout product */}
                <CheckoutProduct />
                
                

                
            </div>



            {/* right checkout  */}
            <div className="checkout__left">
            </div>

        </div>
    )
    
}

export default Checkout;