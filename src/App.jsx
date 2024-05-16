import { Footer, Header } from "./Components"
import { Routes, Route, Navigate } from 'react-router-dom'
import { Cart, CategoriesProducts, Home, NotFound, Product, Products } from "./modules"

const App = () => {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/products" element={<Products />} />
        <Route path="/categories/:name" element={<CategoriesProducts />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
      <Footer />
    </>
  )
}
export default App