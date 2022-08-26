/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import api from '../api';
import SelectSlots from '../components/SelectSlots';
import Checkbox from './../components/Checkbox';

const AddSlotsBYDay = () => {
     
    const items = [
        'Saturday',
        'SunDay',
        'MonDay',
        'ThusDay',
        'Wednesday',
        'Thursday',
        'FriDay' 
    ];
    let selectedCheckboxes =  new Set([])

    const [startTime,setStartTime] = useState();
    const [endTime,setEndTime] = useState();
    const history = useNavigate();
    const userInfo = JSON.parse(sessionStorage.getItem('userInfo'))

    const toggleCheckbox = label => {
 
        if (selectedCheckboxes.has(label)) {
          selectedCheckboxes.delete(label);
        } else {
            selectedCheckboxes.add(label);
        }
    }

    const createCheckbox = label => {
        return(
            <Checkbox
                label={label}
                handleCheckboxChange={toggleCheckbox}
                key={label}
            />  
        )
    }

     const createCheckboxes = () => {
        return(
            items.map(item =>createCheckbox(item))
        )
     }
        

    const submitHandler = async(e) =>{
        e.preventDefault() 
         console.log(selectedCheckboxes,startTime,endTime);

        // try {
        //     const result =  await api.post('/slots/addSlot',{Date:date, StartTime:startTime, EndTime:endTime,chef:userInfo._id})
        //      if(result){
        //       history('/slots')
        //      }
        //    } catch (error) {
        //        console.log(error)
        //    } 
    }
    return (
        <Row>
                <Col md={10}>
                 <SelectSlots/>
                <Form onSubmit={submitHandler}>
                 <Form.Group>
                    <div className="d-flex justify-content-between mb-3">
                     {createCheckboxes()}
                    </div>
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
                <Button type="submit" variant="dark"  className='mt-3'>
                    Submit
                </Button>
                </Form>
                </Col>
        </Row>
    );
};

export default AddSlotsBYDay;