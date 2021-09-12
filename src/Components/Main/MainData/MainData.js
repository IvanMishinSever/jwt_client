import React from "react";

import './MainData.css';
import { getData } from "../userSlice";
import { refreshToken } from "../../Authorization/authSlice";
//import Example1 from "../../Example_Promises";

const MainData = (props) => {
  const {dispatch} = props;

// GET REFRESH GET HANDLER!!!
/*
  const onGetData = () => {

   dispatch(getData())
   .unwrap()
   .then((res) => {
    console.log("RES" + " " + res); 
   
    if (res === 401)   {
      console.log("REFRESH NOW")
        dispatch(refreshToken())
        .then(() => {
          console.log("START GET DATA AFTER REFRESH")
          dispatch(getData());
        });
      }
         

    }).catch((rej) => {
        console.log(rej);
    });

  }
*/
const onGetData = async () => {
  try {
    const answer = await dispatch(getData()).unwrap();
    if (answer === 401) {
      console.log("REFRESH NOW")
      const answer2 = await dispatch(refreshToken());
      console.log(answer2);
      if (answer2) {
        console.log("START GET DATA AFTER REFRESH")
        dispatch(getData());
      }

    }
  } catch (e) {
    console.log(e);
  }
}
//RENDER USERS
const renderUsers = () => {
  const data = props.getData.data;
  console.log(data);
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
          <p>example</p>
          
          
          {/*<Example1 />*/}
      </div>
    );




  }
  
  export default MainData;