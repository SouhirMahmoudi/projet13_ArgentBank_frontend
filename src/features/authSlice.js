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
        method: "POST",
        headers: {
            'content-type': "application/json",
        },

        body: JSON.stringify(body)
    })
    
    return await response.json();

})
export const getProfile = createAsyncThunk('getprofile', async (payload) => {
    const response = await fetch("http://localhost:3001/api/v1/user/profile", {
        method: "POST",
        headers: {
            Authorization: `Bearer ${payload.Jwt}`
        },
    })
   console.log(response)
    return await response.json();

})
export const EditUserInfos = createAsyncThunk('edituserinfos', async (payload) => {
    const response = await fetch("http://localhost:3001/api/v1/user/profile", {
        method: "PUT",
        headers: {
            Authorization: `Bearer ${payload.Jwt}`,
           'Content-Type':'application/json',
        },
        body: JSON.stringify({firstName :payload.UserInfos.firstname, lastName: payload.UserInfos.lastname})
    })
   console.log(payload)
    return await response.json();

})

const authSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {

    
        logout: (state, action) => {
            state.token = ""
            state.firstName=""
            state.lastName=""
            state.logedIn= false;
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
                state.logedIn = true;
                state.token = body.token;
                localStorage.setItem('token', body.token)
                
            }
           
        }
        ,
        [signInUser.rejected]: (state, action) => {
            state.loading = true
        },
 /*******************getProfil**********************/
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
        state.logedIn = true;
        state.firstName = body.firstName;
        state.lastName = body.lastName;
     
    }

}
,
[getProfile.rejected]: (state, action) => {
    state.loading = true
},


 /******************EditUserInfos**********************/
 [EditUserInfos.pending]: (state, action) => {
    state.loading = true
},
[EditUserInfos.fulfilled]: (state, { payload: { error, body} }) => {
    state.loading = false;
   
    if (error) {
        state.error = error;
        console.log(error)

    }
    else {
        state.firstName = body.firstName;
        state.lastName = body.lastName;
        state.logedIn = true;
        
    }
   
},
[EditUserInfos.rejected]: (state, action) => {
    state.loading = true
}
    }

}
)

export const {  logout } = authSlice.actions;
export default authSlice.reducer;