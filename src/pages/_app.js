'use client';
import Providers from "@/redux/Providers";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./globals.css"; // Update the path to your global CSS file
import { useState,useEffect } from "react";
import { accessToken, getValidToken } from "@/utilities/tokenClient";
import { redirect, useRouter } from "next/navigation";
import { logUserOut } from "@/utilities/apiClient";


function MyApp({ Component, pageProps }) {
  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = async (url) => {
      console.log('url',url)
      // Add your own logic here to check if the user is authenticated
      const userIsAuthenticated = await getValidToken();

      // if (!userIsAuthenticated && url === '/protected-page') {
      if (!userIsAuthenticated) {
        router.replace('/auth/mentorlogin');
      }
    };
    // handleRouteChange()
    // router.events.on('routeChangeStart', handleRouteChange);

    // return () => {
    //   router.events.off('routeChangeStart', handleRouteChange);
    // };
  }, []);
  // Any additional layout or components you want to wrap around your pages

  return (
    <Providers>
      <Component {...pageProps} />
      <ToastContainer />
    </Providers>
  );
}

export default MyApp;
