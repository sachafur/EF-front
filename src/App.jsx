import React from "react"
import Register from "./Screen/Register/Register.jsx"
import Login from './Screen/Login/Login.jsx'
import ForgotPassword from '/Screen/ForgotPassword/ForgotPassword.jsx'
import { Route, Routes } from "react-router-dom"
import CreateWorkspaceScreen from "./Screen/CreateWorkspace/CreateWorkspaceScreen.jsx"
import WorckspaceScreen from "./Screen/WorkspaceScreen/WorkspaceScreen.jsx"
import Home from './Screen/Home/Home.jsx'

function App() {


  return(
  <>
    
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="Login" element={<Login/>}/>
        <Route path='Register' element={<Register/>}/>
        <Route path='/forgot-password' element={<ForgotPassword/>}/>
        <Route path='/reset-password' element={<ForgotPassword/>}/>
        <Route path='/workspace/:workspace_id' element={<WorckspaceScreen/>}/>
        
        <Route path="/new" element={<CreateWorkspaceScreen/>}/>
      </Routes>

 </>
    )
}
export default App
