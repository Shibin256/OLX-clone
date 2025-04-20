import React, { useEffect, useState } from 'react'
import './Product.css'
import Heart from '../../assets/Heart'
import OlxLogo from '../../assets/OlxLogo'
import { db } from "../../firebase/firebase";
import { collection, getDocs } from 'firebase/firestore'

function Products() {
  const [olxProducts, setProducts] = useState([])

  const fetchProducts = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "products"))
      const productList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(), // Extract document data
      }))
      setProducts(productList)
    } catch (err) {
      console.error("Error fetching products:", err)
    }
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <div className='productsDiv'>
      <div className='productSubDiv'>
        <div className='heading'>
          <h2>Fresh recommendations</h2>
        </div>

        {olxProducts.length === 0 ? (
          <p>No products available</p>
        ) : (
          olxProducts.map((product) => (
            <div className='card' key={product.id}>
              <div className='favorate'>
                <Heart />
              </div>
              <div className='image'>
                <img src={product.image} className='image-inside' alt={product.name} />
              </div>
              <div className='content'>
                <p className='rate'>&#x20B9;{product.price}</p>
                <p className='kilometer'>{product.category}</p>
                <p className='name'>{product.name}</p>
              </div>
              <div className='date'>
                <p>10/12/2025</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default Products
