import { Box, Typography, IconButton, TextField } from "@mui/material"
import AddIcon from "@mui/icons-material/Add"
import { useState } from "react"
import { useCart } from "../../context/useCart"

type Product = {
  id: string
  name: string
  model?: string
  image: string
  price: number
  promoPrice?: number
}

const ProductCard = ({ product }: { product: Product }) => {
  const { addToCart } = useCart()
  const [obs, setObs] = useState("")

  const handleAdd = () => {
    addToCart({
      id: product.id,
      name: `${product.name}${product.model ? ` - ${product.model}` : ""}`,
      price: product.promoPrice ?? product.price,
      observation: obs,
    })
  }

  return (
    <Box
      sx={{
        p: 3,
        height: "100%",
        borderRadius: 4,
        backgroundColor: "#111",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        transition: "0.3s",
        "&:hover": {
          transform: "translateY(-6px)",
          boxShadow: 8,
        },
      }}
    >
      {/* NOME / MODELO */}
      <Box mb={2}>
        <Typography fontWeight={700}>{product.name}</Typography>
        {product.model && (
          <Typography fontSize={14} color="gray">
            {product.model}
          </Typography>
        )}
      </Box>

      {/* IMAGEM */}
      <Box
        component="img"
        src={product.image}
        alt={product.name}
        sx={{
          maxHeight: 140,
          objectFit: "contain",
          mb: 2,
        }}
      />

      {/* PREÇOS */}
      <Box mb={2}>
        {product.promoPrice && (
          <Typography
            fontSize={14}
            sx={{ textDecoration: "line-through", color: "#999" }}
          >
            R$ {product.price}
          </Typography>
        )}

        <Typography fontSize={18} fontWeight={800} color="#FF8C00">
          R$ {product.promoPrice ?? product.price}
        </Typography>
      </Box>

      {/* OBS */}
      <TextField
        size="small"
        placeholder="Obs: cor, modelo, quant..."
        value={obs}
        onChange={(e) => setObs(e.target.value)}
        sx={{ mb: 2, input: { color: "white" } }}
      />

      {/* ADD */}
      <Box display="flex" justifyContent="flex-end">
        <IconButton
          onClick={handleAdd}
          sx={{
            backgroundColor: "#FF8C00",
            color: "#000",
            "&:hover": { backgroundColor: "#ff9f2e" },
          }}
        >
          <AddIcon />
        </IconButton>
      </Box>
    </Box>
  )
}

export default ProductCard
