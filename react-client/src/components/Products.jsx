import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import CardView from './CardView';
import axios from 'axios';
import { useEffect,useState } from 'react';
import { styled } from '@mui/material/styles';


export default function Products() {

  const [product,setProduct] = useState([]);

  useEffect(() =>{
    const fetchProduct = async () =>{
    try {
      const response = await axios.get("http://localhost:8080/products")
      .then(res =>{
      
      setProduct(res.data);
      })
    } catch (error) {
      console.log(error)
    }
  }
  fetchProduct()

  },[])

  const Div = styled('div')(({ theme }) => ({
    ...theme.typography.button,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1),
  }));

  if(product != []){
    return <Div>{"No items added !! Please add items to see the listing 🚀"}</Div>;
  }

  return (
    <Box sx={{ flexGrow: 1, p: 2 }}>
      <Grid
        container
        sx={{
          '--Grid-borderWidth': '1px',
          borderTop: 'var(--Grid-borderWidth) solid',
          borderLeft: 'var(--Grid-borderWidth) solid',
          borderColor: 'divider',
          '& > div': {
            borderRight: 'var(--Grid-borderWidth) solid',
            borderBottom: 'var(--Grid-borderWidth) solid',
            borderColor: 'divider',
            margin : '10px',
            width : 'fit-content',
            height:'fit-content'
          },
        }}
      >
        {product.map((item, index) => (
          <Grid
            key={index}
            minHeight={160}
            size={{
              xs: 12,
              sm: 6,
              md: 4,
              lg: 3,
            }}
          >
        <CardView Name={item.name} Category={item.category} DateVal={item.date}
        Availability={item.available} ModelName = {item.model} BrandName = {item.brand}
        prodId = {item.id} ></CardView>
        {/* imageUrl = {item.url} */}
        </Grid>
        ))}
      </Grid>
    </Box>
  );
}