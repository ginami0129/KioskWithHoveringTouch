import {
  Box,
  CardActionArea,
  CardContent,
  CardMedia,
  Fade,
  Card,
  Typography,
} from "@material-ui/core";
import React, { useContext, useEffect } from "react";
import Logo from "../components/Logo";
import { Store } from "../Store";
import { useStyles } from "../styles";
import { setOrderType } from "../actions";

import KeyboardEventHandler from "react-keyboard-event-handler";

export default function ChooseScreen(props) {
  const styles = useStyles();
  const { dispatch } = useContext(Store);

  const chooseHandler = (orderType) => {
    setOrderType(dispatch, orderType);
    props.history.push("/order");
  };

  useEffect(() => {
    const listener = (event) => {
      if (event.key === "a") {
        chooseHandler("Eat in");
      } else if (event.key === "d") {
        chooseHandler("Take out");
      }
      event.preventDefault();
    };
    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, []);

  return (
    <Fade in={true}>
      <Box className={[styles.root, styles.navy]}>
        <Box className={[styles.main, styles.center]}>
          <Logo large></Logo>
          <Typography
            variant="h3"
            component="h3"
            className={styles.center}
            gutterBottom
          >
            식사 하실 장소를 선택해 주세요.
          </Typography>
          <Box className={styles.cards}>
            <Card className={[styles.card, styles.space]}>
              <CardActionArea onClick={() => chooseHandler("Eat in")}>
                <CardMedia
                  component="img"
                  alt="Eat in"
                  image="/images/eatin.png"
                  className={styles.media}
                />
                <CardContent>
                  <Typography
                    variant="h4"
                    component="p"
                    color="textPrimary"
                    gutterBottom
                  >
                    매장에서 식사
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            <Card className={[styles.card, styles.space]}>
              <CardActionArea onClick={() => chooseHandler("Take out")}>
                <CardMedia
                  component="img"
                  alt="Take out"
                  image="/images/takeout.png"
                  className={styles.media}
                />
                <CardContent>
                  <Typography
                    variant="h4"
                    component="p"
                    color="textPrimary"
                    gutterBottom
                  >
                    테이크 아웃
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Box>
        </Box>
      </Box>
    </Fade>
  );
}
