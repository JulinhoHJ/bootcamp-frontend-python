import { createSlice } from "@reduxjs/toolkit"

export const cartSlice = createSlice({
  name: "Cart",
  initialState: [
 /*    {
      id: 1,
      title: "Product 1",
    },
    {
      id: 2,
      title: "Product 2",
    },
    {
      id: 3,
      title: "Product 3",
    } */
  ],
  reducers: {
    addToCart: (state, action) => {
      //Aqui añadiremos la logica para añadir un producto al carrito de compras
      //En action payload esta la información del producto(objeto)
      console.log('addToCart', action.payload)

      const newProduct = action.payload
      // Validar que el producto no este repetido en el carrito
      const productInCartIndex = state.findIndex(
        product => product.id === newProduct.id
      ) // Si encuentra el elemento devuelve su indice y si no devuelve -1
      if (productInCartIndex >= 0) {
        // Si el producto ya está en el carrito, lo incrementamos en la cantidad
        return state.map(
          product => {
            if (product.id === newProduct.id) {
              return{
                ...product,
                quantity: product.quantity + 1
              }
            }
            return product
          }
        )
      }
      // Cuando el producto es nuevo en el carrito, lo añadimos al estado directamente
      return [
        ...state,
        {
          ...newProduct,
          quantity: 1
        }
      ]
    },
    removeFromCart: (state, action) => {
      // Va la logica para eliminar un producto del carrito
      console.log('removeFromCart', action)
      // TODO: Remover el producto del carrito de compras con el id del producto a eliminar
      const productId = action.payload
      return state.filter(
        product => product.id !== productId
      )
    },
    clearCart: (state) => {
      // Va la logica para limpiar todo el carrito de compras
      // TODO: Limpiar el carrito de compras
      console.log(state)
      return []
    }
  }
})

// Exportar el estado incial y los reducers del slice
export const { addToCart, removeFromCart, clearCart } = cartSlice.actions

export default cartSlice.reducer