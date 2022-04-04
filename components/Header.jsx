import Link from "next/link";
import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import ScheduleIcon from "@mui/icons-material/Schedule";

const Header = () => {
  return (
    <AppBar color="inherit" elevation={0} variant="outlined">
      <Toolbar sx={{ flexWrap: "wrap" }}>
        <Typography variant="h6" noWrap sx={{ flexGrow: 1 }}>
          Therapist Dashboard
        </Typography>
        <Link href="/new" passHref>
          <Button variant="contained" startIcon={<ScheduleIcon />}>
            Add new session
          </Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
