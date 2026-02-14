import { useProducts } from "../hooks/useProducts"

const ProductList = () => {
  const { products, loading } = useProducts()

  // Conditional rendering
  if (loading) {
    return (
      <div>
        Cargando productos...
      </div>
    )
  }

  return (
    <div>
      <h2>Product list</h2>

      <ul>
        {products.map(product => {
          return (
            <li key={product.id}>
              <h4>{product.id} - {product.title}</h4>
              <p>{product.description}</p>
              <img src={product.thumbnail} />
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default ProductList