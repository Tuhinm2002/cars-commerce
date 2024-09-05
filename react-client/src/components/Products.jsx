import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import CardView from './CardView';
import axios from 'axios';
import { useEffect,useState } from 'react';

export default function Products() {

  const [product,setProduct] = useState([]);

  useEffect(() =>{
    const fetchProduct = async () =>{
    try {
      const response = await axios.get("http://localhost:8080/products")
      .then(res =>{
      setProduct(res.data);
      // console.log(res.data)
      })
    } catch (error) {
      console.log(error)
    }
  }
  fetchProduct()
  },[])

  // console.log(product[0].id)

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