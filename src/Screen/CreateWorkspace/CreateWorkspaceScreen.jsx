import React, { useState } from 'react'
import { crearWorkspace, obtenerWorkspaces } from "../../data"
import { useNavigate } from "react-router-dom"


const CrearWorkspaceScreen = () => {
    const [error, setError] = useState({text:'',isError:false})
    const navigation = useNavigate()
    const handlesubmit = (evento) => {
        evento.prevntDefoult()
        const  form = new FormData(evento.target)
        
        const workspace = form.get('workspace')
        const channel = form.get('canal')
        const nuevoWorkspace = {
            name: workspace,
            channels: [
                {
                    name: channel
                }
            ]
        }
        crearWorkspace(newWorwspace)
        console.log(obtenerWorkspaces())
        navigation('/')

    }

    return (
        <div>
            <h2>Crar Worckspace</h2>


            <form onSubmit={handlesubmit} className='formiulario'>


                <label htmlFor='w-space-name'>Nombre del Workspace</label>
                <input id='w-space-name' placeholder='Escriba el nombre del Workspace' name='workspace' />
                {error.isError && <span>{error.text} </span>}
                <br /><br  />
                <label htmlFor='canal-name'>Nombre del canal</label><br />
                <input id='canal-name' placeholder='Escriba el nombre del canal' name='canal'/>
                {error.isError && <span>{error.text}</span>}
                <br /><br />
                <button>Crear</button>


            </form>
        </div>
    )
}

export default CrearWorkspaceScreen
