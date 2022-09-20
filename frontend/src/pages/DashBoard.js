/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import api from '../api';

const DashBoard = () => {

    const [counts,setCounts] = useState({})
    const [slotsCount,setSlotCount] = useState(0)
    const [bookingCount,setBookingCount] = useState(0)
    const [approvedBookingCount,setApprovedBookingCount] = useState(0)        
    const userInfo = JSON.parse(sessionStorage.getItem('userInfo'));
    const config = {
      headers:{
         id:userInfo._id,
      },
      }
      const fetchSlotData = async() =>{
         const response = await api.get('/slots/getAll',config)
         if(response){
            setSlotCount(response.data?.length)
         }
         
       }

      const  fetchBooingData = async() =>{

        const response = await api.get('/booking/getAll',config)
         if(response){
             const filterByBooking = response.data.filter(data => data.isApproved === true)
            setBookingCount(response.data?.length)
            setApprovedBookingCount(filterByBooking?.length)
         }

      }

    useEffect(()=>{
        const fetchCount = async() =>{
        const response = await api.get('/count');
        setCounts(response.data);
       }
       fetchCount()
       fetchSlotData()
       fetchBooingData()
    },[])



    return (
        <Row>
            <Col md={2} className="my-4 p-4">
                <Card>
                  <Card.Body>
                    <Card.Title className='text-primary'>Num of Slots</Card.Title>
                    <Card.Text className='text-primary'>
                       {slotsCount}
                   </Card.Text>
                  </Card.Body>
                </Card>
            </Col>
            <Col md={2} className="my-4 p-4">
                <Card>
                  <Card.Body>
                    <Card.Title className='text-secondary'>Num of Booking</Card.Title>
                    <Card.Text className='text-secondary'>
                      {bookingCount}
                   </Card.Text>
                  </Card.Body>
                </Card>
            </Col>
            <Col md={2} className="my-4 p-4">
                <Card>
                  <Card.Body>
                    <Card.Title className='text-danger'>Num of Customers</Card.Title>
                    <Card.Text className='text-danger'>
                       {counts?.customersCount}
                   </Card.Text>
                  </Card.Body>
                </Card>
            </Col>
            <Col md={2} className="my-4 p-4">
                <Card>
                  <Card.Body>
                    <Card.Title className='text-success'>Number of Approved Booking</Card.Title>
                    <Card.Text className='text-success'>
                       {approvedBookingCount}
                   </Card.Text>
                  </Card.Body>
                </Card>
            </Col>
        </Row>
    );
};

export default DashBoard;