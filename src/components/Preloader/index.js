import React from "react";

import COLORS from "../../config/colors";

import { Container, Loader, Box, Logo } from "./styles";

export default function PreLoader() {
  return (
    <Container>
      <Box height={600}>
        <Logo
          source={require("../../assets/images/logo.png")}
          resizeMode="contain"
        />
      </Box>

      <Box>
        <Loader size="large" color={COLORS.orange} />
      </Box>
    </Container>
  );
}
