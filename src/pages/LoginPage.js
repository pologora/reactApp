import React from 'react';

const LoginPage = () => {
    return ( <>
    <div className="login">
        <label htmlFor="login">Login
            <input type="text" id="login" />
        </label>
        <label htmlFor="haslo">Hasło
            <input type="text" id="haslo" />
        </label>
        <button>Zaloguj</button>
    </div>
    </> );
}
 
export default LoginPage;