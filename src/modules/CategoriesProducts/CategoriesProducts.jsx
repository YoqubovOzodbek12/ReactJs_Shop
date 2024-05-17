import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { ProductCard } from "../../Components";

const CategoriesProducts = () => {
  const { name } = useParams();
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchGategories = async () => {
      const response = await fetch(`https://fakestoreapi.com/products/category/${name}`)
      const data = await response.json()
      setProducts(data)
    }
    fetchGategories()
  }, [])

  // if (products.length === 0) return <main>Loading ...</main>

  return (
    <main>
      {/* <ProductCard products={products}/> */}

      {products.length !== 0 ? <ProductCard products={products} /> : "Loading ..."}

    </main>
  )
}
export default CategoriesProducts