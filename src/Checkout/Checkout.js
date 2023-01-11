import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { render } from "react-dom";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Hidden } from '@mui/material';




import { ImportantDevices } from '@mui/icons-material';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';

// Icons
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';

// components
import CheckoutProduct from "./CheckoutProduct";
import SubTotal from "../SubTotal/SubTotal";




// Styling Items (<Item />)
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


export default function Checkout() {
  return (

    // General Box Layout
    <Box sx={{ flexGrow: 1 }}>
     
    <img src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
    alt="banner" />

      {/* GENERAL LAYOUT GRID ROW */}
      <Grid
        container
        direction="row"
        spacing={2}
      >
      
          {/* COL 1 */}
        {/* PRODUCT BASKET SECTION */}
        <Grid item xs={12} sm={8} md={8} >

        {/* checkout product component */}
        <CheckoutProduct />
        <CheckoutProduct />
        <CheckoutProduct />

        {/* end checkout product component */}

        </Grid>

        {/* END OF PRODUCT BASKET SECTION */}

        {/* COL 2 */}
        {/* PROCEED TO CHECKOUT */}
        <Grid item xs={12} sm={4} md={4}>
            
        <SubTotal />

        </Grid>


      
      </Grid>
      {/* END OF GENERAL LAYOUT GRID ROW */}


























    </Box>
    // End of // General Box Layout
  );
}



