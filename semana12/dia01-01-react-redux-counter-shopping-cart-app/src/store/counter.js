// Slice: Parte del estado global
//reducers: funciones que cambian el estado
//Actions: acciones que se disparan para cambiar el estado
//Payload: datos que se envían con la acción
import { createSlice } from "@reduxjs/toolkit"

export const counterSlice = createSlice({
  name: 'Counter',
  initialState: 67,
  reducers: {
    // Sin parametros (sin payload)
    increment: (state) => {//Actions
      return state += 1
    },
    decrement: (state) => {
      return state -= 1
    },
    incrementBy: (state, action) => {
      return state += action.payload
    }
  }

})

export const { increment, decrement, incrementBy } = counterSlice.actions

export default counterSlice.reducer