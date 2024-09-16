import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';

export default function About() {
  return (
    <Box sx={{display:'flex',justifyContent:'center',alignContent:'center',marginTop:'10%'}}>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          About the dev
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        Tuhin's Full name is Tuhin Mondal also known by the code name. 
        tuhinm2002 in many coding platforms like leetcode and codechef and also in github. 
        He is a 2025 of B.tech studying in University of Engineering and Management. 
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href=''>Share</Button>
        <Button size="small" href='https://github.com/Tuhinm2002'>Learn More</Button>
      </CardActions>
    </Card>
    </Box>
  );
}
