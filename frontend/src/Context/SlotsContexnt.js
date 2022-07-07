/* eslint-disable react-hooks/exhaustive-deps */
import React, { createContext, useState } from 'react';
import { useEffect } from 'react';
import axios from './../api/index';

 const SlotContext = createContext();

 const SlotProvider = (props) => {
    const [slots,setSlots] = useState([]);
    const userInfo = JSON.parse(sessionStorage.getItem('userInfo'))

    const config = {
      headers:{
         id:userInfo._id
      }
  }

    useEffect(()=>{
       axios.get('/slots/getAll',config)
       .then(res => setSlots(res))
    },[slots,config])

    const values = {slots}

    // eslint-disable-next-line react/destructuring-assignment
    return (<SlotContext.Provider value={values}>
              {props.children}
        </SlotContext.Provider>);
};


export {SlotContext,SlotProvider}