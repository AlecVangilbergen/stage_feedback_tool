import React from 'react';
import RegisterComp from '../components/Register';


const RegisterPage: React.FC = () => {
    return (
        <>
        <br />
        <h1 style={{marginLeft: "1%"}} className="mb-4 text-4xl font-bold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl dark:text-black">Register new user</h1>
        <br />
            <RegisterComp />
        </>
    );
    }

    export default RegisterPage;