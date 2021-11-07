import React from "react";
import { Box, Card, CardActionArea, Typography } from "@material-ui/core";
import TouchAppIcon from "@material-ui/icons/TouchApp";
import { useStyles } from "../styles";
import Logo from "../components/Logo";

export default function HomeScreen(props) {
  const styles = useStyles();

  return (
    <Card>
      <CardActionArea onClick={() => props.history.push("/choose")}>
        <Box className={[styles.root, styles.red]}>
          <Box className={[styles.main, styles.center]}>
            <Typography variant="h6" component="h6">
              Angel-in-us
            </Typography>
            <Typography variant="h1" component="h1" className={styles.bold}>
              Order <br /> & pay <br /> here
            </Typography>
            <TouchAppIcon fontSize="large"></TouchAppIcon>
          </Box>
          <Box className={[styles.center, styles.green]}>
            <Logo large></Logo>
            <Typography component="h5" variant="h5">
              Touch to start..
            </Typography>
          </Box>
        </Box>
      </CardActionArea>
    </Card>
  );
}
