import {
  BrowserRouter,
  Route,
  Routes,
  Outlet,
  Navigate
} from "react-router-dom";

import {DashboardDoador} from "../src/pages/DashboardDoador"
import {DashboardOng} from "../src/pages/DashboardONG"
import {Home} from "../src/pages/Home"
// import {Login} from "../src/pages/Login"

function ProtectRoute({redirectTo}){
  const token = localStorage.getItem('token');
  return token? <Outlet/> : <Navigate to={redirectTo} />
}

export function MainRoutes(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        {/* <Route path='/login' element={<Login />} /> */}
        {/* <Route element={<ProtectRoute redirectTo={'/login'} />}> */}
          <Route path='/DashboardONG' element={<DashboardOng />} />
          <Route path='/DashboardDoador' element={<DashboardDoador />} />
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
  )
}