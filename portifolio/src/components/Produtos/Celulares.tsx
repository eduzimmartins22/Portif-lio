import Grid from "@mui/material/Grid"
import { Box, Container, Typography, Button } from "@mui/material"

import ProductCard from "../../components/Produtos/ProductCart"
import CartTopBar from "../../components/CartTopBar"
import CelularesImg from "../../images/Celulares.png"

import ArrowBackIcon from "@mui/icons-material/ArrowBack"
import { useNavigate } from "react-router-dom"



const items = [
 { id: "5600", name: "Realme C51", model: "128GB / 4GB RAM", image: CelularesImg, price: 1100, promoPrice: 550 },
  { id: "5752", name: "Realme C65", model: "256GB / 8GB RAM (Pix)", image: CelularesImg, price: 1110 },
  { id: "3588", name: "Camon 18P", model: "Tecno", image: CelularesImg, price: 1399, promoPrice: 549.5 },
  { id: "5881", name: "Infinix Hot 50i", model: "256GB / 8GB RAM", image: CelularesImg, price: 1000 },
  { id: "5904", name: "iPhone 17 Pro", model: "256GB", image: CelularesImg, price: 8800 },
  { id: "5603", name: "Redmi Note 13", model: "128GB / 6GB RAM", image: CelularesImg, price: 1200, promoPrice: 600 },
  { id: "5573", name: "Redmi Note 13 Pro Plus", model: "Xiaomi", image: CelularesImg, price: 2650, promoPrice: 1325 },
  { id: "5254", name: "Realme Note 50", model: "256GB / 4GB RAM", image: CelularesImg, price: 1150, promoPrice: 850 },
  { id: "5052", name: "Poco C40", model: "64GB / 4GB RAM", image: CelularesImg, price: 950, promoPrice: 475 },
  { id: "5492", name: "Poco C65", model: "256GB / 8GB RAM", image: CelularesImg, price: 1350, promoPrice: 1085 },
  { id: "4978", name: "Positivo Flip P50", model: "P50", image: CelularesImg, price: 280, promoPrice: 130 },
  { id: "5373", name: "Positivo P28", model: "P28", image: CelularesImg, price: 200, promoPrice: 100 },
  { id: "4908", name: "Positivo Q20", model: "128GB / 4GB RAM", image: CelularesImg, price: 899, promoPrice: 449.95 },
  { id: "5682", name: "Realme C61", model: "128GB / 4GB RAM", image: CelularesImg, price: 1100, promoPrice: 1050 },
  { id: "5666", name: "Realme C63", model: "256GB / 8GB RAM", image: CelularesImg, price: 1300, promoPrice: 1000 },
  { id: "5570", name: "Realme C67", model: "256GB / 8GB RAM", image: CelularesImg, price: 1450, promoPrice: 1150 },
  { id: "5690", name: "Realme C75", model: "256GB / 8GB RAM", image: CelularesImg, price: 1450, promoPrice: 1300 },
  { id: "5478", name: "Redmi 13", model: "256GB / 8GB RAM", image: CelularesImg, price: 1400, promoPrice: 1200 },
  { id: "4982", name: "Redmi 13C", model: "128GB / 4GB RAM", image: CelularesImg, price: 1100, promoPrice: 699.99 },
  { id: "5679", name: "Samsung A15", model: "128GB / 4GB RAM", image: CelularesImg, price: 1200, promoPrice: 900 },
  { id: "5665", name: "Redmi Note 13 Pro 5G", model: "256GB / 8GB RAM", image: CelularesImg, price: 2300, promoPrice: 1200 },
  { id: "5630", name: "Usado Samsung A12", model: "64GB", image: CelularesImg, price: 600, promoPrice: 450 },
  { id: "5949", name: "Bicicleta Elétrica V10", model: "Max Marron", image: CelularesImg, price: 6600 },
  { id: "5600", name: "Realme C51", model: "128GB / 4GB RAM", image: CelularesImg, price: 1100, promoPrice: 550 },
  { id: "3588", name: "Celular Camon 18P", model: "Tecno", image: CelularesImg, price: 1399, promoPrice: 549.5 },
  { id: "5904", name: "iPhone 17 Pro", model: "256 GB", image: CelularesImg, price: 8800 },
  { id: "5603", name: "Redmi Note 13", model: "128GB / 6GB RAM", image: CelularesImg, price: 1200, promoPrice: 600 },
  { id: "5573", name: "Note 13 Pro Plus", model: "Xiaomi", image: CelularesImg, price: 2650, promoPrice: 1325 },
  { id: "5254", name: "Realme Note 50", model: "256GB / 4GB RAM", image: CelularesImg, price: 1150, promoPrice: 850 },
  { id: "5052", name: "Poco C40", model: "64GB / 4GB RAM", image: CelularesImg, price: 950, promoPrice: 475 },
  { id: "5492", name: "Poco C65", model: "256GB / 8GB RAM", image: CelularesImg, price: 1350, promoPrice: 1085 },
  { id: "4978", name: "Positivo Flip P50", model: "P50", image: CelularesImg, price: 280, promoPrice: 130 },
  { id: "4908", name: "Positivo Q20", model: "128GB / 4GB RAM", image: CelularesImg, price: 899, promoPrice: 449.95 },
  { id: "5666", name: "Realme C63", model: "256GB / 8GB RAM", image: CelularesImg, price: 1300, promoPrice: 1000 },
  { id: "5570", name: "Realme C67", model: "256GB / 8GB RAM", image: CelularesImg, price: 1450, promoPrice: 1150 },
  { id: "4982", name: "Redmi 13C", model: "128GB / 4GB RAM", image: CelularesImg, price: 1100, promoPrice: 699.99 },
  { id: "5612", name: "Redmi 14C", model: "256GB / 8GB RAM", image: CelularesImg, price: 1200, promoPrice: 1050 },
  { id: "5679", name: "Samsung A15", model: "128GB / 4GB RAM", image: CelularesImg, price: 1200, promoPrice: 900 }
];

const Celulares = () => {

  const navigate = useNavigate()


  return (
    <Box py={16} bgcolor="#111">
      {/* 🔝 Carrinho fixo no topo */}
      <CartTopBar />



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
          <span style={{ color: "#FF8C00" }}>Celulares</span>
        </Typography>

        <Grid container spacing={5}>
          {items.map((item) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={item.id}>
              <ProductCard product={item} />
            </Grid>
          ))}
        </Grid>
      </Container>

    </Box>
  )
}

export default Celulares
