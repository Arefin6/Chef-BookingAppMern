import React, { useContext } from 'react';
import { Col, Row, Table } from 'react-bootstrap';
import { SlotContext } from '../Context/SlotsContexnt';

const Slots = () => {
    const {slots} = useContext(SlotContext);
    const {data} = slots
    return (
        <Row>  
            <Col md={10}>
            <Table striped bordered hover responsive className="table-sm mt-5">
                 <thead>
                     <tr>
                         <th>DATE</th> 
                         <th>Start Time</th> 
                         <th>End Time</th> 
                     </tr>
                 </thead>
                 <tbody>
                     {data?.map(data => (

                         <tr key ={data._id}>
                           <td>
                             {data.Date} 
                           </td>
                           <td>
                             {data.StartTime}
                           </td>
                           <td>
                             {data.EndTime}
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