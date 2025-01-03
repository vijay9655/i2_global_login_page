import React from 'react'
import Loginform from "../src/components/common/Login"
import { initializeStore } from '../store';
import axios from 'axios';
import { FETCH_NOTES } from '../src/reducers/userReducers';
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


    return {
      props: {
        initialReduxState: state, // Pass the server-side state to the component
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
const Login = (users) => {


  return (
<Loginform users={users.users}/>
  )
}

export default Login