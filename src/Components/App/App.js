//import logo from './logo.svg';

import React from 'react';
import './App.css';
import Main from '../Main/Main';



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
