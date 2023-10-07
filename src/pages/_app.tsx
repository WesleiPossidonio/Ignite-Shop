'use client';
import { AppProps } from 'next/app'
import { globalStyles }  from '../style/global'

import { Container } from '../style/pages/app'
import { CartContextProvider } from '../context/card'
import Cart from '../component/cart';
import Header from '../component/header';

globalStyles()

 function MyApp({Component, pageProps}: AppProps){
  return (
    <CartContextProvider>
      <Container> 
        <Header />
        <Cart />
        <Component {...pageProps}/>
      </Container>
   </CartContextProvider>
  ) 
}


export default function App(props: AppProps) {
  return (
    <CartContextProvider>
      <MyApp {...props} />
    </CartContextProvider>
  );
}


 