import {
  Box,
  Button,
  Checkbox,
  Container,
  CssBaseline,
  FormControlLabel,
  Grid,
  Paper,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import ResponsiveAppBar from "../components/ResponsiveAppBar";
import { useAppSelector, useAppDispatch } from "../store/hooks";
import Operations from "../types/OperationsType";
import { subBalance } from "../store/modules/BalanceSlice";
import { useNavigate } from "react-router-dom";
import { addOperation } from "../store/modules/OperationSlice";
import OperationType from "../types/OperationsType";

const Transfer: React.FC = () => {
  const operationRedux = useAppSelector((state) => state.operation);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [value, setValue] = useState<number>(0);
  const [description, setDescription] = useState<string>("");
  const [account, setAccount] = useState<number>(0);
  const [digit, setDigit] = useState<number>(0);

  const handleTransfer = () => {
    const id = Date.now();
    const operation = {
      id,
      value,
      type: "W",
      description,
      account,
      digit,
    };
    dispatch(addOperation(operation));
    dispatch(subBalance(value));
    navigate("/");
  };

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
              opacity: 0.5,
              backgroundImage: "url(./aa.jpg)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />

          <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6}>
            <Box
              sx={{
                my: 8,
                mx: 4,

                alignItems: "center",
              }}
            >
              <Box component="form" noValidate sx={{ mt: 1 }}>
                <TextField
                  sx={{
                    m: 1,
                    width: "30ch",
                    columns: 2,
                  }}
                  margin="normal"
                  required
                  fullWidth
                  label="Número da conta"
                  name="Número da conta"
                  autoFocus
                  onChange={(ev) => setAccount(Number(ev.target.value))}
                />
                <TextField
                  sx={{ m: 1, width: "10ch" }}
                  margin="normal"
                  required
                  fullWidth
                  label="digito"
                  name="digito"
                  onChange={(ev) => setDigit(Number(ev.target.value))}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="Valor da transferência"
                  label="Valor da transferência"
                  type="number"
                  onChange={(ev) => setValue(Number(ev.target.value))}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="Descrição"
                  label="Descrição"
                  type="Text"
                  onChange={(ev) => setDescription(ev.target.value)}
                />
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Lembrar na proxima transferencia"
                />
                <Button
                  onClick={handleTransfer}
                  // type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Transferir agora
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default Transfer;
