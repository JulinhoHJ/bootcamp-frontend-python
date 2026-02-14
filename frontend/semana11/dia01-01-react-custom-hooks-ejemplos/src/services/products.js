export const fetchProducts = async () => {
  const response = await fetch('https://dummyjson.com/products?delay=2000')

  return response.json()
}