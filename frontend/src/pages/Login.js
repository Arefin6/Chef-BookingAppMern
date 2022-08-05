import React, {useState} from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import {Link, useNavigate} from 'react-router-dom';
import api from '../api';
import Message from '../components/Message';


const Login = () => {
     const [email,setEmail] = useState('')
     const [password,setPassword] = useState('')
     const [error, setError] = useState("");
     const history = useNavigate();

     const submitHandler = async (e)=>{
        e.preventDefault()
         try {
          const result =  await api.post('/chef/signIn',{email,password})

           if(result){
            await sessionStorage.setItem('userInfo',JSON.stringify(result.data))
            history('/dashboard')
            window.location.reload()
           }
         } catch (error) {
             setError(error.response.data.message)
             console.log(error)
         } 
        
      } 
    return (
        <Container>
            <h1>Sign In</h1>
            {error && <Message>{error}</Message>}
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
               <div className='d-flex justify-content-between mt-3'>
                <Button type="submit" variant="dark">
                    Sign In
                </Button>
                <Link to="/forgetPassword">Forgot Password</Link>
                </div>    
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