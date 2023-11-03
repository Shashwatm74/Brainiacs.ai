import React from 'react';
import { useRouter } from 'next/router';
import '@/styles/globals.scss';
import Nav from '@/components/nav';
import Footer from '@/components/footer';



export default function App({ Component, pageProps }) {
  const router = useRouter();
  let dashBoard = router.route;
  if (dashBoard.match("/dashboard")) {
    dashBoard = true;
  }
  else {
    dashBoard = false;
  }
  if (dashBoard) {
    return (
      <>
        {/* <Nav /> */}
        <Component {...pageProps} />
        {/* <Sidebar /> */}
        <Footer />

      </>
    )
  }
  else {
    return (
      <>
        <Nav />
        <Component {...pageProps} />
      </>
    )
  }
}
