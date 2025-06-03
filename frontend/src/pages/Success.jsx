import { useNavigate } from "react-router-dom"

export function Success(){
    const navigate= useNavigate();

    return <div className="flex justify-center items-center w-screen h-screen">
        <div className="flex flex-col">
        <div className="bg-green-500 text-red-100 p-10 border-4 border-red-100 rounded-lg">
        Transaction Successfully completed!!
    </div>
  
    <button onClick={()=>{
            navigate('/dashboard')
        }} type="button" class="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Go to Dashboard</button>


   
        </div>
        </div>
}