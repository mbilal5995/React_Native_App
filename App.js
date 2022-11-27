import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import Dashboard from "./Components/Dashboard";
import Splash from "./Components/Splash";

export default function App() {
   const [visible, setVisible]= useState(true);
   
   setTimeout(() => {
    setVisible(false);
   }, 3000); 
  
   return (
      <>
        {visible && <Splash/>}
       {!visible && <Dashboard />}
      </>
  );
}

