import React from "react";
import ChannelItem from "../ChannelItem/ChannelItem"

const ChannelList = ({titulo, canales}) => {
    
    return(
        <>
        <h1>{titulo}</h1>
        {
            channels.map((channel) =>{
                return (
                    <ChannelItem key={channel.id} nombre={channel.nombre} id={channel.id}/>
                )})
        }
        </>
    )
}