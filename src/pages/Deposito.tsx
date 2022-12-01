import {
  Box,
  Button,
  Card,
  Container,
  CssBaseline,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import ResponsiveAppBar from "../components/ResponsiveAppBar";
import { useAppSelector } from "../store/hooks";

const Deposit: React.FC = () => {
  const transactionRedux = useAppSelector(
    (state) => state.transaction
  );
  const navigate = useNavigate();

  function cashOut() {
    
    navigate("/");
  }

  return (
    <React.Fragment>
      <ResponsiveAppBar />
      <Container>
        <Grid
          container
          component="main"
          sx={{ height: "80vh", width: "1000px" }}
        >
          <CssBaseline />
          <Grid
            item
            xs={false}
            sm={15}
            md={7}
            sx={{
              backgroundImage: "url(./saque.png)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />

          <Grid
            item
            xs={12}
            sm={8}
            md={5}
            component={Paper}
            elevation={6}
          >
            <Box
              sx={{
                my: 8,
                mx: 4,

                alignItems: "center",
              }}
            >
              <Typography
                component="div"
                variant="h6"
                align="center"
                sx={{
                  margin: 5,
                }}
              >
                Deposite seu dinheiro
              </Typography>
              <Typography
                component="div"
                variant="h6"
              >
                Seu Saldo é de: R$
                {transactionRedux.balance}
              </Typography>
              <Card
                sx={{
                  display: "flex",
                  margin: 10,
                  maxWidth: 345,
                  border: "1px solid",
                  opacity: 0.5,
                }}
              ></Card>
              <TextField
                margin="normal"
                required
                fullWidth
                name="Valor do deposito"
                label="Valor do deposito"
                type="nuber"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={cashOut}
              >
                Sacar agora
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default Saque;
