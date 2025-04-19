import React from 'react'
import './SingleProduct.css'
import OlxLogo from '../../assets/OlxLogo'
function SingleProduct() {
  return (
    <div className='mainDiv'>
      <div className='innerDiv'>
            <div className='image'>
                <OlxLogo />
            </div>
            <div className='content'>
                <div className='price-deatials'>
                <p>&#x20B9; product.price</p>
                 <span>product.productName</span>
                 <p>product.category</p>
                 <span>Tue May 04 2021</span>
                </div>
                <div className='seller-deatials'>
                <p>Seller details</p>
                <p>No name</p>
                <p>1234567890</p>
                </div>
            </div>
      </div>
    </div>
  )
}

export default SingleProduct
