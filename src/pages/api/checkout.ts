import { NextApiRequest, NextApiResponse } from "next"

import { stripe } from "../../lib/stripe"

type Override = Omit<NextApiRequest, "body"> & {
  body: {
    lineItems: {
      price: string
      quantity: number
    }[]
  }
}

export default async function handler(
  request: Override,
  response: NextApiResponse,
) {
  if (request.method !== "POST") {
    return response.status(405).json({ error: "Method not allowed." })
  }

  const { lineItems } = request.body

  if (lineItems.length <= 0) {
    return response.status(400).json({ error: "Items not found." })
  }

  const checkoutSession = await stripe.checkout.sessions.create({
    mode: "payment",
    line_items: lineItems,
    success_url: `${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${process.env.NEXT_URL}/`,
  })

  return response.status(201).json({
    checkoutUrl: checkoutSession.url,
  })
}
