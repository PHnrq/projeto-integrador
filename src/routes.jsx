import {
  BrowserRouter,
  Router,
  Switch,
  Route,
  Link,
  Routes,
  Outlet,
  Navigate
} from "react-router-dom";

import {DashboardDoador} from "../src/pages/DashboardDoador"
import {DashboardONG} from "../src/pages/DashboardONG"
import {LandingPage} from "../src/pages/LandingPage"
import {Login} from "../src/pages/Login"

function ProtectRoute({redirectTo}){
  const token = localStorage.getItem('token');
  return token? <Outlet/> : <Navigate to={redirectTo} />
}

export function MainRoutes(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/home' element={<LandingPage />} />
        <Route path='/login' element={<Login />} />
        <Route element={<ProtectRoute redirectTo={'/login'} />}>
          <Route path='/DashboardONG' element={<DashboardONG />} />
          <Route path='/DashboardDoador' element={<DashboardDoador />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}