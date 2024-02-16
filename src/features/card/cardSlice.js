import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
// import { openModal } from "../modal/ModalSlice"


const url = 'https://course-api.com/react-useReducer-cart-project'

const initialState = {
    cardItems: [],
    amount: 2,
    total: 0,
    isLoading: true,
}

export const getCartItems = createAsyncThunk('cart/getCartItems', async ({ firstName, lastName }, thunkAPI) => {
    try {
        // console.log(firstName, lastName)
        // console.log(thunkAPI.getState())
        // thunkAPI.dispatch(openModal())
        const response = await axios(url)
        return response.data
    } catch (error) {
        console.error('Error fetching data:', error)
    }
})


const cardSlice = createSlice({
    name: 'card',
    initialState,
    reducers: {
        clearCart: (state) => {
            state.cardItems = []
        },
        removeItem: (state, action) => {
            const itemId = action.payload
            state.cardItems = state.cardItems.filter(item => item.id !== itemId)
        },
        incease: (state, { payload }) => {
            const cartItem = state.cardItems.find(item => item.id === payload.id)
            cartItem.amount = cartItem.amount + 1
        },
        decrease: (state, { payload }) => {
            const cartItem = state.cardItems.find(item => item.id === payload.id)
            cartItem.amount = cartItem.amount - 1
        },
        calculateTotals: (state) => {
            let amount = 0
            let total = 0
            state.cardItems.forEach(item => {
                amount += item.amount
                total += item.amount * item.price
            })
            state.total = total
            state.amount = amount
        },
    },
    extraReducers: builder => {
        builder
            .addCase(getCartItems.pending, state => {
                state.isLoading = true
            })
            .addCase(getCartItems.fulfilled, (state, action) => {
                state.isLoading = false
                state.cardItems = action.payload
            })
            .addCase(getCartItems.rejected, state => {
                state.isLoading = false
            })
    }
})

export const { clearCart, removeItem, incease, decrease, calculateTotals } = cardSlice.actions
export default cardSlice.reducer