import React from 'react';
import { Col, Row, Table } from 'react-bootstrap';

const Bookings = () => {
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
                 {/* {slots?.map(data => (
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
                 ))} */}
             </tbody>

         </Table>
        </Col>
    </Row>
);
};

export default Bookings;