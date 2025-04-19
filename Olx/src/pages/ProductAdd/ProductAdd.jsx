import React from 'react'
import './ProductAdd.css'
import Olxlogo from '../../assets/OlxLogo'

function ProductAdd() {
  return (
    <div className='login'>
    <div className='inner-login'> 

    <div className='logo'>
        <Olxlogo />
    </div>

    <div className='loginform'>
      <form>
      <div className='formGroup'>
          <label htmlFor="">Product Name:</label>
          <input type="text" placeholder='Enter your Product Name'/>
          </div>
        
          <div className='formGroup'>
          <label htmlFor="">Category:</label>
          <input type="text" placeholder='Enter Category' />
          </div>
         
          <div className='formGroup'>
          <label htmlFor="">Price:</label>
          <input type="text"  placeholder='Enter Price'/>
          </div>
            
          <div className='formGroup'>
          <label htmlFor="">Choose image:</label>
          <input type="file"
                id="image"
                accept="image/*"
                required />
          </div>

          <button type='submit' className='signupBtn'>Add Product</button>
      </form>
     
    </div>
    </div>
  </div>
  )
}

export default ProductAdd
