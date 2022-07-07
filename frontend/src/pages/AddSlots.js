import React, { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import api from '../api';
import Sidebar from '../components/Sidebar';

const AddSlots = () => {

    const [date,setDate] = useState();
    const [time,setTime] = useState();
    const history = useNavigate();
    const userInfo = JSON.parse(sessionStorage.getItem('userInfo'))

    const submitHandler = async(e) =>{
        e.preventDefault()
        try {
            const result =  await api.post('/slots/addSlot',{Date:date,Time:time,chef:userInfo._id})
             if(result){
              history('/slots')
             }
           } catch (error) {
               console.log(error)
           } 
    }
    return (
        <Row>
          <Col md={2}>
            <Sidebar/>
          </Col>  
                <Col md={10}>
                <h1 className='mt-5 mb-3'>Add A Slot</h1>
                <Form onSubmit={submitHandler}>
                <Form.Group controlId="date">
                    <Form.Label>Date:</Form.Label>
                    <Form.Control type="date" data-date-format="YYYY  MMMM DD" placeholder="Enter Date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required={true}
                    ></Form.Control>
                </Form.Group>
                <Form.Group controlId="time">
                    <Form.Label>Time:</Form.Label>
                    <Form.Control type="text" placeholder="10AM-6PM"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    required={true}
                    ></Form.Control>
                </Form.Group>
                <Button type="submit" variant="dark" className='mt-3'>
                    Submit
                </Button>
                </Form>
                </Col>
        </Row>
    );
};

export default AddSlots;