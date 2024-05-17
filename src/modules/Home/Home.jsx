import { useEffect, useState } from "react"
import { Categories, Hero, ProductCard, StatCard } from "../../Components"

const Home = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('https://fakestoreapi.com/products?limit=12')
      const data = await response.json()
      setProducts(data)
    }
    fetchProducts()
  }, [])
  return (
    <main>
      <Hero />
      <Categories />
      <div className="flex flex-col text-center w-full mt-20">
        <h2 className="text-xs text-blue-500 tracking-widest font-medium title-font mb-1">PRODUCTS</h2>
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">MOST POPULAR PRODUCT</h1>
      </div>
      {
        products.length > 0 ?
          <ProductCard products={products} />
          :
          <main>Loading ...</main>
      }
      <StatCard />
    </main>
  )
}
export default Home
