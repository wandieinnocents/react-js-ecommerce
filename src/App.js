import './App.css';

// icons
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function App() {
  return (
    <div className="App">
     
     {/* header logo */}
     <div className="header_logo"></div>

     {/* search bar */}
     <div className="header_search"></div>

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
      <span className="nav_item_one"><ShoppingCartIcon /></span>
      <span className="nav_item_two">0</span>
        
      </div>
     </div>
     

     
     
     

    </div>
  );
}

export default App;
