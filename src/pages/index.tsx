import Image from "next/image"

import shirt1 from "../assets/shirts/1.png"
import { HomeContainer, Product } from "../styles/pages/home"

export default function Home() {
  return (
    <HomeContainer>
      <Product>
        <Image
          src={shirt1}
          width={520}
          height={480}
          alt=""
        />

        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product>
        <Image
          src={shirt1}
          width={520}
          height={480}
          alt=""
        />

        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
    </HomeContainer>
  )
}
