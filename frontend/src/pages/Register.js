import React, {useState} from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import {Link} from 'react-router-dom';
// import FormContainer from '../../FormContainer/FormContainer';


const Register = () => {
     const [name, setName] = useState('')
     const [email,setEmail] = useState('')
    //  const [image,setImage] = useState('')
     const [password,setPassword] = useState('')
    return (
        <Container>
            <h1>Sign Up</h1>
            {/* {error && <Message variant="danger">{error}</Message>}
            {loading && <Loader></Loader>} */}
            <Form>
                <Form.Group controlId="name">
                    <Form.Label>Name:</Form.Label>
                    <Form.Control type="text" placeholder="Enter Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    ></Form.Control>

                </Form.Group>
               <Form.Group controlId="email">
                   <Form.Label>Email Address:</Form.Label>
                   <Form.Control type="email" placeholder="Enter Email"
                   value={email}
                   onChange={(e) => setEmail(e.target.value)}
                   ></Form.Control>

               </Form.Group>
               <Form.Group controlId="image">
                   <Form.Label> Profile Picture:</Form.Label>
                   <Form.Control type="file" placeholder="Enter Email"
                   value={email}
                   onChange={(e) => setEmail(e.target.value)}
                   ></Form.Control>
                   {/* <Form.File
                   type="file"
                   value={image}
                   id='image-file'
                   label='choose File'
                   name='image'
                //    onChange={handleFileUpload}
                  >
                  </Form.File>  */}

               </Form.Group>
               <Form.Group controlId="password">
                   <Form.Label>Password:</Form.Label>
                   <Form.Control type="password" placeholder="Enter Password"
                   value={password}
                   onChange={(e) => setPassword(e.target.value)}
                   ></Form.Control>

               </Form.Group>
               <Button type="submit" variant="dark" className='mt-3'>
                   Sign Up
               </Button>
            </Form>
             <Row className="py-3">
                 <Col>
                  All Ready Have Account?{' '}
                    <Link to='/'>Login</Link>
                 </Col>
             </Row>
        </Container>
    );
};

export default Register;