import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  Typography,
} from "@mui/material"
import { Link } from "react-router-dom"
import Bicicletas from "../../images/Bicicletas.png"

const items = [
  { name: "Bicicletas Motorizadas", image: Bicicletas },
   { name: "Bicicletas Motorizadas", image: Bicicletas },
    { name: "Bicicletas Motorizadas", image: Bicicletas },
     { name: "Bicicletas Motorizadas", image: Bicicletas },
      { name: "Bicicletas Motorizadas", image: Bicicletas },
       { name: "Bicicletas Motorizadas", image: Bicicletas },
        { name: "Bicicletas Motorizadas", image: Bicicletas },
         { name: "Bicicletas Motorizadas", image: Bicicletas },
          { name: "Bicicletas Motorizadas", image: Bicicletas },
           { name: "Bicicletas Motorizadas", image: Bicicletas },
            { name: "Bicicletas Motorizadas", image: Bicicletas },
             { name: "Bicicletas Motorizadas", image: Bicicletas },
              { name: "Bicicletas Motorizadas", image: Bicicletas },
               { name: "Bicicletas Motorizadas", image: Bicicletas },
                { name: "Bicicletas Motorizadas", image: Bicicletas },
                 { name: "Bicicletas Motorizadas", image: Bicicletas },
]

const Products = () => {
  return (
    <Box id="Bicicletas" py={19}>
      <Container>
        <Typography variant="h2" textAlign="center" mb={6}>
       <span style={{ color: "#FF8C00" }}>Bicicletas</span>
        </Typography>

        <Grid container spacing={5}>
          {items.map(item => (
            <Grid item xs={12} sm={6} md={4} key={item.name}>
              <Paper
                sx={{
                  p: 3,
                  height: 320,
                  borderRadius: 4,
                  background: "rgba(87, 84, 84, 0.03)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "space-between",
                  transition: "0.3s",
                  "&:hover": {
                    transform: "translateY(-6px)",
                    boxShadow: 8,
                  },
                }}
              >
                {/* Imagem */}
                <Box
                  component="img"
                  src={item.image}
                  alt={item.name}
                  sx={{
                    maxWidth: "100%",
                    maxHeight: 160,
                    objectFit: "contain",
                  }}
                />

                {/* Nome */}
                <Typography variant="h6" mt={2} textAlign="center">
                  {item.name}
                </Typography>

              
                
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
     <Box display="flex" justifyContent="center" mt={4}>
  <Button
    component={Link}
    to="/"
    sx={{
      color: "white",
      backgroundColor: "#070707",
      width: "150px",
      height: "50px",
      borderRadius: "8px",
      "&:hover": {
        backgroundColor: "#333333",
      },
    }}
  >
    VOLTAR AO INÍCIO
  </Button>
</Box>


    </Box>
  )
}

export default Products
