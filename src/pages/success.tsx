import Link from "next/link";
import { ContainerImages, ImageContainer, SucessesContainer } from "../style/pages/sucess";
import { GetServerSideProps } from "next";
import Stripe from "stripe";
import { stripe } from "../lib/stripe";
import Image from "next/image";
import Head from "next/head";


interface SuccessProps {
    customerName: string
    productsImages: string[]
}

export default function Success({customerName, productsImages }: SuccessProps) {
    return (
        <>
           <Head>
            <title>Compra Efetuada | Ignite Shop</title>

            <meta name="robots" content="noindex" />

           </Head>

           <SucessesContainer>
               <ContainerImages>
               {
                  productsImages.map((images, i) => (
                  <ImageContainer key={i}>
                    <Image src={images}  width={120} height={110} alt="" />
                  </ImageContainer>
                  ))
                }
               </ContainerImages>

                <h1>Compra efetuada!</h1>
                <p>
                  Uhuul <strong>{customerName}</strong>, sua  compra de <span> 
                  {productsImages.length} </span> camisetas já está a caminho da sua casa. 
                </p> 

                <Link href='/'>
                  Voltar ao catálogo
                </Link>
            </SucessesContainer>
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
    const sessionId  = String(query.session_id)

    if(!query.session_id){
        return {
            redirect: {
            destination: '/',
            permanent: false
            }
        }
    }

    const session = await stripe.checkout.sessions.retrieve(sessionId, {
        expand: ['line_items', 'line_items.data.price.product']
    })

    const customerName = session.customer_details?.name
    const productsImages = session.line_items!.data.map( item => {
        const product = item.price!.product as Stripe.Product

        return product.images[0]
    })
    
     return {
        props: {
           customerName, 
           productsImages
        }
     }
}