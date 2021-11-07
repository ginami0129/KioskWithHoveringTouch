import React, { useContext, useEffect } from "react";

import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import { useStyles } from "../styles";
import Logo from "../components/Logo";
import { setPaymentType } from "../actions";
import { Store } from "../Store";
export default function HomeScreen(props) {
  const { dispatch } = useContext(Store);
  const styles = useStyles();
  const selectHandler = (paymentType) => {
    setPaymentType(dispatch, paymentType);
    if (paymentType === "Pay here") {
      props.history.push("/payment");
    } else {
      props.history.push("/complete");
    }
  };

  useEffect(() => {
    const listener = (event) => {
      if (event.key === "a") {
        selectHandler("Pay here");
      } else if (event.key === "d") {
        selectHandler("At counter");
      }
      event.preventDefault();
    };
    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, []);
  return (
    <Box className={[styles.root, styles.navy]}>
      <Box className={[styles.main, styles.center]}>
        <Logo large></Logo>
        <Typography
          className={styles.center}
          gutterBottom
          variant="h3"
          component="h3"
        >
          결제방법 선택
        </Typography>
        <Box className={styles.cards}>
          <Card className={[styles.card, styles.space]}>
            <CardActionArea onClick={() => selectHandler("Pay here")}>
              <CardMedia
                component="img"
                alt="Pay here"
                image="/images/payhere.png"
                className={styles.media}
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h6"
                  color="textPrimary"
                  component="p"
                >
                  카드 결제
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card className={[styles.card, styles.space]}>
            <CardActionArea onClick={() => selectHandler("At counter")}>
              <CardMedia
                component="img"
                alt="At counter"
                image="/images/atcounter.png"
                className={styles.media}
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h6"
                  color="textPrimary"
                  component="p"
                >
                  현금 결제
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Box>
      </Box>
    </Box>
  );
}
