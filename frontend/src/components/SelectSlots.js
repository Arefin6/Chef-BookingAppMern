import React from 'react';
import { Dropdown } from 'react-bootstrap';

const SelectSlots = () => {
    return (
        <>
          <div className='d-flex justify-content-between'>
                   <h1 className='mt-5 mb-3'>Add A Slot</h1>
                   <Dropdown className='mt-5'>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            Select Option
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="/add-slots-date">Slot By Date</Dropdown.Item>
                            <Dropdown.Item href="/add-slots-day">Slot By Day</Dropdown.Item>
                        </Dropdown.Menu>
                  </Dropdown>
            </div>    
        </>
    );
};

export default SelectSlots;