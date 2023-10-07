'use client';

import { produce } from 'immer';
import {
  ReactNode, 
  createContext, 
  useContext, 
  useState,
  useEffect
} from 'react'


export interface ProductProps {
  id: string
  defaultPriceId: string
  imageUrl: string
  name: string,
  price: string
}

 interface ListProductProps {
  id: string
  defaultPriceId: string
  imageUrl: string
  name: string,
  price: string,
  quantity: number
}


interface CartContextType {
  handleStateMenuCart: (data: boolean) => void
  handleAddListProducttoCart: (data: ProductProps) => void
  removeItenstoCart: (productId: string) => void
  clearCart: () => void
  listProductToCart: ListProductProps[]
  stateMenuCart: boolean
  cartQuantity: number
  totalProducts: number
}

interface CartContextProviderProps{
  children: ReactNode
}


const LIST_PRODUCT_STORAGE_KEY = 'shopIgnite:ListProduct'

const CartContext = createContext<CartContextType>({} as CartContextType)

export const CartContextProvider = ({ children }: CartContextProviderProps) => {
  const [stateMenuCart, setStateMenuCart] = useState(false)
  const [listProductToCart, setListProductToCart] = useState<ListProductProps[]>([])

  useEffect(() => {

    const storedListCartItens = localStorage.getItem(LIST_PRODUCT_STORAGE_KEY)

    if(storedListCartItens) {
      const listProduct = JSON.parse(storedListCartItens)
      setListProductToCart(listProduct)
    } else {
      localStorage.setItem(LIST_PRODUCT_STORAGE_KEY, JSON.stringify([]))
    }

  }, [])

  const handleStateMenuCart = (data: boolean) => {
    setStateMenuCart(data)
  }

  const handleAddListProducttoCart = (data: ProductProps) => {
     const quantity = 1

     const product = {...data, quantity}

     const productAlredyExistsInCart = listProductToCart.findIndex( list => list.id === product.id)

     const newlistCart = produce(listProductToCart, (draft: ListProductProps[]) => {
      productAlredyExistsInCart < 0 && draft.push(product) 
     })

     setListProductToCart(newlistCart)
     localStorage.setItem(LIST_PRODUCT_STORAGE_KEY, JSON.stringify(newlistCart))

  }

  const cartQuantity = listProductToCart.length

  const removeItenstoCart = (productId: string) => {
     const newCartProduct = produce(listProductToCart, (draft) => {
      const exitsProductInCart = listProductToCart.findIndex( product => product.id === productId)
          exitsProductInCart >= 0 && draft.splice( exitsProductInCart, 1)
     })

     setListProductToCart(newCartProduct)
     localStorage.setItem(LIST_PRODUCT_STORAGE_KEY, JSON.stringify(newCartProduct))
  }

  const clearCart = () => {
    setListProductToCart([])
    localStorage.setItem(LIST_PRODUCT_STORAGE_KEY, JSON.stringify([]))
  }

  const totalProducts = listProductToCart && listProductToCart.reduce((total, cartItem) => {
    const priceProductString = cartItem.price.replace(/[^\d.,]/g, "")
    const priceProduct = parseFloat(priceProductString.replace(",", "."))
  
    return total + priceProduct * cartItem.quantity

  }, 0)

  return (
    <CartContext.Provider value={{ 
      handleStateMenuCart, 
      handleAddListProducttoCart, 
      removeItenstoCart, 
      clearCart,
      stateMenuCart, 
      cartQuantity,
      totalProducts,
      listProductToCart
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCartProvider = () => useContext(CartContext)