import axios from "axios"
import { ShoppingBagIcon, ShoppingCartIcon, XIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { useShoppingCart } from "use-shopping-cart"
import { CartEntry } from "use-shopping-cart/core"

import logo from "../assets/logo.svg"
import {
  CardButton,
  Cart,
  CloseButton,
  EmptyCart,
  HeaderContainer,
  ImageContainer,
  Items,
  ProductCart,
} from "../styles/pages/app"

export function Header() {
  const { cartCount, cartDetails, clearCart, removeItem, totalPrice } =
    useShoppingCart()

  const [isOpenCart, setIsOpenCart] = useState(false)

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpenCart) return setIsOpenCart(false)
    }

    const closeMenu = (event: MouseEvent) => {
      if ((event?.target as HTMLButtonElement).hasAttribute("aria-controls"))
        return

      setIsOpenCart(false)
    }

    document.addEventListener("keydown", onKeyDown)
    document.body.addEventListener("click", closeMenu)

    return () => {
      document.removeEventListener("keydown", onKeyDown)
      document.body.removeEventListener("click", closeMenu)
    }
  })

  const cartItems = Object.values(cartDetails) as CartEntry[]

  async function handleBuyProducts() {
    const lineItems = cartItems.map(item => ({
      price: item.price_id,
      quantity: item.quantity,
    }))

    try {
      const response = await axios.post("/api/checkout", {
        lineItems,
      })

      const { checkoutUrl } = response.data

      window.location.href = checkoutUrl

      clearCart()
    } catch (error) {
      alert("Falha ao redirecionar ao checkout")
    }
  }

  return (
    <>
      <HeaderContainer>
        <Link href="/">
          <Image
            src={logo}
            alt=""
            width={130}
          />
        </Link>

        <CardButton
          onClick={() => setIsOpenCart(true)}
          aria-label="Carrinho"
          aria-controls="cart"
          id="button-cart"
          aria-expanded={isOpenCart ? "true" : "false"}
        >
          <ShoppingBagIcon pointerEvents={"none"} />

          {cartCount > 0 && <span>{cartCount}</span>}
        </CardButton>
      </HeaderContainer>

      <Cart
        open={isOpenCart}
        id="cart"
        aria-labelledby="button-cart"
        onClick={e => e.stopPropagation()}
      >
        <CloseButton onClick={() => setIsOpenCart(false)}>
          <XIcon size={24} />
        </CloseButton>

        <h2>Sacola de compras</h2>

        {cartItems.length > 0 ? (
          <>
            <Items>
              {cartItems.map(item => (
                <ProductCart key={item.id}>
                  <ImageContainer>
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={95}
                      height={95}
                    />
                  </ImageContainer>

                  <div>
                    <h3>{item.name}</h3>
                    <strong>
                      {new Intl.NumberFormat("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      }).format(item.value / 100)}
                    </strong>
                    <a onClick={() => removeItem(item.id)}>Remover</a>
                  </div>
                </ProductCart>
              ))}
            </Items>

            <footer>
              <div>
                <span>Quantidade</span>
                <span>{cartItems.length} itens</span>
              </div>

              <div>
                <strong>Valor total</strong>
                <strong>
                  {new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(totalPrice / 100)}
                </strong>
              </div>

              <button onClick={handleBuyProducts}>Finalizar compra</button>
            </footer>
          </>
        ) : (
          <EmptyCart>
            <ShoppingCartIcon size={64} />

            <span>Seu carrinho está vazio</span>
          </EmptyCart>
        )}
      </Cart>
    </>
  )
}
