"use client";
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    type: 'mentor',
    token: '',
    user: {},
}

export const userTypeSlice = createSlice({
    name: 'user_type',
    initialState,
    reducers: {
        changeUserType: (state, action) => {
            state.type = action.payload
        },
        loggedInUser: (state, action) => {
            state.token = action.payload.token
            state.user = action.payload.user
        }
    },
})

// Action creators are generated for each case reducer function
export const { changeUserType,loggedInUser } = userTypeSlice.actions

export default userTypeSlice.reducer