import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    show: false
}

export const modalSlice = createSlice({
    name: "showModal",
    initialState,
    reducers:{
        showModal: (state, action) => {
            state.show = action.payload;
            console.log(`State.show = ${state.show}`)
        }

        
    }
 
})

export const {showModal} = modalSlice.actions;
export default  modalSlice.reducer;