import React, { createContext, useState } from 'react';
import { useEffect } from 'react';

 const AuthContext = createContext();

 const AuthProvider = (props) => {
    const [userData,setUserData] = useState({});

    useEffect(()=>{
      const userInfo = JSON.parse(sessionStorage.getItem('userInfo'))
      setUserData(userInfo)
    },[userData])

    const values = {userData}

    // eslint-disable-next-line react/destructuring-assignment
    return (<AuthContext.Provider value={values}>
              {props.children}
        </AuthContext.Provider>);
};


export {AuthContext,AuthProvider}