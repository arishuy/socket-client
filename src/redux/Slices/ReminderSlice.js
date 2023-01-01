import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "axios";

export const getAllRemindersAsync = createAsyncThunk(
    "reminder/getAllRemindersAsync",
    async () => {
        const data = await Axios.get(`https://chat-web-vz9a.onrender.com/api/reminder/getallreminders`, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        });
        return data;
    }
);

export const createNewReminderAsync = createAsyncThunk(
    "reminder/createNewReminderAsync",
    async (payload) => {
        const response = await Axios.post(
            `https://chat-web-vz9a.onrender.com/api/reminder/addreminder`,
            payload,
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            }
        );
        const reminder = response.data;
        return reminder;
    }
);

export const deleteReminderAsync = createAsyncThunk(
    "reminder/deleteReminderAsync",
    async (id) => {
        const response = await Axios.delete(
            `https://chat-web-vz9a.onrender.com/api/reminder/deletereminder/${id}`,
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            }
        );
        const reminder = response.data;
        return reminder;
    }
);

export const updateReminderAsync = createAsyncThunk(
    "reminder/updateReminderAsync",
    async (payload) => {
        const response = await Axios.put(
            `https://chat-web-vz9a.onrender.com/api/reminder/updatereminder/${payload.id}`,
            payload,
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            }
        );
        const reminder = response.data;
        return reminder;
    }
);

const ReminderSlice = createSlice({
    name: "reminder",
    initialState: {},
    reducers: {},
    extraReducers: {
        [getAllRemindersAsync.fulfilled]: (state, action) => {
            state = action.payload.data.data;
            return state;
        }
    },
});

//export const {  } = ReminderSlice.actions;
export default ReminderSlice.reducer;