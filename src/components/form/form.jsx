import React from "react";
import { request } from "../../config/request";

export const Form = ({fetchData}) => {
  const [val, setVal] = React.useState("")
  const submit = (e)=>{
    e.preventDefault();
    request
      .post("/posts",{title:val})
      .then((res)=>{
        fetchData();
      })
      .catch((error)=>{
        console.log(error);
      })
      .finally(()=>{
        setVal("");
      })
  }
  return (
    <form onSubmit={submit}>
      <input type="text" value={val} onChange={(e)=>setVal(e.target.value)}/>
      <button type="submit">send</button>
    </form>
  )
}