import React from 'react'
import './Product.css'
import Heart from '../../assets/Heart'
import OlxLogo from '../../assets/OlxLogo'

function Products() {
  return (
    <div className='productsDiv'>
      <div className='productSubDiv'>
        <div className='heading'>
            <h2>Fresh recommendations</h2>
        </div>

        <div className='card'>
          <div className='favorate'>
                <Heart />
          </div>
              <div className='image'>
                <OlxLogo />
                <img src="" alt="" />
              </div>
          <div className='content'> 
            <p className='rate'>5000</p>
            <p className='kilometer'>car</p>
            <p className='name'>supra</p>
          </div>
          <div className='date'>
          <p>10/12/2025</p>
        </div>
        </div>
        </div>
    </div>
  )
}

export default Products
