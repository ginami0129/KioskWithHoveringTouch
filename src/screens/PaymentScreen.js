import { Box, Button, CircularProgress, Typography } from "@material-ui/core";
import React, { useEffect } from "react";
import Logo from "../components/Logo";
import { useStyles } from "../styles";

export default function PaymentScreen(props) {
  const styles = useStyles();

  useEffect(() => {
    const listener = (event) => {
      if (event.key === "d") {
        props.history.push("/complete");
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
        <Box>
          <Logo large></Logo>
          <Typography
            gutterBottom
            className={styles.title}
            variant="h3"
            component="h3"
          >
            결제 중
          </Typography>
          <CircularProgress />
        </Box>
      </Box>
      <Box className={[styles.center, styles.space]}>
        <Button
          onClick={() => props.history.push("/complete")}
          variant="contained"
          color="primary"
          className={styles.largeButton}
        >
          주문완료
        </Button>
      </Box>
    </Box>
  );
}
