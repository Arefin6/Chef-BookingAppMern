/* eslint-disable no-unused-vars */

const useAuth = () =>{

  let auth = false

  const userInfo = sessionStorage.getItem('userInfo');
  
   if(userInfo){
       auth = true
   }
   else{
       auth = false
   }

  return auth

}


export default useAuth;