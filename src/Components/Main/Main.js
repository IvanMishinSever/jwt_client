import React, {useState} from "react";
import './Main.css';
import Registration from "../Authorization/Registration/Registration";
import Login from "../Authorization/Login/Login";
import MainData from "./MainData/MainData";
import {openRegistrationForm} from '../Authorization/authSlice';

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

// MAIN VIEW RENDER
const renderMainView = () => {
  return (
  <div className="Main">
    <button onClick = {() => dispatch(openRegistrationForm())}>Регистрация</button>
    <p> HELLO </p>
    <Login 
    dispatch={dispatch}
    />
    <MainData 
    dispatch={dispatch}
    />
 </div>

  );
};

//RENDER
  if (props.userData.openRegistrationForm === false) {
      return renderMainView();
  } else {
      return renderRegistration();
  }
   
}
  
  export default Main;