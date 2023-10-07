
import Image from "next/image";
import { useKeenSlider } from 'keen-slider/react'
import { ContainerCart, Footer, HomeContainer, Product } from "../style/pages/home";
import 'keen-slider/keen-slider.min.css'
import { stripe } from "../lib/stripe";
import { GetStaticProps } from "next";
import Stripe from "stripe";
import Link from "next/link";
import Head from "next/head";
import { Handbag } from "phosphor-react";
import { useCartProvider } from "../context/card";

interface HomeProps {
  products: {
    id: string
    name: string;
    imageUrl: string;
    price: string;
    defaultPriceId: string,
  }[]
}

export default function Home({ products }: HomeProps) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48
    }
  });

  const { handleAddListProducttoCart } = useCartProvider()

  const handleAddProductToCart = (data: string) => {
    const filteredProductSelected = products.filter( product => product.id === data)
    
    if (filteredProductSelected.length > 0) {
      const productSelected = filteredProductSelected[0];
  
      handleAddListProducttoCart(productSelected);
    }
  }

  return (
    <>
      <Head>
        <title> Home | Ignite Shop</title>
      </Head>

      <HomeContainer ref={sliderRef} className="keen-slider">
        {products.map(product => {
          return (
            <Link href={`./product/${product.id}`} key={product.id} prefetch={false}>
              <Product className="keen-slider__slide">
                <Image src={product.imageUrl}  width={520} height={480} alt="" />
                <Footer>
                  <div>
                    <strong>{product.name}</strong>
                    <span>{product.price}</span>
                  </div>

                  <ContainerCart 
                    onClick={(e) => { 
                    e.preventDefault(), 
                    handleAddProductToCart(product.id)
                      }}
                    >
                    <Handbag size={32} weight="bold" />
                  </ContainerCart>
                </Footer>
              </Product>
            </Link>
          );
        })}
      </HomeContainer>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price']
  });

  const products = response.data.map(product => {
    const price = product.default_price as Stripe.Price;
    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: price.unit_amount && new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(price.unit_amount / 100),
      defaultPriceId: price.id,
    };
  });

  return {
    props: {
      products
    },
    revalidate: 60 * 60 * 2
  };
}
