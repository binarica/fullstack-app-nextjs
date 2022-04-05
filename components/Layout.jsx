import { useState } from "react";
import { Alert, Container, Snackbar } from "@mui/material";
import AlertContext from "../context/AlertContext";
import Header from "./Header";

const Layout = (props) => {
  const [alert, setAlert] = useState({
    open: false,
    type: "success",
    message: "",
  });

  const handleAlertClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setAlert({ ...alert, open: false });
  };

  const toggleAlert = (type, message) => {
    setAlert({ open: true, type, message });
  };

  return (
    <AlertContext.Provider value={toggleAlert}>
      <Header />
      <Container maxWidth="xl" sx={{ pt: "5.5em" }}>
        {props.children}
      </Container>
      <Snackbar
        open={alert.open}
        autoHideDuration={6000}
        onClose={handleAlertClose}
      >
        <Alert
          onClose={handleAlertClose}
          variant="filled"
          severity={alert.type}
          sx={{ width: "100%" }}
        >
          {alert.message}
        </Alert>
      </Snackbar>
    </AlertContext.Provider>
  );
};

export default Layout;
