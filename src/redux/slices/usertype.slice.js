"use client";
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    type: 'mentor',
}

export const userTypeSlice = createSlice({
    name: 'user_type',
    initialState,
    reducers: {
        changeUserType: (state, action) => {
            state.type = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { changeUserType } = userTypeSlice.actions

export default userTypeSlice.reducer