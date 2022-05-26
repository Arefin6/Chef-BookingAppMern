import React, {useState} from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import {Link, useNavigate} from 'react-router-dom';
import api from '../api';


const Login = () => {
     const [email,setEmail] = useState('')
     const [password,setPassword] = useState('')
     const history = useNavigate();

     const submitHandler = async (e)=>{
        e.preventDefault()
         try {
          const result =  await api.post('/api/chef/signIn',{email,password})

           if(result){
            sessionStorage.setItem('userInfo',JSON.stringify(result.data))
            history('/dashboard')
           }

         } catch (error) {
             console.log(error)
         } 
        
        
      } 
    return (
        <Container>
            <h1>Sign In</h1>
            <Form onSubmit={submitHandler}>
               <Form.Group controlId="email">
                   <Form.Label>Email Address:</Form.Label>
                   <Form.Control type="email" placeholder="Enter Email"
                   value={email}
                   onChange={(e) => setEmail(e.target.value)}
                   required={true}
                   ></Form.Control>

               </Form.Group>
               <Form.Group controlId="password">
                   <Form.Label>Password:</Form.Label>
                   <Form.Control type="password" placeholder="Enter Password"
                   value={password}
                   onChange={(e) => setPassword(e.target.value)}
                   required={true}
                   ></Form.Control>

               </Form.Group>
               <Button type="submit" variant="dark" className='mt-3'>
                   Sign In
               </Button>
            </Form>
             <Row className="py-3">
                 <Col>
                  New Customer?{' '}
                    <Link to='/register'>Register</Link>
                 </Col>
             </Row>
        </Container>
    );
};

export default Login;