
import './App.css';
import WebFont from "webfontloader"
import React from "react"
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'




import { Routing } from './Routes/Routing';

function App() {

 React.useEffect(() => {
    WebFont.load({
      google: {
        families: ["Manrope", "sans - serif"]
      },
    });
  }, []);

  return (
    <>
      <Navbar/>
      < Routing/>
      <Footer/>

    </>
  );
}

export default App;
