import React from 'react';
import './Login.css';
import {  validateErrorPassword,loginUser, validateErrorEmail, closeLoginForm, clearErrorMessages } from '../authSlice';

import  {validatePassword, validateEmail }  from '../../../helper/validation';

export default class Login extends React.Component {
    constructor(props){
        super(props);
        this.state = {
           // userInputMail:'sandvich2008@rambler.ru',
          //  userInputPassword:'121212',
            userInputMail:'',
            userInputPassword:'',
            errorValidation:'',
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
       email: this.state.userInputMail,
       password: this.state.userInputPassword,
       
      //  email: "wscad@yandex",
       // password: "121212"
    }
    console.log("press send");
    dispatch(loginUser(item));

}
//CLOSE FORM
onClose() {
 const {dispatch} = this.props;
 dispatch(closeLoginForm());
}

handleUserInputMail(e) {
    const {dispatch} = this.props;
    const message = validateEmail(e.target.value);
    dispatch(validateErrorEmail(message));
    dispatch(clearErrorMessages());
    
    this.setState({
        userInputMail: e.target.value
    })
}
handleUserInputPassword(e) {
    const {dispatch} = this.props;
    const message = validatePassword(e.target.value);
    dispatch(validateErrorPassword(message));
    dispatch(clearErrorMessages());

    this.setState({
        userInputPassword: e.target.value,
        errorValidation: message
    })
}        
render() {
    let style;
        
    if (/*!this.props.userData.errorMessage 
        &&*/ !this.props.userData.errorMessageEmail 
        && !this.props.userData.errorMessagePassword
        && this.state.userInputMail && this.state.userInputPassword) {
      
            style = ''
        } else {
            style = 'disabled'
        }
        return (
            <div className="Login">
               <h3>Вход на WSCproject</h3>
               
                <input id="email" type="email" placeholder="Электронный адрес" required 
                value={this.state.userInputMail} onChange={this.handleUserInputMail} />
                <p id="error">{this.props.userData.errorMessageEmail}</p>
                <p id="error">{this.props.userData.errorMessage}</p>
                <p id="message">{this.props.userData.userMessage}</p>
               
                <input type='password' id="password" placeholder="Пароль" required minLength ="5" 
                value={this.state.userInputPassword} onChange={this.handleUserInputPassword}/>
                <p id="error">{this.props.userData.errorMessagePassword}</p>
                <button  onClick={this.onSend} disabled={style}>Вход</button>
                <a href="#">Забыли аккаунт?</a>
                <span>или</span>
                <button>Создать аккаунт</button>
                <button onClick={this.onClose}>Отмена</button>
            </div>
        )
    }
}
