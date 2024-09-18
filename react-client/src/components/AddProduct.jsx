import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import * as React from 'react';
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useState } from 'react';
import axios from 'axios';

function GridComplexExample() {
  const [dateValue,setDateValue] = useState(null)
  const [file,setFile] = useState(null);
  const [available,setAvailable] = useState(false);

  // function submitPreventReload(e){
  //   e.preventDefault();
  //   const formData = new FormData();
  //   formData.append("image",file);
    
  // }

  function handleFile(event) {
    event.preventDefault();
    setFile(event.target.files[0])
  }

  function handleAvailble(e){
    e.preventDefault();
    setAvailable(true)
  }
  
  function submitValue(e){
    e.preventDefault();
    
    try{
    const brand = document.getElementById('formGridBrand')
    const model = document.getElementById('formGridModel')
    const category = document.getElementById('formGridCategory')
    const name = document.getElementById('formGridFullName')
    // const available = document.getElementById('formGridCheckbox')
    // const dateUTC = `${dateValue.$y+"-"+dateValue.$D+"-"+dateValue.$M}`
    const dateUTC = dayjs(dateValue);

    const user = {brand : brand.value,
      model : model.value,
      category : category.value,
      name : name.value,
      date : dateUTC,
      available : available,
    }
    const formData = new FormData();
    // 
    formData.append(
      "product",
      new Blob([JSON.stringify(user)], { type: "application/json" })
    );
    formData.append("imageFile", file);
    axios
      .post("http://localhost:8080/add_products", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
    console.log(formData);
  }
  catch(err){
    console.log(err)
  }
    
  }

  // submitValue()

  // onSubmit={submitPreventReload}
  return (
    <Form className='w-25 mt-4' style={{margin:"auto"}} onSubmit={submitValue}> 
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridBrand">
          <Form.Label>Vehicle Brand</Form.Label>
          <Form.Control type="text" placeholder="Ex: BMW" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridModel">
          <Form.Label>Vehicle Model</Form.Label>
          <Form.Control type="text" placeholder="Ex: xf,xt, etc.." />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3 ml-4 " controlId="formGridCategory">
        <Form.Label>Vehicle Category</Form.Label>
        <Form.Control placeholder="Ex: Cars,Trucks,Trains ..." />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridFullName">
        <Form.Label>Vehicle Full Name</Form.Label>
        <Form.Control placeholder="Ex: BMW X3.." />
      </Form.Group>

      <Row className="mb-3">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker']}>
        <DatePicker
          defaultValue={dayjs('2022-04-17')}
          views={['year', 'month', 'day']}
          value={dateValue} onChange={(newValue) => setDateValue(newValue)} 
        />
      </DemoContainer>
    </LocalizationProvider>

        <Form.Group controlId="formFileMultiple" className="mb-3 mt-3">
        <Form.Label>Multiple files input example</Form.Label>
        <Form.Control type="file" accept='image/*' multiple onChange={handleFile}/>
      </Form.Group>
      </Row>

      <Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check type="checkbox" label="Is Available" value={available} 
        onChange={handleAvailble}/>
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default GridComplexExample;