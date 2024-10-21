import React from "react";
import Navbar from "./components/Nabar/Navbar";
import Footer from "./components/footer/Footer";
// import Navbartemplate from './components/Nabar/Navbartemplate'

const App = ()=>{
  return(
    <>
      <div>
        <Navbar/>
        {/* <Navbartemplate/> */}
        <Footer/>
      </div>
    </>
  )
}

export default App