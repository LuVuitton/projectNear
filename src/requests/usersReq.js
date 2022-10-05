import axios from "axios";
import { useEffect, useState } from "react";

const UsersReq=()=>{

const url = `https://social-network.samuraijs.com/api/1.0/users`;

const [apiUsers, setApiUsers] = useState();

useEffect(() => {
  axios.get(url).then((res) => {
    setApiUsers({
  users: res.data.items
    });
  });
}, []);

return apiUsers;
}

export default UsersReq;