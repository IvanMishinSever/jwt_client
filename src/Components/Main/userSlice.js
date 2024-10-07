import {  createSlice,  createAsyncThunk } from "@reduxjs/toolkit";
import Config from "../../config/config.js";

const serverPath = Config.serverPath;

export const getData = createAsyncThunk(
    "user/getData", async() => {
        const url = serverPath + "/api/users/";
        const urlToFetch = `${url}`;
        const response = await fetch(urlToFetch, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                "Authorization": `Bearer ${localStorage.getItem('token')}`
            },
           
            credentials: 'include',
            mode: 'cors',
        });
        console.log("RESPONSE" + response.ok);
        if (response.ok) {
            const answer = await response.json();
           
            console.log("Успех getData" + answer + JSON.stringify(answer));
            return answer;
        } else {
          // refreshToken();
           console.log('getData');
         return response.status;
         }
        }
    
);
//REFRESH
/*
 const refreshToken = createAsyncThunk(
    "user/refreshToken", async() => {
        
        
        const url = "http://localhost:4001/api/auth/refresh/";
        const urlToFetch = `${url}`;
        const response = await fetch(urlToFetch, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                
            },
           
            credentials: 'include',
            mode: 'cors',
        });
        console.log(response.ok);
        if (response.ok) {
           const answer = await response.json()
           
            console.log("Успех REFRESH", JSON.stringify(answer));
           // getData()
           
        } else {
           
           console.log('BAD REFRESH');
         return response.status;
         }
         
        }
    
);
*/
/*
async function refreshToken() {
    try{
        const url = "http://localhost:4001/api/auth/refresh/";
        const urlToFetch = `${url}`;
        const response = await fetch(urlToFetch, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                
            },
           
            credentials: 'include',
            mode: 'cors',
        });
      //  console.log(response.ok);
        if (response.ok) {
           
            const answer = await response.json()
            console.log(answer.accessToken);
            console.log("Успех REFRESH", JSON.stringify(answer));
           // getData()
           return answer;
           
        } else {
           
           console.log('BAD REFRESH');
         return response.status;
         }
    }catch (error) {
        console.log(error);
    }

}
*/
const initialState = {
    users:'',
    data:[],
    errorMessage:'',
    userMessage: ''   
}

const options ={
    name: 'user',
    initialState: {
        users:'',
        data:[],
        errorMessage:'',
        userMessage: ''
    },
    reducers: {
        getInitialStateData: state =>
        initialState,
    },
    extraReducers: (builder) => {
        builder
        .addCase(getData.pending, (state, action) => {
            state.isFetching = true;
            state.error = false;
            state.userMessage = 'Загрузка...';
        })
        .addCase(getData.fulfilled, (state, action) => {
            if (action.payload === 401) {
                
                state.userMessage = ' NO AUTH!';
                state.data = [];

               // refreshToken();
               // getData();
                
             } else {
                console.log(action.payload);
                state.isFetching = true;
                state.data = action.payload;
               /* state.data.push({
                    id:action.payload.id, 
                    userEmail: action.payload.useremail})*/
             }

           
        })
        .addCase(getData.rejected, (state, action) => {

            state.isFetching = false;
            state.error = action.payload;
            state.errorMessage = 'not get users something wrong!';
            state.userMessage = 'Загружено';
        })
      /*  
        [refreshToken.pending]: (state, action) => {
            state.isFetching = true;
            state.error = false;
            state.userMessage = 'Загрузка...';
        },
        [refreshToken.fulfilled]: (state, action) => {
            state.isFetching = true;
            state.error = false;
            state.accessToken = action.payload.accessToken;
        },
        [refreshToken.rejected]: (state, action) => {
            state.isFetching = false;
            state.error = action.payload;
          
        },
*/
    }

};
export const userSlice = createSlice(options);
export const {getInitialStateData} = userSlice.actions;
export default userSlice.reducer;
