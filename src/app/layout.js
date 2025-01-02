import { Suspense } from "react";
import Home from "../components/page";  // Your Home component           // Your custom NotFound component, if needed
import Custom404 from "@/404";

// components/layout.js
export default function Layout({ children }) {

  
  return (
   
   
      // <Suspense fallback=>
        // <Home> {children} </Home>
      children

      // </Suspense>
     
  );
}
