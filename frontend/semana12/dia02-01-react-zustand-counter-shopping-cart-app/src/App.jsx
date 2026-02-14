import Counter from "./components/Counter"

const App = () => {
  // TODO: Listar los productos de la siguiente api: "https://dummyjson.com/products" guardenlo en un useState. No usar Redux por el momento
  return (
    <main className="flex flex-col gap-8 p-4">
      
      <section className="flex">
        {/* <ProductList products={products} />
        <ShoppingCart /> */}
      </section>
      
      <Counter />
      <Counter />
    </main>
  )
}

export default App