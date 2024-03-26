import axios from "axios";
  const user={
    "username": "tester",
    "password": "NP@ss1234"
  }
  let authToken ='';
  export const login_user =axios.post("https://staging.api.hr-portals.com/api/v1/Auth/login",user).then(response=>{
    console.log(response.data.data.accessToken);
    authToken=response.data.data.accessToken;
  }).catch(error=>{
    console.error(error);
  });
export const log_out =login_user.then(()=>{ axios.post("https://staging.api.hr-portals.com/api/v1/Auth/logout",null,{headers: {
    
'Content-Type': "application/json",
    'Authorization': `Bearer ${authToken}`
  }}).then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  })
});