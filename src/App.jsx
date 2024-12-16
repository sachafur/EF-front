import React from "react"
import ChannelList from './Components/ChannelList/ChannelList.jsx'
import ChatList from './Components/ChatList/ChatLlist.jsx'
import { Route, Routes } from "react-router-dom"
import CreateWorkspaceScreen from "./Screen/CreateWorkspaceScreen.jsx"
import WorckspaceScreen from "./Screen/WorkspaceScreen.jsx"
import WorckspaceScreen from "./Screen/WorkspaceScreen.jsx"

function App() {


  return(
  <>
  <Routes>
    {}
    <Route path="/" element={<WorckspaceScreen/>}/>
    <Route path='/workspace/:workspace_id' element={<WorckspaceScreen/>}/>
    
    <Route path="/new" element={<CreateWorkspaceScreen/>}/>
  </Routes>

 </>
    )
}