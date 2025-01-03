// pages/[slug].js
import React from 'react';
import Notfound from './404'; // Assuming you have a custom 404 component
import { useRouter } from "next/router"
const DynamicPage = ({ slug, statusCode }) => {

const router =useRouter();
  if (statusCode === 404) {
    return router.push("/");
  }

  return <h1>Dynamic Page for {slug}</h1>;
};

// Fetch data or check if page exists
export async function getServerSideProps({ params }) {
  const { slug } = params;


  // Logic to check if the page exists
  const isPageValid = await checkIfPageExists(slug);

  if (!isPageValid) {
    // Return 'notFound: true' to trigger Next.js built-in 404 page
    return {
      notFound: true,
    };
  }

  return {
    props: {
      statusCode: 200, // Page is valid, return status 200
      slug,
    },
  };
}

async function checkIfPageExists(slug) {
  // Example: replace this with your own logic to check if the page exists
  return slug !== '404'; // If the slug is '404', we consider the page invalid
}

export default DynamicPage;
