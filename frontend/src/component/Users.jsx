import { useEffect, useState } from "react"
import { Button } from "./Button"
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Users = () => {
    // Replace with backend call
    const [users, setUsers] = useState([]);
    const [filter,setFilter] = useState("");
    const [currentUser, setCurrentUser]= useState();
  

    useEffect(() => {
        const token = localStorage.getItem("token");
       
    
        // First get the current user, then get the filtered users
        const fetchData = async () => {
          try {
            const currentUserResponse = await axios.get("https://paytm-clone-oerj.onrender.com/api/v1/user/current", {
              headers: {
                "Authorization": "Bearer " + token,
              },
            });
    
            const current = currentUserResponse.data;
            setCurrentUser(current);
    
            const usersResponse = await axios.get(`https://paytm-clone-oerj.onrender.com/api/v1/user/bulk?filter=${filter}`, {
              headers: {
                "Authorization": "Bearer " + token,
              },
            });
    
            // Filter out the current user from the users list
            const filteredUsers = usersResponse.data.user.filter(user => user._id !== current._id);
            setUsers(filteredUsers);
    
          } catch (error) {
            console.error("Error fetching users:", error);
          }
        };
    
        fetchData();
      }, [filter]);
   

    return <>
        <div className="font-bold mt-6 text-lg">
            Users
        </div>
        <div className="my-2">
            <input type="text" placeholder="Search users..." className="w-full px-2 py-1 border rounded border-slate-200"></input>
        </div>
        <div>
            {users.map(user => <User user={user} />)}
        </div>
    </>
}

function User({user}) {
    const navigate= useNavigate();

    return <div className="flex justify-between">
        <div className="flex">
            <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
                <div className="flex flex-col justify-center h-full text-xl">
                    {user.firstName[0]}
                </div>
            </div>
            <div className="flex flex-col justify-center h-ful">
                <div>
                    {user.firstName} {user.lastName}
                </div>
            </div>
        </div>

        <div className="flex flex-col justify-center h-ful">
            <Button onClick={(e) => {
                navigate("/send?id=" + user._id + "&name=" + user.firstName);
            }} label={"Send Money"} />
        </div>
    </div>
}