//NOTA: Este archivo es el lugar donde vivirá nuestro estado global
import { configureStore } from "@reduxjs/toolkit"
import counterReducer from "./counter.js"
import cartReducer from "./cart.js"

export const store = configureStore({
  //Aqui va la configuración y los reducers
  reducer: {
    counter: counterReducer,
    cart: cartReducer
  },
})