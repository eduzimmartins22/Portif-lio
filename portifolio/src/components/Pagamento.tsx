import Pix from "../images/Pix2.png"
import { Box, Container, Grid, Paper, Typography, Button } from "@mui/material"
import styled from "@emotion/styled"

const PixImg = styled("img")({
  maxWidth: "100%",
  maxHeight: "100%",
  objectFit: "contain",
})

const Payment = () => {
  return (
    <Box id="pagamento" py={16}>
      <Container>
        <Typography variant="h2" textAlign="center" mb={4}>
          Pagamento <span style={{ color: "#FF8C00" }}>Rápido</span>
        </Typography>

        <Grid container spacing={3} justifyContent="center">
          {/* PIX */}
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 4, textAlign: "center" }}>
              <Typography variant="h6" mb={2}>
                Pix
              </Typography>

              <Box
                sx={{
                  mx: "auto",
                  height: 150,
                  width: 150,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 2,
                  overflow: "hidden",
                }}
              >
                <PixImg src={Pix} alt="UGO Pix Pagamentos" />
              </Box>
            </Paper>
          </Grid>

          {/* WHATSAPP */}
          <Grid item xs={12} md={6}>
            <Paper
              sx={{
                p: 4,
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
              }}
            >
              <Typography variant="h6" mb={4}>
                WhatsApp
              </Typography>

              <Button
                variant="contained"
                color="success"
                size="large"
                href="https://wa.me/5527999346464"
              >
                Falar no WhatsApp
              </Button>
              
            </Paper>
          </Grid>
          <Button href="#Header" sx={{
            color: "white",
            backgroundColor: "#070707",
            width: "180px",
            height: "60px",
            display: "flex",
            justifyContent: "center",
            
            }}>VOLTAR AO TOPO</Button>
        </Grid>
      </Container>
    </Box>
  )
}

export default Payment
