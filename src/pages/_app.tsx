import { AppProps } from "next/app"
import Image from "next/image"

import logo from "../assets/logo.svg"
import { globalStyles } from "../styles/global"
import { Container, Header } from "../styles/pages/app"

globalStyles()

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Image
          src={logo}
          alt=""
          width={130}
        />
      </Header>

      <Component {...pageProps} />
    </Container>
  )
}
