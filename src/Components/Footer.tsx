import React from "react";
import { Typography } from "@material-ui/core";
import styled from "styled-components";

const Footer = styled.footer`
  margin-top: 20px;
  padding-top: 16px;
  color: white;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #1976d2;
`;

const FooterWrapper = () => {
  return (
    <Footer>
      <Typography paragraph={true} align="center">
        New York Times 2022
      </Typography>
    </Footer>
  );
};

export default FooterWrapper;
