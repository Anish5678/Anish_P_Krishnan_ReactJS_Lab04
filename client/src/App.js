import React from 'react';
import{ Home } from "./components/Home";
import 'bootstrap/dist/css/bootstrap.min.css';

import { Header } from "./components/Header";




function App() {
  return (
   <div className="App">

  
    {<Header></Header>}
    {<Home></Home>}
   </div>


  );
}

export default App;
