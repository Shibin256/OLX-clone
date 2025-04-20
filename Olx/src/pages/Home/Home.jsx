import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import Subnavbar from '../../components/SubNavbar/Subnavbar'
import Products from '../../components/ProdectsCard/Products'

function Home() {
  return (
    <div>
      <Navbar />
      <div  style={{ paddingTop: '70px' }}>      
        <Subnavbar />
      <Products />
        <Footer />
        </div>

    </div>
  )
}

export default Home
