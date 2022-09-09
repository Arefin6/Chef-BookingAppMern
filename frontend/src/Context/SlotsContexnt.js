/* eslint-disable no-use-before-define */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { createContext, useState } from 'react';
import { useEffect } from 'react';
import api from './../api/index';

 const SlotContext = createContext();

 const SlotProvider = (props) => {
    const [slots,setSlots] = useState([]);
    const userInfo = JSON.parse(sessionStorage.getItem('userInfo'))

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
       const values = {slots}
    
       useEffect(()=>{
         fetchSlotData()
       },[]) 

    

    // eslint-disable-next-line react/destructuring-assignment
    return (<SlotContext.Provider value={values}>
              {props.children}
        </SlotContext.Provider>);
};


export {SlotContext,SlotProvider}