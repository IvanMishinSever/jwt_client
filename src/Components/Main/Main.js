import React from "react";
import './Main.css';
//import Registration from "../Authorization/Registration/Registration";
//import Login from "../Authorization/Login/Login";
import MainData from "./MainData/MainData";
//import Activation from "../Authorization/Activation/Activation";
import Authorization from "../Authorization/Authorization";
import {openRegistrationForm, openLoginForm} from '../Authorization/authSlice';

const Main = (props) => {
  const {dispatch} = props;
 // const [showRegistration, setShowRegistration] = useState(false);
/*
//RENDER COMPONENT
  const renderRegistration = () => {
    return (
    <Registration 
      dispatch={dispatch}
      userData={props.userData}
      />
    );
  };

//LOGIN COMPONENT
const renderLogin = () => {
  return (
  <Login 
    dispatch={dispatch}
    userData={props.userData}
    />
  );
};
//LACTIVATION COMPONENT
const renderActivation = () => {
  return (
  <Activation 
    dispatch={dispatch}
    userData={props.userData}
    />
  );
};
*/
/*
// MAIN VIEW RENDER
const renderMainView = () => {
  return (
  <div className="Main">
    <button onClick = {() => dispatch(openLoginForm())}>Логин</button>
    <button onClick = {() => dispatch(openRegistrationForm())}>Регистрация</button>
    <h3>Пользователь {props.userData.email}</h3>
    <button>Выход</button>
    <p> HELLO </p>
    <Authorization
    dispatch={dispatch}
    userData={props.userData}
    />
    <MainData 
    dispatch={dispatch}
    userData={props.userData}
    />
 </div>

  );
};
*/
const renderMainView = () => {
  return (
  <div className="Main">
    <Authorization
    dispatch={dispatch}
    userData={props.userData}
    />
    <MainData 
    dispatch={dispatch}
    userData={props.userData}
    />
 </div>

  );
};

//RENDER

/*
  if (props.userData.openRegistrationForm === true) {
      return renderRegistration();
  }
  if (props.userData.openLoginForm === true) {
    return renderLogin();
}
  if (props.userData.openActivationForm === true) {
    return renderActivation();
  }
 */ 
  
      return renderMainView();

  
 
 
 
  
}
  
  export default Main;