import { useState } from "react";
import Button from "../components/Button.jsx";
import {
  getCommonUserContent,
  getAdminContent,
} from "../api/user-content-api.js";

function UserCenter() {
  const [response, setResponse] = useState();

  const onCommonUserClick = () => {
   
    getCommonUserContent().then(res =>{
        console.log("get common",res);
        setResponse(res)
    })
  };

  const onAdminUserClick = () => {
   
    getAdminContent().then(res =>{
        console.log("get admin",res);
        setResponse(res)
    }).catch(err =>{
      setResponse(err)
    })
  };
  return (
    <>
      <div className="font-bold text-lg mt-10 mb-3">This is User Center</div>
      <Button type="primary" onClick={onCommonUserClick}>
        Get Common User Content
      </Button>
      <span className="ml-3">
        <Button type="primary" onClick={onAdminUserClick}>
          Get Admin User Content
        </Button>
      </span>
      <div className="mt-4">{JSON.stringify(response)}</div>
    </>
  );
}

export default UserCenter;
