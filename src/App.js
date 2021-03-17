import { createContext, useState } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Shipment from './Components/Shipment/Shipment';

export const CategoryContext=createContext();

function App() {
  const[count,setCount]=useState(0);
  const handleIns=()=>{
    const newCount=count+1;
     setCount(newCount);
  }
  
  return (
    <CategoryContext.Provider value={count}>
     <Home count={count}></Home>
     <Header count={count} handleIns={handleIns}></Header>
     <Shipment></Shipment>
    </CategoryContext.Provider>
  );
}

export default App;
