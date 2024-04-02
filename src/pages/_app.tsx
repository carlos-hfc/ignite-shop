import { AppProps } from "next/app"
import { CartProvider } from "use-shopping-cart"

import { Header } from "../components/header"
import { globalStyles } from "../styles/global"
import { Container } from "../styles/pages/app"

globalStyles()

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <CartProvider
        cartMode="checkout-session"
        currency="BRL"
        stripe={process.env.STRIPE_PUBLIC_KEY}
        shouldPersist
      >
        <>
          <Header />

          <Component {...pageProps} />
        </>
      </CartProvider>
    </Container>
  )
}
