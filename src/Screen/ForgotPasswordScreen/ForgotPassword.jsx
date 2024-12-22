import React from "react";
import { Link } from "react-router-dom";
import { extractFormData } from "../utils/extratctFormData.js";
import { POST, getUnnauthenticatedHeaders } from "../../fetching/http.fetching.js";



const ForgotPassword = () => {

    const handleSubmitLoginForm = async (e) => {
       try{
           e.preventDefault();
           const form_HTML = e.target;
           const form_Values = new FormData(form_HTML)
           const form_fields = {
                   'email': '',
                   'password':''
           }
           const form_values_object = extractFormData(form_fields, form_Values)
           const response = await POST( 'http://localhost:5173`/api/auth/forgot-password',
               {
                   headers: getUnnauthenticatedHeaders(),
                   body: JSON.stringify(form_values_object)
               }
           )
           if (!body.ok) {
            
            }
            console.log({ body })
       }
       catch(error){
        
       } 
       
    }

    return (
            <div>
                    <h1>Recuperar contraseña</h1>
                    <p>Enviaremos un link a tu mail para restablecer tu contraseña</p>
                    <form onSubmit={handleSubmitLoginForm}>
                        <div>
                            <label htmlFor="email">Ingrese su email:</label>
                            <input type="email" id="email" placeholder="tu@email" />
                        </div>
                        <button type="submit">Recuperar contraseña</button>
                    </form>
                    <span>Si tienes una cuenta puedes <Link to="/login">Iniciar sesión</Link> </span>
                    <span>No tienes una cuenta? puedes <Link to="/register">Registrate</Link></span>
                            
            
            </div>
        )

}

export default ForgotPassword