import React, { useEffect, useState } from 'react';
import Table from '../src/components/table/Table';
import axios from 'axios';
import Login from './login';

// Server-side data fetching using getServerSideProps
// export async function getServerSideProps(pageProps) {

// if (typeof window !== 'undefined') {
//   // your code 
//     const id = query.id;
//       const getData = JSON.parse(localStorage.getItem("userlogin"));

    
//   }

//   try {
    
    
//     // Fetching data from the mock API
//     // const response = await axios.get('https://62172d3871e7672e5375b02f.mockapi.io/vijayapi/login');
//     // const data = response.data;
//     return {
//       props: {
//         // ...props,
//         initialData: [],
//         login:true , // Passing initial data as a prop
        
//       },
//     };
//   } catch (error) {
//     console.error('Error fetching data:', error);

//     // Return empty data in case of an error
//     return {
//       props: {
//         initialData: null,
//         login:null
//       },
//     };
//   }
// }

export default function Index(props) {

  
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


  return (

    <div>
      {!props.login?<Login />:true? (
        <Table data={[]} /> 
      ) : (
        <p>Loading...</p> // Show a loading state if data is not available yet
      )}
    </div>
  );
}
