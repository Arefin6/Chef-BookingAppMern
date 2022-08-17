/* eslint-disable no-unused-expressions */
/* eslint-disable no-sequences */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { Button, Container, Form} from 'react-bootstrap';
import api from '../api';

const Profile = () => {
     
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [details,setDetails] = useState('');
    

    const userInfo = JSON.parse(sessionStorage.getItem('userInfo'))

    const config = {
      headers:{
         id:userInfo._id,
         Authorization:`Bearer ${userInfo.token}`
      }
  }

    useEffect(()=>{
       api.get('/chef/profile',config)
       .then(res => {setEmail(res.data.email),
                    setName(res.data.name),
                    setDetails(res.data.details)
                  })        
    },[])



    const handelSubmit = async (e) =>{
      e.preventDefault()
       const response = await api.put('/chef/profile',{name,email,details,password},config)
       if(response){
        window.location.reload()
       }
 
    }
    return (
      <Container>
      <h1>Update Profile</h1>
      <Form onSubmit={handelSubmit}>
        <Form.Group controlId="name">
          <Form.Label>Name:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Name"
            value={name}
            required={true}
            onChange={e => setName(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Label>Email Address:</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter Email"
            value={email}
            required={true}
            onChange={e => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Label>Password:</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="details">
          <Form.Label>Bio:</Form.Label>
          <Form.Control
            as="textarea" rows={3}
            placeholder="Enter Bio"
            value={details}
            required={true}
            onChange={e => setDetails(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Button type="submit" variant="dark" className="mt-3">
          Update Profile
        </Button>
      </Form>
    </Container>
    );
};

export default Profile;