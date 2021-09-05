import React from "react";

import './MainData.css';
import { getData } from "../userSlice";

const MainData = (props) => {
  const {dispatch} = props;

  const onGetData = () => {
   // console.log(props.getData)
    dispatch(getData());
  /*  if (props.getData.data) {
      renderUsers();
    } else {
      return null;}
*/
  }
const renderUsers = () => {
  const data = props.getData.data;
  return(
    data.map(item => {
      return(
      <tr key={item.id}>
        <td>{item.id}</td>
        <td>{item.useremail}</td>
      </tr>)
    })
  );
}


    return (
      <div className="MainData">
     
          
          <p>
            SECRET DATA!!!

          </p>
          <button onClick={onGetData}>get secret data</button>
          {props.getData.data ? renderUsers(): null}
        
      </div>
    );




  }
  
  export default MainData;