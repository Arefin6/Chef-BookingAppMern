import React, { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import api from '../api';
import SelectSlots from '../components/SelectSlots';

const AddSlots = () => {

    const [date,setDate] = useState();
    const [startTime,setStartTime] = useState();
    const [endTime,setEndTime] = useState();
    const history = useNavigate();
    const userInfo = JSON.parse(sessionStorage.getItem('userInfo'))

    const submitHandler = async(e) =>{
        e.preventDefault()
        try {
            const result =  await api.post('/slots/addSlot',{Date:date, StartTime:startTime, EndTime:endTime,chef:userInfo._id})
             if(result){
              history('/slots')
             }
           } catch (error) {
               console.log(error)
           } 
    }
    return (
        <Row>
                <Col md={10}>
                  <SelectSlots/>  
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
                    <Form.Label>StartTime:</Form.Label>
                    <Form.Control type="text" placeholder="9AM"
                    value={startTime}
                    onChange={(e) => setStartTime(e.target.value)}
                    required={true}
                    ></Form.Control>
                </Form.Group>
                <Form.Group controlId="time">
                    <Form.Label>EndTime:</Form.Label>
                    <Form.Control type="text" placeholder="9AM"
                    value={endTime}
                    onChange={(e) => setEndTime(e.target.value)}
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