import crypto from "crypto"
import type { Handler } from "@netlify/functions"

export const handler: Handler = async (event) => {
  try {
    if (event.httpMethod !== "POST") {
      return { statusCode: 405, body: "Method Not Allowed" }
    }

    const SECRET = process.env.WHATSAPP_SECRET
    const PHONE = process.env.WHATSAPP_NUMBER

    if (!SECRET || !PHONE) {
      return {
        statusCode: 500,
        body: JSON.stringify({
          error: "Variáveis de ambiente não configuradas",
        }),
      }
    }

    const { message } = JSON.parse(event.body || "{}")

    if (!message) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Mensagem ausente" }),
      }
    }

    const url = `https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`

    const signature = crypto
      .createHmac("sha256", SECRET)
      .update(url)
      .digest("hex")

    return {
      statusCode: 200,
      body: JSON.stringify({ url, signature }),
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Erro interno na função" }),
    }
  }
}