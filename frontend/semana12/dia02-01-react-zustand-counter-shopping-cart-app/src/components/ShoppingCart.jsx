import { useSelector, useDispatch } from "react-redux"
import { removeFromCart, clearCart } from "../store/cart.js"

// TODO: Renderizar los productos añadir al carrito de compras según la maquetación de abajo

// TODO: Calcular el total a pagar en la sección de carrito sumando el precio y su cantidad 

const ShoppingCart = () => {
  const cart = useSelector(state => state.cart)
  const dispatch = useDispatch()

  const total = cart.reduce((acc, product) => {
    const quantity = product.quantity
    const price = product.price
    const subtotal = quantity * price

    return acc + subtotal
  }, 0)

  const isCartEmpty = cart.length === 0

  if (isCartEmpty) {
    return (
      <section className="w-56 p-2">
        <h3 className="text-2xl mb-2 text-center">Shopping Cart</h3>
        <div className="mb-2 bg-slate-300 h-32 rounded-lg p-4 flex flex-col items-center gap-2">
          <span className="text-3xl">🛒</span>
          <p className="text-lg text-center text-slate-500">Shopping cart empty</p>
        </div>
      </section>
    )
  }

  return (
    <section className="w-56 p-2">
      <h3 className="text-2xl mb-2 text-center relative">
        ShoppingCart
        <div className="bg-red-600 text-white w-6 h-6 text-base rounded-full absolute right-0 top-0">{cart.length}</div>
      </h3>
      <div>
        <button
          className="bg-red-400 p-2 min-w-36 rounded-lg cursor-pointer text-white font-bold hover:bg-red-500 duration-300 w-full"
          onClick={() => dispatch(clearCart())}
        >
          Limpiar carrito
        </button>
      </div>
      <ul className="flex flex-col gap-4">
        {cart.map(product => {
          return (
            <li
              key={product.id}
              className="flex flex-col gap-2 font-bold bg-slate-200 p-2 rounded-lg shadow"
            >
              <span>{product.title}</span>
              <span>S/. {product.price} (Qty: {product.quantity})</span>
              <button
                className="bg-red-400 p-2 min-w-36 rounded-lg cursor-pointer text-white font-bold hover:bg-red-500 duration-300"
                onClick={() => dispatch(removeFromCart(product.id))}
              >
                ❌
              </button>
            </li>
          )
        })}
      </ul>
      <div className="mt-4 pt-4 font-bold bg-amber-100 px-4 py-2 flex justify-between rounded-lg">
        <strong>TOTAL:</strong> <span>S/. {total}</span>
      </div>

      <pre>{JSON.stringify(cart, null, 2)}</pre>
    
    </section>
  )
}

export default ShoppingCart