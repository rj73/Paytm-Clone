import { useEffect, useState } from "react";
import { BottomWarning } from "../component/BottomWarning";
import { Button } from "../component/Button";
import { Heading } from "../component/Heading";
import { InputBox } from "../component/InputBox";
import { SubHeading } from "../component/SubHeading";
import axios from 'axios';
import { Navigate, useNavigate } from "react-router-dom";

export function SignupComponent(){
    const [username, setUserName]= useState("");
    const [password, setPassword]= useState("");
    const [firstName, setFirstName]= useState("");
    const [lastName, setLastName]= useState("");
    const navigate= useNavigate()

     useEffect(() => {
            if (localStorage.getItem("token")) {
              navigate("/dashboard");
            }
          }, []); 


    function submit(){
      axios.post("https://paytm-clone-oerj.onrender.com/api/v1/user/signup",{
        userName: username,
        password,
        firstName,
        lastName
      }).then((resp)=>{
        if(resp.data){
          localStorage.setItem("token", resp.data.token)
          navigate('/dashboard');
        }
      })
    }



    return <div className="bg-slate-300 h-screen flex justify-center">
    <div className="flex flex-col justify-center">
      <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
        <Heading label={"Sign up"} />
        <SubHeading label={"Enter your infromation to create an account"} />
        <InputBox onChange={(e)=>{
          setFirstName(e.target.value);
        }} placeholder="John" label={"First Name"} />
        <InputBox onChange={(e)=>{
          setLastName(e.target.value);
        }} placeholder="Doe" label={"Last Name"} />
        <InputBox onChange={(e)=>{
          setUserName(e.target.value);
        }} placeholder="jd73" label={"Username"} />
        <InputBox onChange={(e)=>{
          setPassword(e.target.value);
        }} placeholder="123456" label={"Password"} />
        <div className="pt-4">
          <Button onClick={submit} label={"Sign up"} />
        </div>
        <BottomWarning label={"Already have an account?"} buttonText={"Sign in"} to={"/signin"} />
      </div>
    </div>
  </div>
}