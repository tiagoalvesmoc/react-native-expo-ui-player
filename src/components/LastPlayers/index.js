import React from "react";
import { FlatList } from "react-native";
import ListRadios from "../ListRadios";
import fake from "../../Utils/fakedata";

import { Box, Title } from "./styles";

export default function LastPlayers({ title, item }) {
  return (
    <Box>
      <Title>{title}</Title>

      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        // data={["a", "b", "c"]}
        data={item}
        renderItem={({ item }) => <ListRadios item={item} />}
        keyExtractor={(item) => item}
      />
    </Box>
  );
}
