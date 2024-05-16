import { useEffect, useState } from "react"
import Features from "../Features"

const Categories = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    const fetchGategories = async () => {
      const response = await fetch(`https://fakestoreapi.com/products/categories`)
      const data = await response.json()
      setCategories(data)
    }
    fetchGategories()
  }, [])

  if(categories.length === 0) return <main>Loading ...</main> 

  return (
    <main>
      <Features cards={categories}/>
    </main>
  )
}
export default Categories