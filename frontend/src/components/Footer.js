import React from 'react';
import { Col, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer>
               <Row>
                  <Col className="text-center py-3 bg-dark text-white">
                    Copyright  &copy; ChefHouse
                  </Col> 
               </Row>
        </footer>
    );
};

export default Footer;