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
        }),
        credentials: 'include',
        mode: 'cors',


    });
    
    if (response.ok) {
        const answer = await response.json();
        console.log('Успех:', JSON.stringify(answer));
       // console.log(answer.user);
        return answer;
    } else {
        //console.log(JSON.stringify(await response.json()));
        //console.log(await response.json());
       const answer = await response.json();
        console.log(answer.message);
        console.log(response);
        return response.status;
       // console.log(response.status);
       // console.log(response)
    }


}
);


//LOGOUT

export const logout = createAsyncThunk(
    "auth/logout", async() => {

       
        const url = "http://localhost:4001/api/auth/logout/";
        const urlToFetch = `${url}`;
        const response = await fetch(urlToFetch, {
            method: 'GET',
            headers: {"Content-Type": "application/json; charset=utf-8"},
           
            credentials: 'include',
            mode: 'cors',
        });
        console.log(response.ok);
        if (response.ok) {
            console.log("Успех LOGOUT");
        } else {
           
           console.log('BAD LOGOUT');
         return response.status;
         }
        }
    );
   
    //LOGIN
    export const loginUser = createAsyncThunk(
        
    "auth/loginUser", async(item) => {
        // console.log(item);
        
         const url = "http://localhost:4001/api/auth/login/";
         const urlToFetch = `${url}`;
         const response = await fetch(urlToFetch, {
             method: 'POST',
             headers: {"Content-Type": "application/json; charset=utf-8"},
             body: JSON.stringify({
                 useremail: item.email,
                 user_password: item.password
             }),
             
            credentials: 'include',
            mode: 'cors',
         });
         if (response.ok) {
             const answer = await response.json();
             
             console.log('Успех:ЛОГИН', JSON.stringify(answer));
             
             return answer;
         } else {
             //console.log(JSON.stringify(await response.json()));
             //console.log(await response.json());
            const answer = await response.json();
             console.log(answer.message);
             return response.status;
            // console.log(response.status);
            // console.log(response)
         }
     
     
     }
    );
const initialState ={
            
            id:'',
            email:'',
            password:'',
            role:'',
            openRegistrationForm: false,
            openLoginForm: false,
            openActivationForm: false,
            openMainData: false,
            errorMessage:'',
            errorMessageEmail:'',
            errorMessagePassword:'',
            userMessage:'',
            accessToken:'',
            refreshToken:''
            
    
};


const options ={
    name: 'auth',
    initialState: {
        id:'',
        email:'',
        password:'',
        role:'',
        openRegistrationForm: false,
        openLoginForm: false,
        openActivationForm: false,
        errorMessage:'',
        errorMessageEmail:'',
        errorMessagePassword:'',
        userMessage:'',
        accessToken:'',
        refreshToken:''
        

    },
    reducers: {
         // GET first INITIAL STATE
         getInitialState: state  => 
         initialState,
       
        openRegistrationForm: (state,action) => {
            state.openRegistrationForm = true;
        },
        closeRegistrationForm: (state,action) => {
            state.openRegistrationForm = false;
            state.errorMessage = "";
            state.errorMessageEmail = "";
            state.errorMessagePassword = "";

        },
        closeLoginForm: (state,action) => {
            state.openLoginForm = false;
            state.errorMessage = "";
            state.errorMessageEmail = "";
            state.errorMessagePassword = "";
        },
        openLoginForm: (state, action) => {
            state.openLoginForm = true;
        },
        validateErrorEmail: (state, action) => {
            state.errorMessageEmail = action.payload;
        },
        validateErrorPassword: (state, action) => {
            state.errorMessagePassword = action.payload;
        },
        closeActivationForm: (state,action) => {
            state.openActivationForm = false;
        },
        clearErrorMessages: (state,action) => {
            state.errorMessage = "";
           // state.errorMessageEmail = "";
           // state.errorMessagePassword = "";
        }
    },
    extraReducers: {
    [registerUser.pending]: (state, action) => {
        state.isFetching = true;
        state.error = false;
        state.userMessage = 'Загрузка...';
        
    },
    [registerUser.fulfilled]: (state, action) => {
        state.isFetching = true;
         
       // console.log(action.payload);
        
        if (action.payload === 409) {
            state.errorMessage = 'Такой пользователь уже существует';
            state.userMessage ='';
            console.log('user exist ');
            
        } else {
            console.log(action.payload);
            state.email = action.payload.user.useremail;
            state.id = action.payload.user.id;
            state.openRegistrationForm = false;
            state.userMessage ='';
           // state.openActivationForm = true;
           state.accessToken = action.payload.accessToken;
           state.refreshToken = action.payload.refreshToken;
           localStorage.setItem('token', action.payload.accessToken )

        }
       
    },
    
    [registerUser.rejected]: (state, action) => {
        state.isFetching = false;
        state.error = action.payload;
        state.errorMessage = 'Сервер временно недоступен';
        state.userMessage ='';
        console.log('bad request!')
    },
    [loginUser.pending]: (state, action) => {
        state.isFetching = true;
        state.error = false;
        state.userMessage = 'Загрузка...';
        
    },
    [loginUser.fulfilled]: (state, action) => {
        state.isFetching = true;
         
       // console.log(action.payload);
        
        if (action.payload === 404) {
            state.errorMessage = 'Электронная почта или имя пользователя не обнаружены в базе данных.';
            state.userMessage ='';
            console.log('user NOT exist ');
            
        } else if (action.payload === 401) {
                state.errorMessage = 'К сожалению, вы ввели неправильный пароль. Проверьте свой пароль еще раз.';
                state.userMessage ='';
                console.log('wrong password ');
        }
        
        else{
            console.log(action.payload);
            state.email = action.payload.user.useremail;
            state.id = action.payload.user.id;
            state.openLoginForm = false;
            state.userMessage ='';
            state.accessToken = action.payload.accessToken;
            state.refreshToken = action.payload.refreshToken;
           // state.openActivationForm = true;
           localStorage.setItem('token', action.payload.accessToken )
           state.openMainData = true;

        }
       
    },
    
    [loginUser.rejected]: (state, action) => {
        state.isFetching = false;
        state.error = action.payload;
        state.errorMessage = 'Сервер временно недоступен';
        state.userMessage ='';
        console.log('bad request login!')
    },
    [logout.pending]: (state, action) => {
        state.isFetching = true;
        state.error = false;
       
        
    },
    [logout.fulfilled]: (state, action) => {
        state.isFetching = true;
        console.log(action);
       // state.userMessage ='LOGOUT OK';
        localStorage.removeItem('token');
           
       
    },
    
    [logout.rejected]: (state, action) => {
        state.isFetching = false;
        state.error = action.payload;
      console.log(action);
        state.errorMessage = 'Сервер временно недоступен';
        state.userMessage ='';
        console.log('bad request logout!')
    }
    }
    

};
export const authSlice = createSlice(options);
export const {openRegistrationForm, closeRegistrationForm,
    activeLoginForm, validateErrorPassword, 
    validateErrorEmail, openLoginForm, closeLoginForm, 
    clearErrorMessages, closeActivationForm,
    getInitialState } = authSlice.actions;
export default authSlice.reducer;
                                                                          