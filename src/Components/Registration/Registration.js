import React from 'react';
import './Registration.css';

export default class Registration extends React.Component {
    render() {
        return (
            <div className="Registration">
               <h3>Регистрация</h3>
                <p>Введите почту</p>
                <input type='mail'required/>
                <p>Введите пароль</p>
                <input type='password' required/>
                <button>Продолжить</button>
            </div>
        )
    }
}
