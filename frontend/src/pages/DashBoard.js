import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import Sidebar from '../components/Sidebar';
import api from '../api';

const DashBoard = () => {

    const [counts,setCounts] = useState({})  

    useEffect(()=>{
        const fetchCount = async() =>{
        const response = await api.get('/count');
        setCounts(response.data);
       }
       fetchCount()
    },[])


    return (
        <Row>
            <Col md={2}>
              <Sidebar/>
            </Col>
            <Col md={2} className="my-4 p-4">
                <Card>
                  <Card.Body>
                    <Card.Title className='text-primary'>Num of Chefs</Card.Title>
                    <Card.Text className='text-primary'>
                       {counts.chefCount}
                   </Card.Text>
                  </Card.Body>
                </Card>
            </Col>
            <Col md={2} className="my-4 p-4">
                <Card>
                  <Card.Body>
                    <Card.Title className='text-secondary'>Num of Slots </Card.Title>
                    <Card.Text className='text-secondary'>
                      {counts.slotsCount}
                   </Card.Text>
                  </Card.Body>
                </Card>
            </Col>
            <Col md={2} className="my-4 p-4">
                <Card>
                  <Card.Body>
                    <Card.Title className='text-danger'>Num of Customers</Card.Title>
                    <Card.Text className='text-danger'>
                       0
                   </Card.Text>
                  </Card.Body>
                </Card>
            </Col>
            <Col md={2} className="my-4 p-4">
                <Card>
                  <Card.Body>
                    <Card.Title className='text-warning'>Number of Bookings </Card.Title>
                    <Card.Text className='text-warning'>
                       {counts.BookingsCount}
                   </Card.Text>
                  </Card.Body>
                </Card>
            </Col>
        </Row>
    );
};

export default DashBoard;