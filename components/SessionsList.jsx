import { useState } from "react";
import {
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import AddCardIcon from "@mui/icons-material/AddCard";
import PaymentDialog from "./PaymentDialog";

const SessionsList = ({ sessions }) => {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell>Patient's Name</TableCell>
              <TableCell align="right">Fee</TableCell>
              <TableCell align="center">Payment</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sessions.map(({ id, date, patient, fee }) => {
              const formattedDate = new Date(date).toLocaleString([], {
                dateStyle: "short",
                timeStyle: "short",
              });
              return (
                <TableRow
                  key={id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>{formattedDate}</TableCell>
                  <TableCell>{patient}</TableCell>
                  <TableCell align="right">${fee}</TableCell>
                  <TableCell align="center">
                    <IconButton
                      color="primary"
                      onClick={() => setDialogOpen(true)}
                    >
                      <AddCardIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <PaymentDialog open={dialogOpen} onClose={() => setDialogOpen(false)} />
    </>
  );
};

export default SessionsList;
