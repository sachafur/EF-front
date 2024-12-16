import React from "react";
import ChatList from '../Components/ChatList/ChatLlist';
import ChannelList from '../Components/ChannelList/ChannelList'; 
import { useParams } from "react-router-dom";
import { obtrnerWorkspacePorId } from "../../data";

const WorckspaceScreen = () => {
    const {worspace_id} = useParams()
    const workspace = obtrnerWorkspacePorId(worspace_id)
    console.log(workspace.channels)
    const messages = [
        {
            hour: '11:31 am',
            author: 'Pepe suarez',
            text: 'Hola a todos!',
            id: 1
        },{
            hour: '11:35 am',
            author: 'Martina Ramirez',
            text: 'Hola como va?',
            id: 2
        },{
           hour: '11:45',
           author: 'Federico',
           text: 'Hola, en una complicada con la compu. Alguno conoce un tecnico de confianza?',
           id: 3  
        }
    ]

    const canales = [
        {
            id: 1,
            nombre: 'Consultas',
        },{
            id: 2,
            nombre: 'General',
        },{
            id: 3,
            nombre: 'Tareas'
        }
    ]
    return(
        <div>
            <h1>{workspace.name}</h1>
            <ChatList messages={messages} />
            <ChannelList channels={workspace.channels} titulo={'canales importantes'} />
        </div>
    )
}

export default WorckspaceScreen
