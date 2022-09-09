/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import api from "../api";
import Checkbox from "../components/Checkbox";

const EditSlotByDay = () => {
  const items = [
    "Saturday",
    "SunDay",
    "MonDay",
    "ThusDay",
    "Wednesday",
    "Thursday",
    "FriDay",
  ];
  const [selectedCheckboxes, setSelectedCheckboxes] = useState(new Set());
  const [selectedDays, setSelectedDays] = useState([]);

  const [startTime, setStartTime] = useState();
  const [endTime, setEndTime] = useState();
  const history = useNavigate();
  const {id} = useParams()

  const config = {
    headers:{
       id
    },
}  


  const getSingleSlot = async ()=>{
    const result =  await api.get('/slots/getSlot',config)
    setSelectedDays(result.data.Days)
    setStartTime(result.data.StartTime)
    setEndTime(result.data.EndTime)
  }


  useEffect(()=>{
    getSingleSlot()
  },[])

  const toggleCheckbox = (label) => {
    if (selectedCheckboxes.has(label)) {
      setSelectedCheckboxes(selectedCheckboxes.delete(label));
    } else {
      selectedCheckboxes(selectedCheckboxes.add(label));
    }
  };

  const createCheckbox = (label) => {
    return (
      <Checkbox
        label={label}
        handleCheckboxChange={toggleCheckbox}
        key={label}
        checked={selectedDays}
      />
    );
  };

  const createCheckboxes = () => {
    return items.map((item) => createCheckbox(item));
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const result =  await api.put('/slots/updateSlot',{Days:[...selectedCheckboxes],StartTime:startTime, EndTime:endTime},config)
       if(result){
        history('/slots')
       }
     } catch (error) {
         console.log(error)
     } 
  };
  return (
    <Row>
      <Col md={10}>
        <Form onSubmit={submitHandler}>
          <Form.Group>
            <div className="d-flex justify-content-between mb-3 mt-4">
              {createCheckboxes()}
            </div>
          </Form.Group>
          <Form.Group controlId="time">
            <Form.Label>StartTime:</Form.Label>
            <Form.Control
              type="text"
              placeholder="9AM"
              defaultValue={startTime}
              onChange={(e) => setStartTime(e.target.value)}
              required={true}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="time">
            <Form.Label>EndTime:</Form.Label>
            <Form.Control
              type="text"
              placeholder="9AM"
              defaultValue={endTime}
              onChange={(e) => setEndTime(e.target.value)}
              required={true}
            ></Form.Control>
          </Form.Group>
          <Button type="submit" variant="dark" className="mt-3">
            Submit
          </Button>
        </Form>
      </Col>
    </Row>
  );
};

export default EditSlotByDay;
