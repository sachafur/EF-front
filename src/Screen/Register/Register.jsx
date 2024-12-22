import React from 'react';
import { Link } from 'react-router-dom';
import { extractFormData } from '../../'
import { useState } from 'react'

const Register = () => {

    const form_fields = {
        'name': '',
        'email': '',
        'password': '',
    }
    const {form_values_state, handleChangeImputValue} = useForm(form_fields)
    
    const handleSubmitRegisterForm = async (event) => {
        event.preventDefault()
        const form_HTML = event.target

        const body = await POST(
            ''
        )
    }
}
export default Register

