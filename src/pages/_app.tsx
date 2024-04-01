import { AppProps } from "next/app"

import logo from "../assets/logo.svg"
import { globalStyles } from "../styles/global"
import { Container, Header } from "../styles/pages/app"

globalStyles()

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <img
          src={logo.src}
          alt=""
        />
      </Header>

      <Component {...pageProps} />
    </Container>
  )
}
