import { useRef,useState } from "react";
import"./start.css"

export default function Start({ setUsername }) {
  const [user,setuser]=useState({
    username:"",
    email:"",
    phone:"",
    password:""
})
  const inputRef = useRef();

  const handleClick =async () => {

    // const response= await fetch(`http://localhost:5000/api/login`,{
    //   method:"POST",
    //   headers:{
    //     "Content-Type":"application/json"
    //   },
    //   body:JSON.stringify(user),
    // });

    inputRef.current.value && setUsername(inputRef.current.value);
  };
  

  return (
    <>
    <div className="maindiv"> <div className="header"><h1>THE MILLIONAIRE GAME</h1></div>
    <div className="start">
      <input
        className="startInput"
        placeholder="Enter Name"
        ref={inputRef}
      />
      <button className="startButton" onClick={handleClick}>
        Start
      </button>
    </div></div>
   
    </>
  );
}