import { useContext, useState } from "react";
import Router from "next/router";
import {
  Box,
  Button,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import DateTimePicker from "@mui/lab/DateTimePicker";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";

import AlertContext from "../context/AlertContext";

const SessionForm = () => {
  const [date, setDate] = useState(() => {
    const newDate = new Date();
    newDate.setSeconds(0, 0);
    return newDate;
  });

  const [patient, setPatient] = useState("");
  const [fee, setFee] = useState(0);

  const toggleAlert = useContext(AlertContext);

  const submitData = async (e) => {
    e.preventDefault();
    const body = { date, patient, fee };
    await fetch(`http://localhost:3000/api/session`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    })
      .then((res) => {
        if (!res.ok) {
          return res.json().then(({ error }) => {
            throw new Error(error);
          });
        }
        Router.push("/");
      })
      .catch((err) => {
        toggleAlert("error", err.message);
      });
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Box
        component="form"
        onSubmit={submitData}
        sx={{
          width: 500,
          mx: "auto",
        }}
      >
        <Stack spacing={3}>
          <Typography variant="h5">New Session</Typography>
          <DateTimePicker
            renderInput={(props) => <TextField {...props} />}
            label="Date"
            value={date}
            onChange={(newValue) => {
              setDate(newValue);
            }}
          />
          <TextField
            required
            label="Patient's name"
            value={patient}
            onChange={(e) => setPatient(e.target.value)}
          />
          <TextField
            label="Fee"
            type="number"
            value={fee}
            onChange={(e) => setFee(parseInt(e.target.value, 10))}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">$</InputAdornment>
              ),
              inputProps: { min: 0 },
            }}
          />
          <Stack
            direction="row"
            justifyContent="flex-end"
            alignItems="center"
            spacing={2}
          >
            <Button
              disabled={!date || !patient || !fee}
              size="large"
              type="submit"
              variant="contained"
            >
              Submit
            </Button>
            <Button
              onClick={() => Router.push("/")}
              size="large"
              variant="outlined"
            >
              Cancel
            </Button>
          </Stack>
        </Stack>
      </Box>
    </LocalizationProvider>
  );
};

export default SessionForm;
