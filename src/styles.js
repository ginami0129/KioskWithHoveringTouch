// import { makeStyles } from "@material-ui/core";

// export const useStyles = makeStyles((theme) => ({
//   root: {
//     height: "100vh",
//     display: "flex",
//     flexDirection: "column",
//   },
//   navy: {
//     backgroundColor: "#2C2A29",
//   },
//   red: {
//     backgroundColor: "#2C2A29",
//     color: "#ffffff",
//   },
//   main: {
//     flex: 1,
//     overflow: "auto",
//     flexDirection: "column",
//     display: "flex",
//     color: "#ffffff",
//   },
//   center: {
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     textAlign: "center",
//   },
//   green: {
//     backgroundColor: "#000000",
//   },
//   largeLogo: {
//     height: 100,
//   },
//   logo: {
//     height: 50,
//   },
//   cards: {
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   card: {
//     margin: 10,
//   },
//   title: {
//     marginTop: 18,
//   },
//   space: {
//     padding: 10,
//   },
//   media: { width: 200 },
//   largeButton: {
//     width: 250,
//   },
//   largeInput: {
//     width: "60px!important",
//     padding: "0!important",
//     fontSize: "35px!important",
//     textAlign: "center!important",
//   },
//   bordered: {
//     borderWidth: 2,
//     borderRadius: 5,
//     margin: 5,
//     borderStyle: "solid",
//   },
//   row: {
//     display: "flex",
//     padding: 10,
//   },
//   around: {
//     justifyContent: "space-around",
//   },
//   between: {
//     justifyContent: "space-between",
//   },
//   column: { flexDirection: "column" },
// }));

import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  // Common
  root: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
  },
  center: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  column: { flexDirection: "column" },
  main: {
    flex: 1,
    overflow: "auto",
    flexDirection: "column",
    display: "flex",
    color: "#ffffff",
  },
  navy: {
    backgroundColor: "#2C2A29",
  },
  green: {
    backgroundColor: "#D5B170",
  },
  footer: {},
  // choose screen
  cards: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  // order screen
  red: {
    backgroundColor: "#2C2929",
    color: "#ffffff",
  },
  bordered: {
    borderWidth: 2,
    borderRadius: 5,
    margin: 5,
    borderStyle: "solid",
  },
  row: {
    display: "flex",
    padding: 10,
  },
  space: {
    padding: 10,
  },
  around: {
    justifyContent: "space-around",
  },
  between: {
    justifyContent: "space-between",
  },
  largeButton: {
    width: 250,
  },
  largeInput: {
    width: "60px!important",
    padding: "0!important",
    fontSize: "35px!important",
    textAlign: "center!important",
  },

  logo: {
    height: 50,
  },
  largeLogo: {
    height: 100,
  },
  title: {
    marginTop: 18,
  },
  card: { margin: 10 },
  media: { width: 200 },
  ready: {
    backgroundColor: "#003080",
    color: "#ffffff",
    marginTop: 0,
  },
  processing: {
    backgroundColor: "#404040",
    color: "#ffffff",
    marginTop: 0,
  },
  // Signin/Signup
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
