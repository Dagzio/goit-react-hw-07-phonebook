import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const BASE_URL = "https://648769eebeba629727909b06.mockapi.io/contacts";

export const fetchContacts = createAsyncThunk("contacts/fetchAll", async (_, thunkAPI) => {
    try{
        const response = await axios.get(`${BASE_URL}/contacts`);
    return console.log(response.data);
    }
    catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
    
});