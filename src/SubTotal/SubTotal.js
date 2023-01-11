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
import CurrencyFormat from "react-currency-format";




// Styling Items (<Item />)
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


// end of parallax
export default function SubTotal() {
  return (

    // General Box Layout
    <Box sx={{ flexGrow: 1 }}>
            {/* heading */}
                <h2 style={{ color:'black',textAlign: "center",alignContent:"center" }}>
               SUB TOTAL
                </h2>
            

            {/* GENERAL LAYOUT GRID ROW */}
            <Grid  container  direction="row"  spacing={2} >

             
                {/* COL 12 */}
                <Grid item xs={12} sm={12} md={12} >

                    {/* MAIN CONTENT GRID SECTIONS  */}
                    <Grid
                            container
                            direction="row"
                            spacing={2}

                        >
                        
                                {/*  BLOG CONTENT GRID COL 1 */}
                                <Grid item xs={12} sm={12} md={12} >
                                <Item style={{ backgroundColor: '', padding: 6 }}>
                                
                                   

                                   
                                     <CurrencyFormat 
                                       renderText={(value) => (
                                        <>
                                        <p> SubTotal: (0 Items ) : <strong>UGX 0</strong> </p>
                                        <small><input type="checkbox" /> 
                                        This order contains gift 
                                        </small>
                                        </>


                                       )}

                                       decimalScale={2}
                                       value={0}
                                       displayType={"text"}
                                       thousandSeparator={true}
                                     
                                     />
                                     

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
                                    PROCEED TO CHECKOUT 
                                    </Button>
                                    </Stack>
                                
                                </Item>
                               
                                </Grid>
                                {/*  END BLOG CONTENT GRID COL 1 */}

                            
                        </Grid>
                        
                    {/* END BLOG CONTENT GRID COL 2 */}

                </Grid>

              

                {/* END OF PRODUCT INFORMATION */}
            


            </Grid>
            {/* END OF GENERAL LAYOUT GRID ROW */}


    </Box>
    // End of // General Box Layout
  );
}



