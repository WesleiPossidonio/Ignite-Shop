'use client'

import { X } from "phosphor-react"
import { 
  BuyButton, 
  ContainerCart, 
  ContainerFinalPrice, 
  ContainerImageProduct, 
  ContainerItensToCart, 
  ContainerPrice, 
  ContainerTextProduct, 
  Footer, 
  TitleCart 
} from "../style/pages/cart"
import { useCartProvider } from "../context/card"
import Image from "next/image"
import { FormatMoney } from "../utils/formatMoney"
import axios from "axios"
import { useState } from 'react'

export default function Cart(){

  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] = useState(false) 

    const {
      stateMenuCart, 
      handleStateMenuCart, 
      removeItenstoCart,
      listProductToCart,
      cartQuantity,
      totalProducts,
      clearCart
    } = useCartProvider()

    const formatFinalPrice = FormatMoney(totalProducts)

    const handleBuyProduct = async () => {
      setIsCreatingCheckoutSession(true)
      try {
        const response = await axios.post('/api/checkout', {
            products: listProductToCart
        })

        const {checkoutUrl} = response.data
        window.location.href = checkoutUrl // quando é rota externa uma rota fora desse projeto. 
        clearCart()  
    } catch (error) {
        setIsCreatingCheckoutSession(false)
        // Conectar com uma ferramenta de onservabilidade (datadog/ Sentry)depois pesquisar.
        alert('falha ao redirencionar o checkout')
      }
  }

  return (
    <ContainerCart display={stateMenuCart}>
        <X fontSize={24} weight="bold" onClick={() => handleStateMenuCart(false)}/>

        <TitleCart>Sacola de compras</TitleCart>

        {
          listProductToCart.length > 0 ? listProductToCart.map(product => {
            return (
              <ContainerItensToCart key={product.id}>
                <ContainerImageProduct>
                  <Image src={product.imageUrl} width={94} height={94} alt="" />
                </ContainerImageProduct>

                <ContainerTextProduct>
                  <h1>{product.name}</h1>
                  <h3>{product.price}</h3>


                  <p onClick={() => removeItenstoCart(product.id)}>Remover</p>
                </ContainerTextProduct>
                
              </ContainerItensToCart>
            )
          }) : 
          <ContainerItensToCart>
             <p>Ops... O Carrinho está vazio .(</p>
          </ContainerItensToCart>
        }

        {
          listProductToCart.length >= 1 && (
            <Footer>
              <ContainerPrice>
                <ContainerFinalPrice className="quantity">
                  <h3>Quantidade</h3>
                  <h3>{cartQuantity}</h3>
                </ContainerFinalPrice>

                <ContainerFinalPrice className="total">
                  <h2 className="text-total">Valor Total</h2>
                  <h1>R$ {formatFinalPrice}</h1>
                </ContainerFinalPrice>

                <BuyButton 
                  disabled={isCreatingCheckoutSession} 
                  onClick={handleBuyProduct}
                >
                 Finalizar compra
                </BuyButton>
              </ContainerPrice>
            </Footer>
          )
        }

        
    </ContainerCart>
  )
}


