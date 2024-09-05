import * as React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import { useEffect,useState } from 'react';


export default function SingleProduct(){
    const curr_val = window.location.href.slice(-1);
    // console.log(curr_val)
    const [responseData,setResponseData] = useState([])
    const [available,setAvailable] = useState(null);
    
    useEffect(() =>{
        const fetchProduct = async () =>{
        try {
        const val = await axios.get(`http://localhost:8080/products/${curr_val}`)
        .then(res =>{
        setResponseData(res.data);
        if(res.data.available){
          let st = "Available"
          setAvailable(st);
        }
        else{
          let st = "Not available";
          setAvailable(st);
        }

        })
        } catch (error) {
            console.log(error);
        }
        }
        fetchProduct()
    },[])

  return (
    
    <Card className="text-center">
      <Card.Header>Your choosed {responseData.name}</Card.Header>
      <Card.Img variant="top" src={`/src/components/images/${responseData.url}`}
       style={{height:300,objectFit:'contain',marginTop:10}}/>
      <Card.Body>
        <Card.Title>{responseData.name}</Card.Title>
        <Card.Text>
          Category : {responseData.category} &nbsp; Brand : {responseData.brand} &nbsp; Model : {responseData.model}
          <br></br>
          Date Added : {responseData.date}
          <br></br>
          Price : {responseData.price}
        </Card.Text>
        <Button variant="primary">Buy now</Button>
      </Card.Body>
      <Card.Footer className="text-muted">Available : {available}</Card.Footer>
    </Card>
  );
}
