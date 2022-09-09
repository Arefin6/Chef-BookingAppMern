/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import Moment from 'react-moment';
import moment from 'moment/min/moment-with-locales';
import { useNavigate, useParams } from 'react-router-dom';
import api from '../api';

const EditSlotByDate = () => {
    const [date,setDate] = useState();
    const [startTime,setStartTime] = useState();
    const [endTime,setEndTime] = useState();
    const history = useNavigate();
    const {id} = useParams()

    Moment.globalMoment = moment;
    Moment.globalFormat = "yyyy-MM-dd";


    const config = {
        headers:{
           id
        },
    }    

    const getSingleSlot = async ()=>{
        const result =  await api.get('/slots/getSlot',config)
        setDate(result.data.Date)
        setStartTime(result.data.StartTime)
        setEndTime(result.data.EndTime)

    }

     useEffect(()=>{
        getSingleSlot()
     },[])

     const defaultDate = date?.split('T')[0]

    const submitHandler = async(e) =>{
        e.preventDefault()
        try {
            const result =  await api.put('/slots/updateSlot',{Date:date,StartTime:startTime, EndTime:endTime},config)
             if(result){
              history('/slots')
             }
           } catch (error) {
               console.log(error)
           } 
    }
    return (
        <Row>
                <Col md={10} className="mt-4">
                    <Form onSubmit={submitHandler}>
                    <Form.Group controlId="date">
                        <Form.Label>Date:</Form.Label>
                        <Form.Control type="date" placeholder="Enter Date"
                        defaultValue={defaultDate}
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

export default EditSlotByDate;