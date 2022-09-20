/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { Col, Row, Table } from 'react-bootstrap';
import Moment from 'react-moment';
import moment from 'moment/min/moment-with-locales';
import api from '../api';
import { Button } from 'react-bootstrap';

const Bookings = () => {

   const  [booingInfo,setBookingInfo] = useState([])

   Moment.globalMoment = moment;
   Moment.globalFormat = 'D MMM YYYY';

   const userInfo = JSON.parse(sessionStorage.getItem('userInfo'))

    const config = {
      headers:{
         id:userInfo._id,
      }
    }

  useEffect(()=>{
    api.get('booking/getAll',config)
    .then(res => setBookingInfo(res.data))        
 },[])

  const handleApprove = async(id) =>{
     const response = await api.put(`booking/update/booking/${id}`,config)
     if(response){
      window.location.reload()
     }

  }


    return (
        <Row>  
        <Col md={10}>
        <Table striped bordered hover responsive className="table-sm mt-5">
             <thead>
                 <tr>
                     <th>Customer Email</th> 
                     <th>Slot DATE/Day</th> 
                     <th>Start Time</th> 
                     <th>End Time</th> 
                     <th>Status</th>
                 </tr>
             </thead>
             <tbody>
                 {booingInfo?.map(data => (
                     <tr key ={data._id}>
                      <td>
                         {data.customerEmail} 
                       </td>
                       <td>
                         {data.slot.Date ? <Moment>{data.slot.Date}</Moment> : data.slot.Days.join(', ')} 
                       </td>
                       <td>
                         {data.slot.StartTime}
                       </td>
                       <td>
                         {data.slot.EndTime}
                       </td>
                        <td>
                          {data.isApproved ? "Approved":<Button variant='success' onClick={() => handleApprove(data._id)} >Approve</Button>}
                       </td>
                      
                     </tr>
                 ))}
             </tbody>

         </Table>
        </Col>
    </Row>
);
};

export default Bookings;