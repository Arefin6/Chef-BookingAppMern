import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import Sidebar from '../components/Sidebar';

const DashBoard = () => {
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
                       0
                   </Card.Text>
                  </Card.Body>
                </Card>
            </Col>
            <Col md={2} className="my-4 p-4">
                <Card>
                  <Card.Body>
                    <Card.Title className='text-secondary'>Num of Slots </Card.Title>
                    <Card.Text className='text-secondary'>
                       0
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
                       0
                   </Card.Text>
                  </Card.Body>
                </Card>
            </Col>
        </Row>
    );
};

export default DashBoard;