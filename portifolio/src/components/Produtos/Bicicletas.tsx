import { Box, Container, Grid, Typography, Button } from "@mui/material"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"

import ProductCard from "../../components/Produtos/ProductCart"
import CartTopBar from "../../components/CartTopBar"
import BicicletaImg from "../../images/Bicicletas.png"
import { useCart } from "../../context/useCart"
import ArrowBackIcon from "@mui/icons-material/ArrowBack"
import { useNavigate } from "react-router-dom"



const items = [
  {
    id: "bike-1",
    name: "Bicicleta Motorizada",
    model: "49cc",
    image: BicicletaImg,
    price: 2999,
    promoPrice: 2599,
  },
  {
    id: "bike-2",
    name: "Bicicleta Motorizada",
    model: "80cc",
    image: BicicletaImg,
    price: 3499,
    promoPrice: 2599,
  },
  {
    id: "bike-3",
    name: "Bicicleta Motorizada",
    model: "80cc Pro",
    image: BicicletaImg,
    price: 3499,
    promoPrice: 1599,
  },
]

const Bicicletas = () => {
  const { cartItems } = useCart()
  const navigate = useNavigate()


  return (
    <Box py={16} bgcolor="#111">
      {/* 🔝 Carrinho fixo no topo */}
      <CartTopBar />

      {/* 🔗 Emblema flutuante âncora */}
      {cartItems.length > 0 && (
        <Box
          component="a"
          href="#cart-top"
          sx={{
            position: "fixed",
            bottom: 24,
            right: 24,
            zIndex: 20,
            backgroundColor: "#FF8C00",
            color: "#000",
            width: 56,
            height: 56,
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: 6,
            textDecoration: "none",
            "&:hover": {
              backgroundColor: "#ff9f2e",
            },
          }}
        >
          <ShoppingCartIcon />

          <Box
          
            sx={{
              position: "absolute",
              top: -6,
              right: -6,
              backgroundColor: "#000",
              color: "#FF8C00",
              borderRadius: "50%",
              width: 22,
              height: 22,
              fontSize: 12,
              fontWeight: 700,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {cartItems.length}
          </Box>
        </Box>
      )}

      <Container>
                  <Button
  startIcon={<ArrowBackIcon />}
  onClick={() => navigate(-1)}
  sx={{
    mb: 3,
    color: "#FF8C00",
    fontWeight: 600,
    alignSelf: "flex-start",
    "&:hover": {
      backgroundColor: "rgba(255,140,0,0.1)",
    },
  }}
>
  Voltar
</Button>
        
        <Typography variant="h2" textAlign="center" mb={6} color="white">
          Bicicletas <span style={{ color: "#FF8C00" }}>Motorizadas</span>
        </Typography>

        <Grid container spacing={5}>
          {items.map((item) => (
            <Grid item xs={12} sm={6} md={4} key={item.id}>
              <ProductCard product={item} />
            </Grid>
          ))}
        </Grid>
      </Container>
      
    </Box>
  )
}

export default Bicicletas
