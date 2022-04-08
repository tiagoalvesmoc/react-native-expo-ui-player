import React from "react";
import { Container, Spaccer } from "../../assets/styles";
import Header from "../../components/Header";
import LastPlayers from "../../components/LastPlayers";
import YourPlayList from "../../components/YourPlayList";

import rits from "../../Utils/rits";
import fake from "../../Utils/fakedata";

export default function Home() {
  return (
    <>
      <Header />
      <Spaccer size="30px" />
      <LastPlayers title="Radios Recentes" item={fake} />
      <Spaccer size="15px" />
      <LastPlayers title="Somente Para Vc" item={rits} />
      <Spaccer size="15px" />
      <YourPlayList item={rits} />
    </>
  );
}
