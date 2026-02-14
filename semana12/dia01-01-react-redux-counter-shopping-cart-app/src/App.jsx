import { useEffect, useState } from "react"
import Counter from "./components/Counter"
import ProductList from "./components/ProductList"
import ShoppingCart from "./components/ShoppingCart"

const App = () => {
    // TODO: Listar los productos de la siguiente api: "https://dummyjson.com/products" guardenlo en un useState. No usar Redux por el momento
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://dummyjson.com/products")
      return await response.json()
    }

    fetchProducts()
    .then(data => setProducts(data.products))
  }, [])
  return (
    <main className="flex flex-col gap-8 p-4">
      
      <section className="flex">
        <ProductList products={products} />
        <ShoppingCart />
      </section>
      
      <Counter />
      <Counter />
    </main>
  )
}

export default App