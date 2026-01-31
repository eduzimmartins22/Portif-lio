import Grid from "@mui/material/Grid"
import { Box, Container, Typography, Button } from "@mui/material"

import ProductCard from "../../components/Produtos/ProductCart"
import CartTopBar from "../../components/CartTopBar"
import FonesImg from "../../images/Fones.png"

import ArrowBackIcon from "@mui/icons-material/ArrowBack"
import { useNavigate } from "react-router-dom"



const items = [
  { id: "4364", name: "Fone Bluetooth Bright", model: "0481", image: FonesImg, price: 170 },
  { id: "3506", name: "Fone Blacksound BL", model: "514", image: FonesImg, price: 245 },
  { id: "5370", name: "Airpods Max Headphone", model: "Bluetooth", image: FonesImg, price: 280 },
  { id: "3872", name: "Air Conduction Sports", model: "A889Pro", image: FonesImg, price: 240 },
  { id: "3196", name: "Airpods TWS", model: "TWS", image: FonesImg, price: 190 },
  { id: "5337", name: "Fone Danx", model: "DF51", image: FonesImg, price: 130, promoPrice: 65 },
  { id: "3005", name: "Earpods Lightning", model: "Apple Connector", image: FonesImg, price: 165, promoPrice: 90 },
  { id: "5335", name: "Fone Inova Minimalista", model: "FON-20380", image: FonesImg, price: 90, promoPrice: 45 },
  { id: "4997", name: "Fone Basike", model: "FON-20386", image: FonesImg, price: 98, promoPrice: 33 },
  { id: "5380", name: "Fone Inova Sem Fio", model: "FON-8779", image: FonesImg, price: 130, promoPrice: 65 },
  { id: "5017", name: "Fone Airpods Max Inova", model: "KV-8778", image: FonesImg, price: 110, promoPrice: 55 },
  { id: "4504", name: "Fone Estéreo Inova", model: "FON-30140", image: FonesImg, price: 20, promoPrice: 14 },
  { id: "4563", name: "Fone Lelong Estéreo", model: "LE-0206", image: FonesImg, price: 25, promoPrice: 12.5 },
  { id: "5027", name: "Fone de Ouvido", model: "FON-20129", image: FonesImg, price: 110, promoPrice: 55 },
  { id: "4544", name: "Fone Kapbom", model: "KA-763", image: FonesImg, price: 15, promoPrice: 7.5 },
  { id: "4364", name: "Fone Bluetooth Bright", model: "0481", image: FonesImg, price: 170 },
  { id: "3506", name: "Fone Ouvido Blacksound BL", model: "514", image: FonesImg, price: 245 },
  { id: "3872", name: "Air Conduction Sports", model: "A889pro", image: FonesImg, price: 240 },
  { id: "5370", name: "Airpods Max Headphone", model: "Bluetooth", image: FonesImg, price: 280 },
  { id: "3196", name: "Airpods TWS", model: "TWS", image: FonesImg, price: 190 },
  { id: "3937", name: "AKG com Microfone", model: "Tipo C", image: FonesImg, price: 15 },
  { id: "3941", name: "Fone Bluetooth Basike", model: "BA-FON 8743", image: FonesImg, price: 80 },
  { id: "3651", name: "Fone P3 Estéreo Danx", model: "DF21", image: FonesImg, price: 24, promoPrice: 12 },
  { id: "5337", name: "Fone Danx", model: "DF51", image: FonesImg, price: 130, promoPrice: 65 },
  { id: "3005", name: "Earpods Lightning", model: "Apple Connector", image: FonesImg, price: 165, promoPrice: 90 },
  { id: "5335", name: "Fone Inova Minimalista", model: "FON-20380", image: FonesImg, price: 90, promoPrice: 45 },
  { id: "4997", name: "Fone de Ouvido Basike", model: "FON-20386", image: FonesImg, price: 98, promoPrice: 33 },
  { id: "5409", name: "Fone Sem Fio Basike", model: "FON-20393", image: FonesImg, price: 100, promoPrice: 60 },
  { id: "5380", name: "Fone Sem Fio Inova", model: "FON-8779", image: FonesImg, price: 130, promoPrice: 65 },
  { id: "5017", name: "Fone Airpods Max Inova", model: "KV-8778", image: FonesImg, price: 110, promoPrice: 55 },
  { id: "4855", name: "Fone BT Inova", model: "FON-30045", image: FonesImg, price: 110, promoPrice: 55 },
  { id: "4568", name: "Fone Kapbom", model: "KA-775", image: FonesImg, price: 20 },
  { id: "5028", name: "Fone BT Inova", model: "FON-20390", image: FonesImg, price: 112, promoPrice: 56 }
];

const Fones = () => {
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
           <span style={{ color: "#FF8C00" }}>Fones</span>
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

export default Fones
