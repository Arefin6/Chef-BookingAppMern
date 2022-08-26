import React, { useState } from 'react';

const Checkbox = ({handleCheckboxChange, label}) => {
    const [isChecked, setIsChecked] = useState(false)
    const toggleCheckboxChange = () => {
    
         setIsChecked(!isChecked)
        handleCheckboxChange(label);
      }
    return (
        <div className="checkbox">
        <input
              className='mr-4'
              type="checkbox"
              value={label}
              checked={isChecked}
              onChange={toggleCheckboxChange}
           />
           <label> 
          {label}
        </label>
      </div>
    );
};

export default Checkbox;