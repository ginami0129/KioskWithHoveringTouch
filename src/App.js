import { Container, CssBaseline, Paper } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import { createTheme } from "@material-ui/core/styles";
import HomeScreen from "./screens/HomeScreen";
import ChooseScreen from "./screens/ChooseScreen";
import OrderScreen from "./screens/OrderScreen";
import { Route, BrowserRouter } from "react-router-dom";
import ReviewScreen from "./screens/ReviewScreen";
import SelectPaymentScreen from "./screens/SelectPaymentScreen";
import PaymentScreen from "./screens/PaymentScreen";
import CompleteOrderScreen from "./screens/CompleteOrderScreen";
import AdminScreen from "./screens/AdminScreen";
import QueueScreen from "./screens/QueueScreen";
import { Store } from "./Store";
import { useContext } from "react";

const theme = createTheme({
  typography: {
    h1: { fontWeight: "bold" },
    h2: {
      fontSize: "2rem",
      color: "black",
    },
    h3: {
      fontSize: "1.8rem",
      fontWeight: "bold",
      color: "white",
    },
  },
  palette: {
    primary: { main: "#ff1744" },
    secondary: {
      main: "#118e16",
      contrastText: "#ffffff",
    },
  },
});

function App() {
  const { state } = useContext(Store);
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth={state.widthScreen ? "lg" : "sm"}>
          <Paper>
            <Route path="/" component={HomeScreen} exact={true}></Route>
            <Route path="/choose" component={ChooseScreen} exact={true}></Route>
            <Route path="/order" component={OrderScreen} exact={true}></Route>
            <Route path="/review" component={ReviewScreen} exact={true}></Route>
            <Route
              path="/select-payment"
              component={SelectPaymentScreen}
              exact={true}
            ></Route>
            <Route
              path="/payment"
              component={PaymentScreen}
              exact={true}
            ></Route>
            <Route
              path="/complete"
              component={CompleteOrderScreen}
              exact={true}
            ></Route>
            <Route path="/admin" component={AdminScreen} exact></Route>
            <Route path="/queue" component={QueueScreen} exact></Route>
          </Paper>
        </Container>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
