import React from "react";
import { Form } from "../form/form";
const appUrl = import.meta.env.VITE_API_URL; 
import { request } from "../../config/request";

export const Card = () => {
  const [state, setState] = React.useState([]);

  const fetchData = () => {
    request.get("/posts").then((res)=>{
      setState(res.data)
    })
  }

  React.useEffect(()=>{
    fetchData();
    },[])
  return (
    <div style={{marginLeft:"200px"}}>
      <Form fetchData={fetchData}/>
      {state?.map((el)=>(<li key={el.id}>{el.title}</li>))}
    </div>
  )
  }