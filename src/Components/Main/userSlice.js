import {  createSlice,  createAsyncThunk } from "@reduxjs/toolkit";

export const getData = createAsyncThunk(
    "user/getData", async() => {
        const url = "http://localhost:4001/api/users/";
        const urlToFetch = `${url}`;
        const response = await fetch(urlToFetch, {
            method: 'GET',
            headers: {"Content-Type": "application/json; charset=utf-8"},
           
            credentials: 'include',
            mode: 'cors',
        });
        console.log(response.ok);
        if (response.ok) {
            console.log("Успех getData");
        } else {
           
           console.log('getData');
         return response.status;
         }
        }
    
);



const options ={
    name: 'user',
    initialState: {
        users:'',
       data:[]
    },
    reducers: {

    },
    extaReducers: {

    }

};
export const userSlice = createSlice(options);
export const {} = userSlice.actions;
export default userSlice.reducer;
