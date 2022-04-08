import React from "react";

import { Box, Title, Cover } from "./styles";

export default function ListRadios({ item }) {
  return (
    <Box>
      <Cover source={{ uri: item.logoUrl }} />
      <Title>{item.name}</Title>
    </Box>
  );
}
