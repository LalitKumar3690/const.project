import Header from "./components/HeaderSection/Header";
import Footer from "./components/footer/Footer";
import Mainsection from './components/main/Mainsection';
// import Navbartemplate from './components/Nabar/Navbartemplate'

const App = () => {
  return (
    <>
      <div>
        <Header />
        {/* <Navbartemplate/> */}
        <Mainsection/>
        <Footer />
      </div>
      
    </>
  );
};

export default App;
