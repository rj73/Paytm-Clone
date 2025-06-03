import { useState } from 'react'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css'
import { SignupComponent } from './pages/SignupComponent'
import { Signin } from './pages/Signin'
import { SendMoney } from './pages/SendMoney'
import { Dashboard } from './pages/Dashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <BrowserRouter>
    <Routes>
      <Route path='/signup' element={<SignupComponent></SignupComponent>}></Route>
      <Route path='/signin' element={<Signin></Signin>}></Route>
      <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
      <Route path='/send' element={<SendMoney></SendMoney>}></Route>
    </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
