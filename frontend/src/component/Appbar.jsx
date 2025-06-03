import axios from "axios";
import { useEffect, useState } from "react"

export const Appbar = () => {
    const [currentUser, setCurrentUser]= useState("user");

    useEffect(()=>{
        axios.get("http://localhost:5000/api/v1/user/current",{
            headers:{
                "Authorization": "Bearer "+ localStorage.getItem("token")
            }
        })
        .then((response)=>{
            setCurrentUser(response.data.firstName);
        })
    })

    return <div className="shadow h-14 flex justify-between">
        <div className="flex flex-col justify-center h-full ml-4">
            PayTM App
        </div>
        <div className="flex">
            <div className="flex flex-col justify-center h-full mr-4">
                Hello , {currentUser}
            </div>
            <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
                <div className="flex flex-col justify-center h-full text-xl">
                    {currentUser[0]}
                </div>
            </div>
        </div>
    </div>
}