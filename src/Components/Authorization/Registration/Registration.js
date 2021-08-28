import React from 'react';
import { closeRegistrationForm, registerUser, validateErrorPassword, validateErrorEmail } from '../authSlice';
import './Registration.css';
import  {validatePassword, validateEmail }  from '../../../helper/validation';


export default class Registration extends React.Component {
    constructor(props){
        super(props);
        this.state = {
           // userInputMail:'wscad@yandex.ru',
           // userInputPassword:'121212',
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
    dispatch(registerUser(item));

}
//CLOSE FORM
onClose() {
 const {dispatch} = this.props;
 dispatch(closeRegistrationForm());
}

handleUserInputMail(e) {
    const {dispatch} = this.props;
    const message = validateEmail(e.target.value);
    dispatch(validateErrorEmail(message));
    
    this.setState({
        userInputMail: e.target.value
    })
}
handleUserInputPassword(e) {
    const {dispatch} = this.props;
    const message = validatePassword(e.target.value);
    dispatch(validateErrorPassword(message));

    this.setState({
        userInputPassword: e.target.value,
        errorValidation: message
    })
}

    render() {
        let style;
            
        if (!this.props.userData.errorMessage && !this.props.userData.errorMessageEmail && !this.props.userData.errorMessagePassword) {
          
                style = ''
            } else {
                style = 'disabled'
            }
        return (
            <div className="Registration">
                
                <h3>Регистрация</h3>
                    
                    <input id="email" type="email" placeholder="Электронный адрес" required 
                    value={this.state.userInputMail} onChange={this.handleUserInputMail} />
                    <p id="error">{this.props.userData.errorMessageEmail}</p>
                    <p id="error">{this.props.userData.errorMessage}</p>
                    <p id="message">{this.props.userData.userMessage}</p>
                   
                    <input type='password' id="password" placeholder="Пароль" required minLength ="5" 
                    value={this.state.userInputPassword} onChange={this.handleUserInputPassword}/>
                    <p id="error">{this.props.userData.errorMessagePassword}</p>
                    <button  onClick={this.onSend} disabled={style}>Регистрация</button>
                    <p >Есть аккаунт?</p>
                    <button onClick={this.onClose}>Отмена</button>
                    <button >Вход</button>
                
            </div>
        )
    }
}

/*
<button type="button" onClick={this.onSend}>Зарегистрироваться</button>
*/