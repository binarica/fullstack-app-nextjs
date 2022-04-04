import { useState } from "react";
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

const PaymentDialog = ({ open, onClose }) => {
  const [amount, setAmount] = useState("");

  return (
    <Dialog open={open} fullWidth={true} onClose={onClose}>
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
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={onClose}>OK</Button>
      </DialogActions>
    </Dialog>
  );
};

export default PaymentDialog;
