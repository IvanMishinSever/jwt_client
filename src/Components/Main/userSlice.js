import {  createSlice,  createAsyncThunk } from "@reduxjs/toolkit";

export const getData = createAsyncThunk(
    "user/getData", async() => {
        const url = "http://localhost:4001/api/users/";
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
        console.log(response.ok);
        if (response.ok) {
            const answer = await response.json();
           
            console.log("Успех getData");
            return answer;
        } else {
           
           console.log('getData');
         return response.status;
         }
        }
    
);

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
    extraReducers: {
        [getData.pending]: (state, action) => {
            state.isFetching = true;
            state.error = false;
            state.userMessage = 'Загрузка...';
        },
        [getData.fulfilled]: (state, action) => {
            console.log(action.payload);
            state.isFetching = true;
            state.data = action.payload;
           /* state.data.push({
                id:action.payload.id, 
                userEmail: action.payload.useremail})*/
        },
        [getData.rejected]: (state, action) => {
            state.isFetching = false;
            state.error = action.payload;
            state.errorMessage = 'not get users something wrong!';
            state.userMessage = 'Загружено';
        },

    }

};
export const userSlice = createSlice(options);
export const {getInitialStateData} = userSlice.actions;
export default userSlice.reducer;
