import React from 'react';
import { closeRegistrationForm, registerUser } from '../authSlice';
import './Registration.css';


export default class Registration extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            userInputMail:'wscad@yandex.ru',
            userInputPassword:'121212',
        }
        this.handleUserInputMail = this.handleUserInputMail.bind(this);
        this.handleUserInputPassword = this.handleUserInputPassword.bind(this);
        this.onSend = this.onSend.bind(this);
        this.onClose = this.onClose.bind(this);
    }
    
//CLICK CONTINUE
onSend() {
    const {dispatch} = this.props;
    const item = {
       // email: this.state.userInputMail,
       // password: this.state.userInputPassword
        email: "wscad@yandex.ru",
        password: "121212"
    }
    console.log("press send");
    dispatch(registerUser(item));

}
//CLOSE FORM
onClose() {
 const {dispatch} = this.props;
 dispatch(closeRegistrationForm());
}

handleUserInputMail(e) {
    this.setState({
        userInputMail: e.target.value
    })
}
handleUserInputPassword(e) {
    this.setState({
        userInputPassword: e.target.value
    })
}

    render() {
        return (
            <div className="Registration">
               <h3>Регистрация</h3>
                <p>Введите почту</p>
                <input type='mail' value={this.state.userInputMail} onChange={this.handleUserInputMail} required/>
                <p id="error">{this.props.userData.errorMessage}</p>
                <p id="message">{this.props.userData.userMessage}</p>
                <p>Введите пароль</p>
                <input type='password' value={this.state.userInputPassword} onChange={this.handleUserInputPassword} required/>
                <button onClick={this.onSend}>Зарегистрироваться</button>
                <button onClick={this.onClose}>Отмена</button>
            </div>
        )
    }
}
