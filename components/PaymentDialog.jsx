import { useContext, useState } from "react";
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  InputAdornment,
  Stack,
} from "@mui/material";
import AlertContext from "../context/AlertContext";

const PaymentDialog = ({ sessionId, open, onClose }) => {
  const [amount, setAmount] = useState("");

  const toggleAlert = useContext(AlertContext);

  const handleClose = () => {
    setAmount("");
    onClose();
  };

  const submitData = async (e) => {
    e.preventDefault();
    const body = { sessionId, amount };
    await fetch(`http://localhost:3000/api/payment`, {
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
        setAmount("");
        toggleAlert("success", "Payment added successfully");
        onClose();
      })
      .catch((err) => {
        toggleAlert("error", err.message);
      });
  };

  return (
    <Dialog open={open} fullWidth={true} onClose={handleClose}>
      <DialogTitle>Add Payment</DialogTitle>
      <DialogContent>
        <Stack spacing={2}>
          <DialogContentText>Enter payment amount</DialogContentText>
          <TextField
            autoFocus
            label="Amount"
            type="number"
            value={amount}
            onChange={(e) => setAmount(parseInt(e.target.value, 10))}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">$</InputAdornment>
              ),
              inputProps: { min: 0 },
            }}
          />
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={submitData} disabled={!amount}>
          OK
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default PaymentDialog;
