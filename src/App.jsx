import Header from "./components/HeaderSection/Header";
// import Footer from "./components/footer/Footer";
import Aboutus from './components/aboutus/Aboutus';
import { ScrollProvider } from './components/context/ScrollContext';
import Mainsection from './components/main/Mainsection';
// import Navbartemplate from './components/Nabar/Navbartemplate'
// import Aboutus from "./components/aboutus/Aboutus";
// import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';


const App = () => {
  return (
    // <ScrollProvider>
    //   <Mainsection/>
    //   <Header/>
    //   <Aboutus/>
    // </ScrollProvider>
      <div className=''>
      
        <Mainsection/>
        {/* <Footer/> */}
        {/* <Aboutus/> */}
      </div>
  );
};

export default App;
