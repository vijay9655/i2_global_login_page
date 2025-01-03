import { useEffect, useState } from "react";
import Layout from "../src/app/layout";
import {useRouter} from "next/router";
import { Provider } from "react-redux";
import './global.css';

// import initializeStore from "../store";

import Nav from "../src/components/common/nav/Nav";
import { initializeStore } from '../store';
import { LOGIN_STATUS } from "../src/reducers/userReducers";

export default function MyApp({ Component, pageProps }) {
  
  const store = initializeStore(pageProps.initialReduxState); // Use preloaded state

  const router=useRouter();
  const [login,setLogin]=useState({})
  useEffect(()=>{
    let data=JSON.parse(localStorage.getItem("userlogin"));
    setLogin(data);
pageProps["userlogin"]=data;



if(data!=undefined){
  if(!pageProps.initialReduxState?.login){
 store.dispatch({
          type: LOGIN_STATUS,
        })
      }
  router.push("/")
}
else{
  const currentPageURL = router.asPath;
 
  const urls=["/login","/signup"]
  if(!urls.includes(currentPageURL)){
  router.push("/login")
  }
}
  },[])

  return (
    
    <Layout>
       <Provider store={store}>
        <Nav/>
      <Component userlogin={login} {...pageProps} />
    </Provider>
    </Layout>
   
  );
}
