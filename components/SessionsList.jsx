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

const SessionsList = ({ sessions }) => (
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
        {sessions.map(({ id, date, patient, fee }) => (
          <TableRow
            key={id}
            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
          >
            <TableCell>{new Date(date).toLocaleString()}</TableCell>
            <TableCell>{patient}</TableCell>
            <TableCell align="right">${fee}</TableCell>
            <TableCell align="center">
              <IconButton color="primary">
                <AddCardIcon />
              </IconButton>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);

export default SessionsList;
