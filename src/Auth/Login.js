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
import TextField from '@mui/material/TextField';




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
export default function Login() {
  return (

    // General Box Layout
    <Box sx={{ flexGrow: 1 }}>
            
            

            {/* GENERAL LAYOUT GRID ROW */}
            <Grid  container  direction="row"  spacing={2} >
           
            {/* col1 */}
            <Grid item xs={12} sm={4} md={4} >
            </Grid>
            {/* end of col1 */}


            {/* COL 2 */}
            <Grid item xs={12} sm={4} md={4} >

                <Grid
                    container
                    direction="row"
                    spacing={2}
                >
                
                    {/* Column1 */}
                    <Grid item xs={12} sm={12} md={12} style={{ backgroundColor: '', padding: 20 }} >

                    {/* icon */}
                    <h2 style={{ backgroundColor: '', fontSize: 30, color: 'black', textAlign: 'center', fontFamily: "Playfair Display" }}>
                        SIGN IN  </h2>



                        {/* first form */}

                        <form noValidate autoComplete="off"  >

                        {/* fullname */}
                        <TextField 
                        // onChange={ (e) => setFullName(e.target.value) }
                        id="outlined-basic" 
                        label="Full Name" 
                        variant="outlined"
                        color="secondary"
                        fullWidth
                        required
                        // error={fullnameError}
                        style={{  marginTop:20,marginBottom:20,display:'block'  }}
                        />

                    

                        {/* email */}
                        <TextField 
                        // onChange={ (e) => setEmail(e.target.value) }
                        id="outlined-basic" 
                        label="Email" 
                        variant="outlined"
                        color="secondary"
                        fullWidth
                        required
                        // error={emailError}
                        style={{  marginTop:20,marginBottom:20,display:'block'  }}
                        />

                       



                        {/* button */}
                        <Stack 
                        direction="row"
                        alignContent="center"  
                        alignItems="center"
                        justifyContent="center"
                        spacing={2}  
                        >
                            
                            <Button 
                            // onClick={handleSubmit}
                            // onClick = { () => console.log("bUTTON CLICKED")}
                            style={{ marginTop:10 , width:'100%' }} 
                            variant="contained"  
                            color="primary" 
                            endIcon={<SendIcon />}>
                            SIGNIN
                            </Button>
                        </Stack>

                        <p>By signing in you agree with all the tersm of work.</p>
                         {/* button */}
                         <Stack 
                        direction="row"
                        alignContent="center"  
                        alignItems="center"
                        justifyContent="center"
                        spacing={2}  
                        >
                            
                            <Button 
                            // onClick={handleSubmit}
                            // onClick = { () => console.log("bUTTON CLICKED")}
                            style={{ marginTop:10 , width:'100%' }} 
                            variant="contained"  
                            color="secondary" 
                            endIcon={<SendIcon />}>
                            CREATE ACCOUNT
                            </Button>
                        </Stack>



                    

                        

                    
                        
                        </form>

                        

                    </Grid>

                
                </Grid>

            </Grid>
            {/* END OF  COL 2 */}

                <Grid item xs={12} sm={4} md={4} >
            </Grid>

              



            </Grid>
            {/* END OF GENERAL LAYOUT GRID ROW */}


    </Box>
    // End of // General Box Layout
  );
}



