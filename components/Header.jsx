import Link from "next/link";
import { AppBar, Button, Toolbar, Typography } from "@mui/material";

const Header = () => {
  return (
    <AppBar color="inherit" elevation={0} variant="outlined">
      <Toolbar sx={{ flexWrap: "wrap" }}>
        <Typography variant="h6" noWrap sx={{ flexGrow: 1 }}>
          Dashboard
        </Typography>
        <Link href="/new" passHref>
          <Button variant="contained">📅 + Add new session</Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
