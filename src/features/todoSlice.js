import { createSlice } from '@reduxjs/toolkit'

const initailState = {
    todoList: []

}

const todoSlice = createSlice({
    name: todos,
    initialState,
    reducers: {
        saveTodo: (state, action) => {
            state.todoList.push(action.payload)

        }

    }
})

export const { } = todoSlice.actions

export default todoSlice.reducer