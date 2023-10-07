'use client'

import Image from "next/image";
import { ButtonCart, ContainerHeader } from "../style/pages/header";
import { Handbag } from "phosphor-react";

import LogoImage from '../assets/logo.svg'
import { useCartProvider } from "../context/card";
import { useRouter } from "next/router";

export default function Header(){

  const { pathname } = useRouter()
  const { cartQuantity } = useCartProvider()

  const showCartButton = pathname !== '/success'

    const { handleStateMenuCart } = useCartProvider()
    return (
        <ContainerHeader>
          <Image src={LogoImage} alt="" />
          {
          showCartButton && (
          <ButtonCart onClick={() => handleStateMenuCart(true)}>
             {
               cartQuantity > 0 && <span>{cartQuantity}</span>
             }
             <Handbag size={32} weight="bold" />
           </ButtonCart>
          )
          }
          
        </ContainerHeader>
    )
}