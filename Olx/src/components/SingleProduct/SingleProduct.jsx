import React, { useEffect, useState } from 'react'
import './SingleProduct.css'
import { doc, getDoc } from 'firebase/firestore';
import { useParams } from 'react-router-dom'
import { db } from '../../firebase/firebase';

function SingleProduct() {
    const {id}=useParams();

    const [product, setProduct] = useState(null);

    const fetchProductDetails= async ()=>{
    const productDoc = doc(db, "products", id);
    const docSnap = await getDoc(productDoc);
    
    if(docSnap.exists()){
        setProduct(docSnap.data())
    }else{
        console.log("No such product!");
    }
    }

    useEffect(() => {
        fetchProductDetails();
      }, [id]);

    if (!product) {
        return <div>No product found.</div>;
      }
  return (
    <div className='mainDiv'>
      <div className='innerDiv'>
            <div className='image'>
                <img src={product.image} className='inside-img' alt={product.name}/>
                {console.log(product.image)}
            </div>
            <div className='content'>
                <div className='price-deatials'>
                <p>&#x20B9; {product.price}</p>
                 <span>{product.name}</span>
                 <p>{product.category}</p>
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
