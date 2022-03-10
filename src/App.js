import { BrowserRouter as Router } from "react-router-dom";
import Hero from "./components/Hero";
import {productData} from './components/Hero/data';

import { GlobalStyle } from "./globalStyles";

function App() {
  return (
    <Router>
    <GlobalStyle/>
    <Hero data={productData}/>
   
    </Router>
  );
}

export default App;
