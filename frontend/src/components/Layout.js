import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

const Layout = () => {
    return (
        <Row>
            <Col md={2}>
             <Sidebar></Sidebar>
            </Col>
            <Col >
             <Outlet /> 
            </Col>    
        </Row>
    );
};

export default Layout;