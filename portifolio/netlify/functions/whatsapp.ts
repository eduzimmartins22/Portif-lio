import crypto from "crypto"
import type { Handler } from "@netlify/functions"

const SECRET = process.env.WHATSAPP_SECRET
const PHONE = process.env.WHATSAPP_NUMBER

if (!SECRET) {
  throw new Error("WHATSAPP_SECRET não definida")
}

if (!PHONE) {
  throw new Error("WHATSAPP_NUMBER não definida")
}

function sign(data: string) {
  return crypto
    .createHmac("sha256", SECRET)
    .update(data)
    .digest("hex")
}

export const handler: Handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" }
  }

  const { message } = JSON.parse(event.body || "{}")

  if (!message) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Mensagem ausente" }),
    }
  }

  const url = `https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`
  const signature = sign(url)

  return {
    statusCode: 200,
    body: JSON.stringify({ url, signature }),
  }
}
