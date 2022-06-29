import React, { createContext, useState } from 'react';
import { useEffect } from 'react';
import axios from './../api/index';

 const SlotContext = createContext();

 const SlotProvider = (props) => {
    const [slots,setSlots] = useState([]);

    useEffect(()=>{
       axios.get('/slots/getAll')
       .then(res => setSlots(res))
    },[slots])

    const values = {slots}

    // eslint-disable-next-line react/destructuring-assignment
    return (<SlotContext.Provider value={values}>
              {props.children}
        </SlotContext.Provider>);
};


export {SlotContext,SlotProvider}