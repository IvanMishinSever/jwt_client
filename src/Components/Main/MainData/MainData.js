import React from "react";

import './MainData.css';
import { getData } from "../userSlice";

const MainData = (props) => {
  const {dispatch} = props;

  const onGetData = () => {
    dispatch(getData());

  }


    return (
      <div className="MainData">
     
          
          <p>
            SECRET DATA!!!

          </p>
          <button onClick={onGetData}>get secret data</button>
       
        
      </div>
    );
  }
  
  export default MainData;