import React, { useState } from 'react'
import './ProductAdd.css'
import { useNavigate } from "react-router-dom";
import Olxlogo from '../../assets/OlxLogo'
import Navbar from '../../components/Navbar/Navbar'
import { addProduct } from '../../firebase/firebase';

function ProductAdd() {
  const navigate = useNavigate();

    const [name,setName]=useState('')
    const [category,setCategory]=useState('')
    const [price,setPrice]=useState('')
    const [img,setImg]=useState(null)
    const [loading, setLoading] = useState(false);
    const [imagePreview, setImagePreview] = useState(null);

    const handleImageUpload= async (file)=>{
        
    const cloudName="dxdrlcib2"
    const uploadPreset="Product_deatials"
    
        const formData=new FormData();
        formData.append("file",file);           //"file" is the fixed keyword for cloudinary
        formData.append("upload_preset",uploadPreset);
        formData.append("folder", "olx-clone"); // Specify folder
        formData.append("resource_type", "image"); // Ensure image type
        //  data.append("cloud_name","dxdrlcib2");
         try{
         const res=await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,{
            method:"POST",
            body:formData
         });

         const data= await res.json();
         if (data.secure_url) {
            return data.secure_url;
          } else {
            throw new Error("Failed to upload image");
          }
        } 
        catch (err) {
          console.error("Error uploading image:", err);
          throw err;
        }
    }


    const handleSubmit= async (e)=>{
        e.preventDefault();
        setLoading(true);

        try{
            let imageUrl=''
            if (img) {
                imageUrl = await handleImageUpload(img);
              }
            // const imageUrl=handleImageUpload();
            const product={
                name,
                category,
                price,
                image:imageUrl,
            }
            console.log("Product submitted:", product);
        
            await addProduct(product);
            navigate("/");
        }catch(err){
            console.error("Upload failed", err);
        }finally{
            setLoading(false);
        }
    }


  return (
    <>    
    <Navbar />
    <div className='login' style={{ paddingTop: '70px' }}>
    <div className='inner-login'> 

    <div className='logo'>
        <Olxlogo />
    </div>

    <div className='loginform'>
      <form onSubmit={handleSubmit}>
      <div className='formGroup'>

          <label>Product Name:</label>
          <input value={name} onChange={(e)=>setName(e.target.value)} type="text" placeholder='Enter your Product Name' id="name" required/>
          </div>
        
          <div className='formGroup'>
          <label>Category:</label>
          <input value={category} onChange={(e)=>setCategory(e.target.value)} type="text" placeholder='Enter Category' id="category" required />
          </div>
         
          <div className='formGroup'>
          <label htmlFor="">Price:</label>
          <input value={price} onChange={(e)=>setPrice(e.target.value)} type="number"  placeholder='Enter Price' id="price" required/>
          </div>

          <div className='formGroup'>
          <label htmlFor="image">Choose image:</label>
          <input 
          type="file"
          accept="image/*"
          id="image"
          onChange={(e) => {
            const file = e.target.files?.[0] || null;
            setImg(file);
            if (file) {
              setImagePreview(URL.createObjectURL(file));
            } else {
              setImagePreview(null);
            }
          }}
          required />
          </div>

          {imagePreview && (
              <div className="image-preview">
                <img
                  src={imagePreview}
                  alt="Preview"
                  className="imagePreview"
                />
              </div>
            )}

          <button type='submit' disabled={loading} className='signupBtn'>{loading ? "Uploading..." : "Add Product"}</button>
     
      </form>
     
    </div>
    </div>
  </div>
    </>

  )
}

export default ProductAdd
