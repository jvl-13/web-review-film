import { createSlice } from '@reduxjs/toolkit'

// export interface UserSlice {
//     value : userId
// }
const initialState = {
    username: null,
    userId: null,
    accessToken: null,
    role: 0
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setGuest: (state) => {
            state.userId = null
            state.accessToken = null
            state.username = null
            state.role = 0
        },
        setUserAccess: (state, action) => {
            state.userId = action.payload.user
            state.accessToken = action.payload.token
            state.username = action.payload.name
            state.role = action.payload.role
        }
    }
})

export const {setGuest, setUserAccess} = userSlice.actions

export default userSlice.reducer
