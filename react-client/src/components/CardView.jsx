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

  // {`/src/components/images/${props.imageUrl}`}

  return (
    <Card sx={{ maxWidth: 345,maxHeight:345}}>
      <CardMedia
        component="img"
        sx={{ height: 140 }}
        image=""
        title={props.name}
        src={props.imageUrl}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.Name}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Category : {props.Category}
          <br></br>
          Brand : {props.BrandName}
          <br></br> 
          Model : {props.ModelName}
          &nbsp;
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