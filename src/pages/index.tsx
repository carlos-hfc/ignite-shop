import "keen-slider/keen-slider.min.css"

import { useKeenSlider } from "keen-slider/react"
import { ShoppingBagIcon } from "lucide-react"
import { GetStaticProps } from "next"
import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import Stripe from "stripe"
import { useShoppingCart } from "use-shopping-cart"

import { stripe } from "../lib/stripe"
import { HomeContainer, Product } from "../styles/pages/home"

interface ProductItem {
  id: string
  name: string
  imageUrl: string
  price: string
  defaultPrice: number
  defaultPriceId: string
}

interface HomeProps {
  products: ProductItem[]
}

export default function Home({ products }: HomeProps) {
  const { addItem } = useShoppingCart()

  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 2,
      spacing: 48,
    },
  })

  function handleAddToCart(product: ProductItem) {
    addItem({
      id: product.id,
      name: product.name,
      price: product.defaultPrice,
      currency: "BRL",
      price_id: product.defaultPriceId,
      image: product.imageUrl,
    })
  }

  return (
    <>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>

      <HomeContainer
        ref={sliderRef}
        className="keen-slider"
      >
        {products?.map(product => (
          <Link
            key={product.id}
            href={`/product/${product.id}`}
            prefetch={false}
          >
            <Product className="keen-slider__slide">
              <Image
                src={product.imageUrl}
                width={520}
                height={480}
                alt={product.name}
              />

              <footer>
                <div>
                  <strong>{product.name}</strong>
                  <span>{product.price}</span>
                </div>

                <button
                  onClick={e => {
                    e.preventDefault()

                    handleAddToCart(product)
                  }}
                >
                  <ShoppingBagIcon size={32} />
                </button>
              </footer>
            </Product>
          </Link>
        ))}
      </HomeContainer>
    </>
  )
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const response = await stripe.products.list({
    expand: ["data.default_price"],
  })

  const products = response.data.map(product => {
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(price.unit_amount / 100),
      defaultPrice: price.unit_amount,
      defaultPriceId: price.id,
    }
  })

  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 2, // 2h
  }
}
