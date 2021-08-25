import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const registerUser = createAsyncThunk(
"auth/registerUser", async(item) => {
   // console.log(item);
   
    const url = "http://localhost:4001/api/auth/registration/";
    const urlToFetch = `${url}`;
    const response = await fetch(urlToFetch, {
        method: 'POST',
        headers: {"Content-Type": "application/json; charset=utf-8"},
        body: JSON.stringify({
            useremail: item.email,
            user_password: item.password
        })
    });
    if (response.ok) {
        const answer = await response.json();
        console.log('Успех:', JSON.stringify(answer));
       // console.log(answer.user);
        return answer.user;
    } else {
        
        return response.status;
       // console.log(response.status);
       // console.log(response)
    }


}
);


const options ={
    name: 'auth',
    initialState: {
        id:'',
        email:'',
        password:'',
        role:'',
        openRegistrationForm: false,
        activeLoginForm: true,
        errorMessage:'',
        userMessage:'',

    },
    reducers: {
        openRegistrationForm: (state,action) => {
            state.openRegistrationForm = true;
        },
        closeRegistrationForm: (state,action) => {
            state.openRegistrationForm = false;
        },
        activeLoginForm: (state, action) => {
            state.activeLoginForm = false;
        }

    },
    extraReducers: {
    [registerUser.pending]: (state, action) => {
        state.isFetching = true;
        state.error = false;
        state.userMessage = 'Пожалуйста, ждите...';
    },
    [registerUser.fulfilled]: (state, action) => {
        state.isFetching = true;
         //WHY WE DOUBLE IN REDUCER??????
        console.log(action.payload);
        if (action.payload === 409) {
            state.errorMessage = 'Такой пользователь уже существует';
            state.userMessage ='';
            console.log('user exist ');
            
        } else {
            state.email = action.payload.useremail;
            state.id = action.payload.id;
            state.openRegistrationForm = false;
            state.userMessage ='';
        }
       
    },
    
    [registerUser.rejected]: (state, action) => {
        state.isFetching = false;
        state.error = action.payload;
        state.errorMessage = 'Сервер временно недоступен';
        state.userMessage ='';
        console.log('bad request!')
    }
    }
    

};
export const authSlice = createSlice(options);
export const {openRegistrationForm, closeRegistrationForm,activeLoginForm} = authSlice.actions;
export default authSlice.reducer;
