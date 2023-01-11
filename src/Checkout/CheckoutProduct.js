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




// Styling Items (<Item />)
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

// parallax image
const image1 =
  "https://images.unsplash.com/photo-1498092651296-641e88c3b057?auto=format&fit=crop&w=1778&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D";
const image2 =
  "https://img00.deviantart.net/2bd0/i/2009/276/c/9/magic_forrest_wallpaper_by_goergen.jpg";
const image3 =
  "https://brightcove04pmdo-a.akamaihd.net/5104226627001/5104226627001_5297440765001_5280261645001-vs.jpg?pubId=5104226627001&videoId=5280261645001";
const image4 =
  "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/empire-state-building-black-and-white-square-format-john-farnan.jpg";
const parallaxText = {
  // background: "white",
  padding: 10,
  position: "absolute",
  top: "50%",
  left: "50%",
  textAlign: "center",
  width: "100%",
  transform: "translate(-50%,-50%)"
};
// end of parallax
export default function CheckoutProduct() {
  return (

    // General Box Layout
    <Box sx={{ flexGrow: 1 }}>
            {/* heading */}
                <h2 style={{ color:'black',textAlign: "center",alignContent:"center" }}>YOUR SHOPPING BASKET </h2>
            

            {/* GENERAL LAYOUT GRID ROW */}
            <Grid  container  direction="row"  spacing={2} >

                {/* left space */}
                <Grid item xs={12} sm={1} md={1}>
                </Grid>

                {/* COL 1  */}
                <Grid item xs={12} sm={3} md={3}>
        
                        {/* product image */}
                        <Item style={{ backgroundColor: '', padding: 6 }}>

                        <img src="https://images-na.ssl-images-amazon.com/images/I/71mEsHyzSCL._SL1000_.jpg"
                            alt="product image" style={{ width:"200px" , height:"200px"}} />
                        
                        </Item>
                        {/* End of product image */}

                </Grid>

                {/* COL 2 */}
                <Grid item xs={12} sm={7} md={7} >

                
                
                    {/* MAIN CONTENT GRID SECTIONS  */}
                    <Grid
                            container
                            direction="row"
                            spacing={2}

                        >
                        
                                {/*  BLOG CONTENT GRID COL 1 */}
                                <Grid item xs={12} sm={12} md={12} >
                                <Item style={{ backgroundColor: '', padding: 6 }}>
                                
                                    <Typography style={{ color:'black' }}>
                                    This is a product that is 100 pure and is
                                    important in our lives This is a product that is 100 pure and is
                                    important in our livein our lives
                                     </Typography>

                                     <h2>UGX 30000 </h2>
                                     
                                    
                                    

                                    {/* button readmore */}
                                    <hr></hr>

                                    <Stack 
                                    direction="row"
                                    alignContent="center"  
                                    alignItems="center"
                                    justifyContent="center"
                                    spacing={2}  
                                    >
                                    
                                    <Button style={{ marginTop:10 , width:'100%' }} variant="contained"  color="secondary" endIcon={<SendIcon />}>
                                    REMOVE FROM BASKET
                                    </Button>
                                    </Stack>
                                
                                </Item>
                                



                                
                                </Grid>
                                {/*  END BLOG CONTENT GRID COL 1 */}

                            
                        </Grid>
                        
                    {/* END BLOG CONTENT GRID COL 2 */}




                    
                
            

                </Grid>

                {/* right space */}
                <Grid item xs={12} sm={1} md={1}>
                </Grid>


                {/* END OF PRODUCT INFORMATION */}
            


            </Grid>
            {/* END OF GENERAL LAYOUT GRID ROW */}


    </Box>
    // End of // General Box Layout
  );
}



// create the Home stylesheet here
