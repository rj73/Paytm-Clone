import { useEffect, useState } from "react"
import { BottomWarning } from "../component/BottomWarning"
import { Button } from "../component/Button"
import { Heading } from "../component/Heading"
import { InputBox } from "../component/InputBox"
import { SubHeading } from "../component/SubHeading"
import axios from "axios"
import { useNavigate } from "react-router-dom"

export const Signin = () => {
  const [username, setUserName]= useState('');
  const [password,setPassword]= useState('');
  const navigate= useNavigate();

    useEffect(() => {
              if (localStorage.getItem("token")) {
                navigate("/dashboard");
              }
            }, []); 


    return <div className="bg-slate-300 h-screen flex justify-center">
    <div className="flex flex-col justify-center">
      <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
        <Heading label={"Sign in"} />
        <SubHeading label={"Enter your credentials to access your account"} />
        <InputBox onChange={(e)=>{
          setUserName(e.target.value);
        }} placeholder="johnDoe73" label={"Username"} />
        <InputBox onChange={(e)=>{
          setPassword(e.target.value);
        }} placeholder="123456" label={"Password"} />
        <div className="pt-4">
          <Button onClick={()=>{
            axios.post("https://paytm-clone-oerj.onrender.com/api/v1/user/signin",{
              userName: username,
              password
            })
            .then((res)=>{
              localStorage.setItem("token", res.data.token);
              navigate('/dashboard');
            })
          }} label={"Sign in"} />
        </div>
        <BottomWarning label={"Don't have an account?"} buttonText={"Sign up"} to={"/signup"} />
      </div>
    </div>
  </div>
}