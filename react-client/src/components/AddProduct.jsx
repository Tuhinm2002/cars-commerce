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

function GridComplexExample() {
  const [dateValue,setDateValue] = useState(null)
  function submitValue(){
    
    try{
    const brand = document.getElementById('formGridBrand')
    const model = document.getElementById('formGridModel')
    const category = document.getElementById('formGridCategory')
    const name = document.getElementById('formGridFullName')
    const available = document.getElementById('formGridCheckbox')
    console.log(dateValue)

    }
    catch{
      console.log("null")
    }

  }

  // submitValue()

  return (
    <Form className='w-25 mt-4' style={{margin:"auto"}}>
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
      <DemoContainer components={['DatePicker']} >
        <DatePicker value={dateValue} onChange={(newValue) => setDateValue(newValue)} label="Basic date picker"/>
      </DemoContainer>
    </LocalizationProvider>

        <Form.Group controlId="formFileMultiple" className="mb-3 mt-3">
        <Form.Label>Multiple files input example</Form.Label>
        <Form.Control type="file" multiple />
      </Form.Group>
      </Row>

      <Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check type="checkbox" label="Is Available" />
      </Form.Group>

      <Button variant="primary" type="submit" onClick={submitValue()} >
        Submit
      </Button>
    </Form>
  );
}

export default GridComplexExample;