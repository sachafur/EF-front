import React, { useState} from "react";
import ChatItem from "../ChatItem/ChatItem";

const ChatList = ({messages}) => {
    const [ error, setError ] = useState({text:'', isError: false})
    const handleSubmitMessage = (event) => {
        
        event.preventDefault()

        const formulario = new FormData(event.target)
        const message = formulario.get('message')
        if(!message){
            setError({isError: true, text: 'No escribiste nada'})
        }
        else{
            setError({text: '', isError: false})
            const newMessage = {author: 'YO', text: message, id: 5, hour: '20:22'}
            message.push(newMessage)
        }
    }

    return(
        <div>
            <div className="mesagges">
                {
                    messages.map((message) => {
                        return (
                            <ChatItem key={message.id} author={message.author} text={message.text}/>
                        )
                    })
                }
            </div>
            <form onSubmit={handleSubmitMessage}>
                <input placeholder="Escriba su mensaje" name="mesagge"/>
                {error.isError && <span>{error.text}</span>}
                <button type="submit">Enviar</button>
            </form>

        </div>
    )

}


export default ChatList