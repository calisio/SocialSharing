import React from 'react';
import { useState } from 'react';
import CreateForm from "../components/LoginCreateAccountForm.js"

function Register(props){

    // tutorial used: https://www.freecodecamp.org/news/pass-data-between-components-in-react/
    // dont know if we need this next line
    const [data, setData] = useState('');

    // gets back the form data when submit is clicked
    const formToRegister = (formData) => {
        createAccount(formData);
    }

    async function createAccount (userData) {
        // console.log("calling createAccount");
        await fetch("http://localhost:3000/createAccount", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({parcel: userData})
        });
    }


    return(
        <CreateForm 
            sendInputsBack={formToRegister}
            header="Create Account"
            button="Register"
        />
    )
}


export default Register