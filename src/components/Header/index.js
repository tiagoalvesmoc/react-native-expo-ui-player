import React from "react";
import { View } from "react-native";

import { Box, Title, Image, Nick, Search, Button } from "../../assets/styles";

export default function Header() {
  return (
    <Box border>
      <Box row>
        <Button activeOpacity={0.6}>
          <Image source={require("../../assets/images/avatar.png")} />
        </Button>

        <Button activeOpacity={0.6}>
          <Image source={require("../../assets/images/menu.png")} />
        </Button>
      </Box>

      <Box>
        <Title big>
          Hello <Nick big>Sarah</Nick>
        </Title>

        <Box row>
          <Search placeholder="O que vc quer ouvir ?" textAlign="center" />
        </Box>
      </Box>
    </Box>
  );
}
