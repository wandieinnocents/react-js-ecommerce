import  "./Product.css";
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { render } from "react-dom";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Rating from '@mui/material/Rating';



import { ImportantDevices } from '@mui/icons-material';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

// card
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// Icons
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import SendIcon from '@mui/icons-material/Send';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  
// expand more
const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));
  
function Product({id,title,image,price,rating}) {
    const [value, setValue] = React.useState(2);



    return(

   

        <div className="product">
           <Card sx={{ maxWidth: 345 }}>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                W
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title="Product Item"
            subheader="September 14, 2023"
          />
          <CardMedia
            component="img"
            height="194"
            image={image}
            alt="Paella dish"
          />
           {/* rating */}
         
          <CardContent>

         
          <h2 style={{ textAlign:'center',alignItems:'center' }}>
            <Rating
                    name="simple-controlled"
                    value={value}
                    onChange={(event, newValue) => {
                    setValue(newValue);
                    
                    }}
                />
          </h2>
          <h2 style={{ textAlign:'center',alignItems:'center' }}>{price}</h2>
          <h2 style={{ textAlign:'center',alignItems:'center',marginTop:-15,color:'red' }}> <s> UGX 5000,000 </s></h2>
            <Typography variant="body2" color="text.secondary" >
             {title}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
          <IconButton aria-label="share">
              <AddShoppingCartIcon />
            </IconButton>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
          
            <ExpandMore
              // expand={expanded}
            //   onClick={handleExpandClick}
              // aria-expanded={expanded}
              aria-label="show more"
            >
            <Stack 
            direction="row"
            alignContent="center"  
            alignItems="center"
            justifyContent="center"
            spacing={2}  
            >
              
              <Button style={{ marginTop:10 , width:'100%' }} variant="contained"  color="secondary" endIcon={<ArrowForwardIcon />}>
            VIEW DETAIS
              </Button>
            </Stack>
            </ExpandMore>
          </CardActions>
        
        </Card>
       
        </div>

     
     

    )
    
}

export default Product;