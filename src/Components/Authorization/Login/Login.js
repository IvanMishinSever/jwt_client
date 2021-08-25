import React from 'react';
import './Login.css';

export default class Registration extends React.Component {
    render() {
        return (
            <div className="Login">
               
                <p>Почта</p>
                <input type='mail'required/>
                <p>Пароль</p>
                <input type='password' required/>
                <button>Вход</button>
            </div>
        )
    }
}
