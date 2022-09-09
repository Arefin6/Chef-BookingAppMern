/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import { Button, Col, Row, Table } from 'react-bootstrap';
import Moment from 'react-moment';
import moment from 'moment/min/moment-with-locales';
import api from '../api';
import {Link} from 'react-router-dom';

const Slots = () => {
  const [slots,setSlots] = useState([]);
    const userInfo = JSON.parse(sessionStorage.getItem('userInfo'));
    Moment.globalMoment = moment;
    Moment.globalFormat = 'D MMM YYYY';
  const config = {
    headers:{
       id:userInfo._id,
    },
    }
    const fetchSlotData = async() =>{
       const response = await api.get('/slots/getAll',config)
       if(response){
          setSlots(response.data)
       }
       
     }
     const handleDelete = async(id) =>{
       
      const response = await api.delete(`/slots/deleteSlot/${id}`)

      if(response){
        fetchSlotData()
      } 
     }  

     useEffect(()=>{
       fetchSlotData()
     },[]) 
    return (
        <Row>  
            <Col md={10}>
            <Table striped bordered hover responsive className="table-sm mt-5">
                 <thead>
                     <tr>
                         <th>DATE/Day</th> 
                         <th>Start Time</th> 
                         <th>End Time</th> 
                         <th>Edit</th>
                         <th>Delete</th> 
                     </tr>
                 </thead>
                 <tbody>
                     {slots?.map(data => (
                         <tr key ={data._id}>
                           <td>
                             {data.Date ? <Moment>{data.Date}</Moment> : data.Days.join(', ')} 
                           </td>
                           <td>
                             {data.StartTime}
                           </td>
                           <td>
                             {data.EndTime}
                           </td>
                           <td>
                             <Link to={data.Date ? `/slot/edit-by-date/${data._id}`: `/slot/edit-by-day/${data._id}`}>
                               <Button>Edit</Button>
                             </Link>
                           </td>
                           <td>
                            <Button variant='danger' onClick={() => handleDelete(data._id)}>Delete</Button>
                           </td>
                         </tr>
                     ))}
                 </tbody>

             </Table>
            </Col>
        </Row>
    );
};

export default Slots;