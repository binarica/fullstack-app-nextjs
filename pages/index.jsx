import { Typography } from "@mui/material";
import Layout from "../components/Layout";
import SessionsList from "../components/SessionsList";

const IndexPage = (props) => {
  return (
    <Layout>
      <Typography variant="h4" mb={2}>My Sessions</Typography>
      <SessionsList sessions={props.sessions} />
    </Layout>
  );
};

export const getServerSideProps = async () => {
  const res = await fetch("http://localhost:3000/api/sessions");
  const sessions = await res.json();
  return {
    props: { sessions },
  };
};

export default IndexPage;
