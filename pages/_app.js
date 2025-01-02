import { useEffect, useState } from "react";
import Layout from "../src/app/layout";
import {useRouter} from "next/router";
import { Provider } from "react-redux";
import './global.css'
import store from "../store";
import Nav from "../src/components/common/nav/Nav";
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
      <Provider store={store}>
      <Nav />
      <Component  login={login} {...pageProps} />
      </Provider>
    </Layout>
   
  );
}
