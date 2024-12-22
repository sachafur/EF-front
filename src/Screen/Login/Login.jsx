import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { extractFormData } from "../utils/extratctFormData.js";
import { Post, unnaunthenticatedHeaders } from '../../fetching/http.fetching.js';

const Login = () => {
    const navigate = useNavigate();

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
            const response = await Post(
                'http://localhost:5173`/login',
                {
                    headers: getUnnauthenticatedHeaders(),
                    body: JSON.stringify(form_values_object)
                }
            )
            const access_token = response.payload.token
            sessionStorage.setItem('access_token', access_token)
            sessionStorage.setItem(access_token, access_token)
            navigate('/home')
        }
        catch(error){
        
        }
    }

    return (
        <div>
                <h1>Inicia sesión</h1>
                <form onSubmit={handleSubmitLoginForm}>
                    <div>
                        <label htmlFor="email">Igresa tu email:</label>
                        <input name="email" id="email" placeholder="email@example.com" />
                    </div>
                    <div>
                        <label htmlFor="password">Igresa tu contraseña:</label>
                        <input type="password" name="password" id="password" />
                    </div>
                    <button type="submit">Iniciar sesión</button>
                </form>
                <span>No tienes una cuenta? <Link to="/register">Registrate</Link></span>
                <br />
                <span>Olvidaste tu contraseña? <Link to="/forgot-password">Recuperar contraseña</Link></span>

        </div>
    )
}

export default Login