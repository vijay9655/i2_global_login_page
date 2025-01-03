import React, { useEffect, useState } from 'react';
import Table from '../src/components/table/Table';
import axios from 'axios';
import Login from './login';
import Nav from '../src/components/common/nav/Nav';
import { useSelector, useDispatch } from "react-redux";
// import store from '../store';
import { FETCH_NOTES } from '../src/reducers/userReducers';
import { initializeStore } from '../store';
import Home from '../src/components/Home';



export async function getServerSideProps(context) {
  const store = initializeStore(); // Create a new Redux store instance

  try {
    // Fetch data from the mock API
    const response = await axios.get('https://62172d3871e7672e5375b02f.mockapi.io/vijayapi/login');
    const data = response.data;


    // Dispatch action to populate the store
    store.dispatch({
      type: FETCH_NOTES,
      payload: data,
    });

    // Extract the updated state from the store
    const state = store.getState().users;

let day="";
const currentHour = new Date().getHours();

    if (currentHour >= 5 && currentHour < 12) {
     day="Good Morning";
    } else if (currentHour >= 12 && currentHour < 17) {
      day="Good Afternoon";
    } else if (currentHour >= 17 && currentHour < 21) {
      day="Good Evening";
    } else {
      day="Good Night";
    }
    return {
      props: {
        initialReduxState: state,
        day:day // Pass the server-side state to the component
      },
    };
  } catch (error) {
    console.error('Error fetching data:', error);

    return {
      props: {
        initialReduxState: {
          users: { users: [] }, // Ensure a default structure for the Redux state
        },
      },
    };
  }
}

export  default function Index(props) {

  const users = useSelector((state) => state); // Access state from Redux
  const loginstatus= useSelector((state) => state.login); // Access state from Redux


  
  const [data, setData] = useState(props.initialData); 
  const [login, setLogin] = useState(props.login);

  


const getname=(user)=>{
let authuser=[]

  if(users&&user.userlogin){

    let valid=user.userlogin;

users?.users.map((e)=>{

 if(e.data&&e.data.email==valid.name&&e.data.password==valid.password){

  authuser.push(e);
 }
    })
  }

  
 return authuser;
}
  return (

    <div>

      
      {/* {!props.login?<Login  users={props.users} />:true? (
        <Table data={[]} /> 
      ) : (
        <p>Loading...</p> // Show a loading state if data is not available yet
      )} */}
             {/* <Table data={[]} />  */}
             <Home name={getname(props)} props={props}/>

    </div>
  );
}
