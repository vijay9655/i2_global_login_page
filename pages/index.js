import React, { useEffect, useState } from 'react';
import Table from '../src/components/table/Table';
import axios from 'axios';
import Login from './login';
import Nav from '../src/components/common/nav/Nav';
import { useSelector, useDispatch } from "react-redux";
import store from '../store';
import { FETCH_NOTES } from '../src/reducers/userReducers';

// Server-side data fetching using getServerSideProps
export async function getServerSideProps(pageProps) {
// const useDispatch=new useDispatch();
// let val=await store.dispatch(fetchUsers());


  try {
    
      
    // Fetching data from the mock API
    const response = await axios.get('https://62172d3871e7672e5375b02f.mockapi.io/vijayapi/login');
    const data = response.data;
    console.log("data==",data);
    store.dispatch({
      type: FETCH_NOTES,
      payload: data, // Use `payload` as it's more conventional for Redux actions
    });
    return {
      props: {
        // ...props,
        initialData: [],
        // login:false , // Passing initial data as a prop
        userdata:data
      },
    };
  } catch (error) {
    console.error('Error fetching data:', error);

    // Return empty data in case of an error
    return {
      props: {
        initialData: null,
        login:null,
        userdata:[]
      },
    };
  }
}

export  default function Index(props) {

  const { loading, users, error } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  
  
  const [data, setData] = useState(props.initialData); 
  const [login, setLogin] = useState(props.login);

  

  useEffect(() => {
    if (!data) {
      // const fetchData = async () => {
      //   try {
      //     const response = await axios.get('https://62172d3871e7672e5375b02f.mockapi.io/vijayapi/login');
      //     setData(response.data); 
      //   } catch (error) {
      //     console.error('Error fetching data:', error);
      //   }
      // };

      // fetchData(); 
    }
  }, [data]);
console.log("users===",users);

  return (

    <div>

      
      {!props.login?<Login  users={props.users} />:true? (
        <Table data={[]} /> 
      ) : (
        <p>Loading...</p> // Show a loading state if data is not available yet
      )}
    </div>
  );
}
