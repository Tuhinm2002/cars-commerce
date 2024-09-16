import Carousel from 'react-bootstrap/Carousel';
import img1 from './images/audi_a8.jpg';
import img2 from './images/red_coup_st.jpg';
import img3 from './images/lamborghini_aventidor.jpg';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import Grid from '@mui/material/Grid2';

function Home() {
  return (
    <>
    <Carousel >
      <Carousel.Item style={{backgroundColor:"#979b3c",maxHeight:250}}>
        <img src={img1} alt="" width={400} />
        <Carousel.Caption>
          <h3>Buy Cars</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{backgroundColor:"#1b3f66",maxHeight:250}}>
      <img src={img2} alt="" width={400} />
        <Carousel.Caption>
          <h3>Sell Cars</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{backgroundColor:"#9c321c",maxHeight:250}}>
      <img src={img3} alt="" width={400}/>
        <Carousel.Caption>
          <h3>Get the best value</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <div style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:'5%'}}>
      <h1>Welcome to cars commerce</h1></div>
      <div style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:'2%',color:'blue'}}>
      <h4>An ecommerce site for selling cars</h4></div>

      <div style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:'2%'}}>
      <h5>Go to add products to add product and see results in products section</h5></div>
      
      <Box sx={{display:'flex',flexDirection:'column',marginTop:'10%',justifyContent:'center',alignItems:'center'}}>
        <Typography variant='h4'>Some Most sold famous cars</Typography>

      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      <Grid size={{ xs: 2, sm: 4, md: 4 }}>
      <Card sx={{ maxWidth: 345,maxHeight:350 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="/src/components/images/chevrolet_coup.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Chevrolet Coup
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        The Chevrolet Coupé SS is a stock car version of the Chevrolet Nova, 
        designed to race in the Turismo Carretera series, and developed and built since 1968.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </Grid>

    <Grid size={{ xs: 2, sm: 4, md: 4 }}>
    <Card sx={{ maxWidth: 345,maxHeight:350 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="/src/components/images/land_rover_suv.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Land Rover
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        Land Rover is a British brand of predominantly four-wheel drive, 
        off-road capable vehicles, owned by multinational car manufacturer Jaguar Land Rover, since 2008 a subsidiary of India's Tata Motors. 
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </Grid>

    <Grid size={{ xs: 2, sm: 4, md: 4 }}>
    <Card sx={{ maxWidth: 345,maxHeight:350 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="/src/components/images/mercedes_amg.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Mercedes AMG
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        Mercedes-AMG GmbH, commonly known as AMG, is the high-performance subsidiary of Mercedes-Benz AG. 
        AMG independently hires engineers and contracts with manufacturers to customize Mercedes-Benz AMG vehicles. 
        The company has its headquarters in Affalterbach, Baden-Württemberg, Germany.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </Grid>

    </Grid>
    </Box>
  </>
  );
}

export default Home;