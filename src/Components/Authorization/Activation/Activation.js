import React from 'react';
import { closeActivationForm } from '../authSlice';
import './Activation.css';

const Activation = (props) => {
    const {dispatch} = props;
    const onSend = () => {
        
        dispatch(closeActivationForm());
    }
    return (
      <div className="Activation">
     
          
          <p>
            На почту {props.userData.email} отправлено письмо для активации Вашей учетной записи.
          </p>
          <button onClick={onSend}>ОК</button>  
       
        
      </div>
    );
  }
  
  export default Activation;