//import logo from './logo.svg';

import React, {useEffect} from 'react';
import './App.css';
import Main from '../Main/Main';
import { refreshToken } from '../Authorization/authSlice';



/*
export default class App extends React.Component {


    render() {
        const { state, dispatch } = this.props;
        return (
        <div>
            <Main
            dispatch={dispatch}
            userData={state.auth}
            getData={state.user}
            />
        </div>
            
        )
    }
};
*/
const App = (props) => {
    const { state, dispatch } = props;

    //CHECK AUTHORIZATION
   useEffect(() => {
        if (localStorage.getItem('token')) {
          
           dispatch(refreshToken());
            console.log( "TOKEN EXIST IN LOCALSTORAGE");
        }
    },[dispatch]);
    
     return (
        <div>
            <Main
            dispatch={dispatch}
            userData={state.auth}
            getData={state.user}
            />
        </div>
            
    )
    
}



export default App;