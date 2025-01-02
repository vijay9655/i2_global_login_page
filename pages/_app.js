import { useEffect, useState } from "react";
import Layout from "../src/app/layout";
import {useRouter} from "next/router";
import './global.css'
export default function MyApp({ Component, pageProps }) {
  const router=useRouter();
  const [login,setLogin]=useState({})
  useEffect(()=>{
    let data=JSON.parse(localStorage.getItem("userlogin"));
    setLogin(data);
pageProps["userlogin"]=data;


if(data!=undefined){
  router.push("/")
}
  },[])

  return (
    
    <Layout>
      
      <Component login={login} {...pageProps} />
    </Layout>
  );
}
