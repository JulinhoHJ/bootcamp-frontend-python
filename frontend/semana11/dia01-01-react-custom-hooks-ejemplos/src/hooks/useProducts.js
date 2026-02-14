import { useState } from "react"
import { useEffect } from "react"
import { fetchProducts } from "../services/products"

export const useProducts = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)

  // TODO: Leer los productos y listarlos desde el servicio de dummyjson (https://dummyjson.com/products).
  useEffect(() => {
    setLoading(true)
    
    fetchProducts()
      .then(data => setProducts(data.products))
      .finally(() => {
        setLoading(false)
      })
  }, [])

  return {
    products,
    loading
  }
}