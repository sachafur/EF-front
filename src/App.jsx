import React from "react"
import Register from "src/Screen/Register/Register.jsx"
import Login from 'src/Screen/Login/Login.jsx'
import ForgotPassword from 'src/Screen/ForgotPassword/ForgotPassword.jsx'
import { Route, Routes } from "react-router-dom"
import CreateWorkspaceScreen from "src/Screen/CreateWorkspace/CreateWorkspaceScreen.jsx"
import WorckspaceScreen from "src/Screen/WorkspaceScreen/WorkspaceScreen.jsx"

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