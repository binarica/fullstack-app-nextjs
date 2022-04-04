import { Container } from "@mui/material";
import Header from "./Header";

const Layout = (props) => (
  <div>
    <Header />
    <Container sx={{ pt: "5.5em" }}>{props.children}</Container>
  </div>
);

export default Layout;
