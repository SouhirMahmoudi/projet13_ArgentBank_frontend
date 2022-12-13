import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'



const initialState = {
    error: "",
    token: "",
    loading: false,
    logedIn: false,
    email: "",
    firstName: "",
    lastName: "",

}

export const signInUser = createAsyncThunk('signinuser', async (body) => {
    const response = await fetch("http://localhost:3001/api/v1/user/login", {
        method: "post",
        headers: {
            'content-type': "application/json",
        },

        body: JSON.stringify(body)
    })
    console.log(body)
    return await response.json();

})
export const getProfile = createAsyncThunk('getprofile', async (payload) => {
    const response = await fetch("http://localhost:3001/api/v1/user/profile", {
        method: "post",
        headers: {
            Authorization: `Bearer ${payload.Jwt}`
        },
    })
   console.log(payload.Jwt)
    return await response.json();

})


const authSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        
        logout: (state, action) => {
            state.token = ""
            state.firstName=""
            localStorage.clear()
        }
    },
    extraReducers: {
       /*******************Sign in**********************/
        [signInUser.pending]: (state, action) => {
            state.loading = true
        },
        [signInUser.fulfilled]: (state, { payload: { error, body} }) => {
            state.loading = false;
           
            if (error) {
                state.error = error;
                console.log(error)

            }
            else {
                console.log(body.token, typeof(body.token))
                state.token = body.token;
                state.logedIn = true;
                localStorage.setItem('token', body.token)
                
            }
           
        }
        ,
        [signInUser.rejected]: (state, action) => {
            state.loading = true
        },
 /*******************Sign in**********************/
 [getProfile.pending]: (state, action) => {
    state.loading = true
},
[getProfile.fulfilled]: (state, { payload: { error, body } }) => {
    state.loading = false;
    if (error) {
        state.error = error;
        console.log(error)

    }
    else {
        console.log(body)
        state.firstName = body.firstName;
        //state.lastName = lastName;
     
    }

}
,
[getProfile.rejected]: (state, action) => {
    state.loading = true
},
    }

}
)

export const {  logout } = authSlice.actions;
export default authSlice.reducer;