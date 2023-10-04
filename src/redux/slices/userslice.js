"use client";
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    type: '',
    token: '',
    user: {},
    dashboard: {},
    stepData: {
        gender: '',
        country: '',
        company: '',
        years_of_experience: '',
        linked_in_url: '',
        twitter_url: '',
        about_me: '',
    },
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
        },
        logOutUser: (state, action) => {
            state.token = action.payload.token
            state.user = action.payload.user
        },
        registeredUser: (state, action) => {
            state.token = action.payload.token
            state.user = action.payload.user
        },
        saveStepData: (state, action) => {
            state.stepData = action.payload.formData
        },
        dashboardData: (state, action) => {
            state.dashboard = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { changeUserType, loggedInUser, logOutUser, registeredUser, saveStepData,dashboardData } = userTypeSlice.actions

export default userTypeSlice.reducer