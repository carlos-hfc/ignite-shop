import { GetStaticPaths, GetStaticProps } from "next"
import Head from "next/head"
import Image from "next/image"
import Stripe from "stripe"
import { useShoppingCart } from "use-shopping-cart"

import { stripe } from "../../lib/stripe"
import {
  ImageContainer,
  ProductContainer,
  ProductDetailsContainer,
} from "../../styles/pages/product"

interface ProductItemProps {
  product: {
    id: string
    name: string
    description: string
    imageUrl: string
    price: string
    defaultPriceId: string
    defaultPrice: number
  }
}

export default function ProductItem({ product }: ProductItemProps) {
  const { addItem } = useShoppingCart()

  async function handleAddToCart() {
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
        <title>{product.name} | Ignite Shop</title>
      </Head>

      <ProductContainer>
        <ImageContainer>
          <Image
            src={product.imageUrl}
            width={520}
            height={480}
            alt={product.name}
          />
        </ImageContainer>

        <ProductDetailsContainer>
          <h1>{product.name}</h1>
          <span>{product.price}</span>

          <p>{product.description}</p>

          <button onClick={handleAddToCart}>Colocar na sacola</button>
        </ProductDetailsContainer>
      </ProductContainer>
    </>
  )
}

export const getStaticPaths: GetStaticPaths<{ id: string }> = async () => {
  const response = await stripe.products.list()

  const paths = response.data.map(item => ({
    params: {
      id: item.id,
    },
  }))

  return {
    paths,
    fallback: "blocking",
  }
}

export const getStaticProps: GetStaticProps<
  ProductItemProps,
  { id: string }
> = async ({ params }) => {
  const productId = params.id

  const product = await stripe.products.retrieve(productId, {
    expand: ["default_price"],
  })

  const price = product.default_price as Stripe.Price

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        description: product.description,
        imageUrl: product.images[0],
        price: new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(price.unit_amount / 100),
        defaultPriceId: price.id,
        defaultPrice: price.unit_amount,
      },
    },
    revalidate: 60 * 60 * 1, // 1h
  }
}
