import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    medals:[]
}


const MedalsSlice = createSlice({
    name:"medals",
    initialState,
    reducers:{

       addMedals:(state,action) =>{
        const newId = action.payload
        state.medals.push(newId)
       },

       deleteMedals:(state,action) =>{
        const deleteId = action.payload
        state.medals = state.medals.filter((medal)=>medal.id!==deleteId)
       },

       updateMedals:(state,action) =>{
        const updateId = action.payload 

        const index = state.medals.findIndex((medal)=>medal.country===updateId.country)
        if(index!== -1) {
            state.medals[index] = updateId
        }
       },
        
    }
})


export const {addMedals, deleteMedals, updateMedals}  = MedalsSlice.actions
export default MedalsSlice.reducer