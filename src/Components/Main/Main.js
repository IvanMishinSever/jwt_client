import React from "react";
import './Main.css';
import Registration from "../Authorization/Registration/Registration";
import Login from "../Authorization/Login/Login";
import MainData from "./MainData/MainData";
import {openRegistrationForm, openLoginForm} from '../Authorization/authSlice';

const Main = (props) => {
  const {dispatch} = props;
 // const [showRegistration, setShowRegistration] = useState(false);

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
// MAIN VIEW RENDER
const renderMainView = () => {
  return (
  <div className="Main">
    <button onClick = {() => dispatch(openLoginForm())}>Логин</button>
    <button onClick = {() => dispatch(openRegistrationForm())}>Регистрация</button>
    <p> HELLO </p>
   
    <MainData 
    dispatch={dispatch}
    userData={props.userData}
    />
 </div>

  );
};

//RENDER


  if (props.userData.openRegistrationForm === true) {
      return renderRegistration();
  }
  if (props.userData.openLoginForm === true) {
    return renderLogin();
}
  
  
      return renderMainView();

  
 
 
 
  
}
  
  export default Main;