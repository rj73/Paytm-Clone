import { useEffect, useState } from "react"
import { Appbar } from "../component/Appbar"
import { Balance } from "../component/Balance"
import { Users } from "../component/Users"
import axios from "axios"
import { useNavigate } from "react-router-dom"

export const Dashboard = () => {
    const [balance, setBalance]=useState("");
    const navigate= useNavigate();

    
 
    useEffect(() => {
        if (!localStorage.getItem("token")) {
          navigate("/signin");
        }
      }, []); 

    useEffect(()=>{
        axios.get("http://localhost:5000/api/v1/account/balance",{
            headers:{
                "Authorization": "Bearer "+localStorage.getItem("token")
            }
        })
        .then((res)=>{
            setBalance(res.data.balance);
        })
    }, [])
    return <div>
        <Appbar />
        <div className="m-8">
            <Balance value={balance} />
            <Users />
        </div>
    </div>
}