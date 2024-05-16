import { useEffect, useState } from "react"
import { Categories, ProductCard } from "../../Components"


const Products = () => {

  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('https://fakestoreapi.com/products')
      const data = await response.json()
      setProducts(data)
    }
    fetchProducts()
  }, [])

  return (
    <main>
      <Categories />
      <div className="flex flex-col text-center w-full mt-20">
        <h2 className="text-xs text-blue-500 tracking-widest font-medium title-font mb-1">PRODUCTS</h2>
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">All PRODUCTS</h1>
      </div>
      {
        products.length > 0 ?
          <ProductCard products={products} />
          : <main>Loading</main>
      }
    </main>
  )
}
export default Products