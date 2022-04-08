import React from "react";
import { FlatList } from "react-native";
import { Box, Title } from "./styles";
import PlayList from "../PlayList";

export default function YourPlayList({ item }) {
  return (
    <Box>
      <Title>Top PlayList</Title>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        // data={["a", "b", "c"]}
        data={item}
        renderItem={({ item }) => <PlayList item={item} />}
        keyExtractor={(item) => item}
      />
    </Box>
  );
}
