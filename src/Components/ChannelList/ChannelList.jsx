import React from "react";
import channelItem from "../ChanelItem/ChannelItem.jsx";

const ChannelList = ({titulo, canales}) => {
    
    return(
        <>
        
        <h1>{titulo}</h1>
        {
            channels.map((channel) =>{
                return (
                    <channelItem key={channel.id} nombre={channel.nombre} id={channel.id}/>
                )})
        }
        </>
    )
}