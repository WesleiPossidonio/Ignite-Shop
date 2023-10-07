import { useCartProvider } from "@/src/context/card"
import { stripe } from "@/src/lib/stripe"
import { ImageContainer, ProductContainer, ProductDetails } from "@/src/style/pages/product"
import { GetStaticPaths, GetStaticProps } from "next"
import Head from "next/head"
import Image from "next/image"

import Stripe from "stripe"


interface ProductProps {
  product: {
    id: string
    name: string;
    imageUrl: string;
    price: string;
    description: string
    defaultPriceId: string
  }
}

interface ProductIncart {
    id: string
    name: string;
    imageUrl: string;
    price: string;
    description: string
    defaultPriceId: string
}

export default function Product({ product }: ProductProps ) {

  const {handleStateMenuCart, handleAddListProducttoCart} = useCartProvider()


  

  const handleAddCart = ( data: ProductIncart ) => {
     handleAddListProducttoCart(data)

     handleStateMenuCart(true)
  }

  return (
    <>
      <Head>
        <title>{product.name} | Ignite Shop</title>
      </Head>

      <ProductContainer>
        <ImageContainer>
          <Image src={product.imageUrl} width={520} height={480} alt=""/>
        </ImageContainer>

        <ProductDetails>
          <h1>{product.name}</h1>
          <span>{product.price}</span>

          <p>{product.description}</p>
          <button onClick={() => handleAddCart(product)}>Colocar na Sacola</button>
        </ProductDetails>
      </ProductContainer>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      {params: {id: 'prod_OiWRt8tNNx9PdD'}}
    ],
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps<any, {id: string}> = async ({ params }) => {

  const productId = params!.id 

  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price'],
  })

  const price = product.default_price as Stripe.Price

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        price: price.unit_amount && new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(price.unit_amount / 100),
      description: product.description,
      defaultPriceId: price.id,
      }
    }, 
    revalidate: 60 * 6 * 1 // 1 hour
  }
}