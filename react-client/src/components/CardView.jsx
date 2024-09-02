import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useParams } from 'react-router-dom';

export default function CardView(props) {
  const params = useParams();
  const {prodId} = params;
  console.log(prodId)
  return (
    <Card sx={{ maxWidth: 345}}>
      <CardMedia
        sx={{ height: 140 }}
        image={`../images/${props.url}`}
        title={props.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.Name}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Category : {props.Category} 
          Brand : {props.BrandName} 
          Model : {props.ModelName}
          Date : {props.DateVal}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small" href={`products/${props.prodId}`}>Learn More</Button>
      </CardActions>
    </Card>
  );
}