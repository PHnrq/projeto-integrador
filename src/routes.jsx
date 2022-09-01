import {
  BrowserRouter,
  Route,
  Routes,
  Outlet,
  Navigate
} from "react-router-dom";
import{ useState } from 'react'

import {DashboardDoador} from "../src/pages/DashboardDoador"
import {DashboardOng} from "../src/pages/DashboardONG"
import {Home} from "../src/pages/Home"
import {Login} from "../src/pages/Login"

function ProtectRoute({redirectTo}){
  const token = localStorage.getItem('token');
  return token? <Outlet/> : <Navigate to={redirectTo} />
}

export function MainRoutes(){
  const [currentUser, setCurrentUser] = useState({
    name: '',
    email: "",
    tel: "",
    password: "",
    cep: "",
    street: "",
    number: "",
    district: "",
    complement: "",
    city: "",
    uf: "",
    type: "",
  });

  function handleCurrentUser(user){
    setCurrentUser(user)
  }


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/login' element={<Login handleCurrentUser={handleCurrentUser}/>} />
        {/* <Route element={<ProtectRoute redirectTo={'/login'} />}> */}
        <Route 
          path='/dashboard' 
          element={currentUser.type === 'Doador'? <DashboardDoador currentUser={currentUser}/> : <DashboardOng currentUser={currentUser}/> }
        />
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
  )
}