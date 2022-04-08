import React from "react";

import { Box, Title, Cover } from "./styles";

export default function PlayList({ item }) {
  return (
    <Box>
      <Cover source={{ uri: item.logoUrl }} resizeMode="cover" />
    </Box>
  );
}
