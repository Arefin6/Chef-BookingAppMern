import React, { useContext } from 'react';
import { Col, Row, Table } from 'react-bootstrap';
import Sidebar from '../components/Sidebar';
import { SlotContext } from '../Context/SlotsContexnt';

const Slots = () => {
    const {slots} = useContext(SlotContext);
    const {data} = slots
    return (
        <Row>
          <Col md={2}>
            <Sidebar/>
          </Col>  
            <Col md={10}>
            <Table striped bordered hover responsive className="table-sm mt-5">
                 <thead>
                     <tr>
                         <th>ID</th>
                         <th>DATE</th> 
                         <th>Time</th> 
                     </tr>
                 </thead>
                 <tbody>
                     {data?.map(data => (

                         <tr key ={data._id}>
                            
                            <td>
                             {data._id}
                           </td>
                           <td>
                             {data.Date.substring(0,15)} 
                           </td>
                           <td>
                             {data.Time}
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