import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import { useEffect,useState } from 'react';
import axios from 'axios';

export default function SingleProduct(){
    const curr_val = window.location.href.slice(-1);
    // console.log(curr_val)
    const [data,setData] = useState(null)
    
    useEffect(() =>{
        const fetchProduct = async () =>{
        try {
        const val = await axios.get(`http://localhost:8080/products/${curr_val}`)
        .then(res =>{
        console.log(res.data);
        })
        } catch (error) {
            console.log(error);
        }
        }
        fetchProduct()
    },[])

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Buy Now
        </Button>
      </CardActions>
    </Card>
  );
}