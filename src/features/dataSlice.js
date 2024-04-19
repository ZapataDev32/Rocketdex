import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    id: 1,
    apiData: {}
}

export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        setData: (state, action) => {
            return {...state, apiData: action.payload}
        },
        clearData: () => {
            return intialState
        },
        inputId: (state, action) => {
            return {...state, id: action.payload}
        },
        incrementId: (state) => {
            // if small enough, allow addition of 1
            let value = (state.id + 1) <= 1025 ?  1 : 0 
            return {...state, id: state.id + value}
        },
        decrementId: (state) => {
            // if big enough, allow subtraction of 1
            let value = (state.id - 1) > 0 ?  1 : 0 
            return {...state, id: state.id - value}
        }
    }
})

export const { setData, clearData, incrementId, decrementId, inputId } = dataSlice.actions
// dataSlice.actions.incrementId()
export const fetchData = () => {
    const fetchDataThunk = async (dispatch, getState) => {
        let state = getState()
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${state.data.id}/`)
        const rData = await response.json()
        dispatch(setData(rData))
    }
    return fetchDataThunk
}

export default dataSlice.reducer