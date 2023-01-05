import React from "react";
import { Typography, Container, Button } from "@material-ui/core";
import Context from "../context.tsx";

const Header = () => {
  const data = React.useContext(Context);

  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <Container maxWidth="sm" style={{ marginTop: "20px" }}>
      <Typography variant="h3" align="center" sx={{ paddingTop: 10 }}>
        News from the World!
      </Typography>
      {data?.length > 0 ? (
        <Typography align="center" sx={{ m: 2, fontStyle: "italic" }}>
          {" "}
          We have: {data.length} articles!
        </Typography>
      ) : (
        <>
          <Typography
            align="center"
            sx={{ m: 10 }}
            style={{ color: "#dd2c00" }}
          >
            nothing found!
          </Typography>
          <Button
            variant="contained"
            onClick={refreshPage}
            style={{ margin: "20px auto", display: "flex" }}
          >
            Show all Articles
          </Button>
        </>
      )}
    </Container>
  );
};

export default Header;
