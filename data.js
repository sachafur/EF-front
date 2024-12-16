import {v4 as uuidv4} from 'uuid';
const workspaces_estado_inicial = [
    {
        id: 1,
        name: 'Workspace 1',
        description: 'Workspace 1 description',
        channels: [
            {
                id: 1,
                name: 'Presentaciones',
                messages: [
                    {
                        id: 1,
                        author: 'Jose',
                        text: 'hola soy jose, pero me dicen pepe'
                    },
                    {
                        id: 2,
                        author: 'Ricardo',
                        text: 'Que tal Pepe? Yo soy Ricardo pero me gusta mas que me digan Richard'
                    }
                ]  
            },
            { 
                id: 2,
                name: 'Consultas',
                messages: [
                        {
                            id: 1,
                            author: 'Jose',
                            text: 'Hola tengo una duda respecto a las clases'  
                        },
                        {
                            id: 3,
                            author: 'Carlos',
                            text: 'Hola Josse, soy Carlos el profesor, decime?'
                        }
                    ]
            },
            {
                id: 3,
                name: 'General',
                messages: [
                    {
                        id: 3,
                        author: 'Carlos',
                        text: 'Hola a todos y bienvenidos al curso. Cualquier duda o consulta que tengan, por favor haganlas en el canal de consultas'
                    }
                ]    
            }
        ]
    }    
]

const obtenerWorkspaces = () => {
    let workspaces = localStorage.getItem('workspaces')
    if(workspaces){
        return JSON.parse(worckspaces)
    }
    else{
        localStorage.setItem('workspaces', JSON.stringify(workspaces_estado_inicial))
        return workspaces_estado_inicial
    }
}

const crearWorkspace = (nuevoWorkspace) => {
    nuevoWorkspace.id = uuidv4()

    let workspaces = obtenerWorkspaces()

    workspaces.push(nuevoWorkspace)
    localStorage.setItem('workspaces', JSON.stringify(workspaces))
}

const obtrnerWorkspacePorId = (id) => {
    let workspaces = obtenerWorkspaces()
    let workspace = workspaces.find(workspace => workspace.id == id)
    return workspace
}

export {obtenerWorkspaces, crearWorkspace, obtrnerWorkspacePorId}
