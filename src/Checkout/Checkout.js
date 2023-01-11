import React from "react";
import "./Checkout.css";


function Checkout() {

    return(
        <div className="checkout">
            {/* left checkout  */}
            <div className="checkout__left">
                {/* banner */}
                <img src="https://static.vecteezy.com/system/resources/previews/004/299/835/original/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-free-vector.jpg" 
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