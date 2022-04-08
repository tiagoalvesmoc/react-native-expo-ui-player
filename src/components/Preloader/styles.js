import styled from "styled-components";

import COLORS from "../../config/colors";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;

  background-color: #000;
`;

export const Logo = styled.Image`
  width: 700;
`;

export const Box = styled.View`
  align-items: center;
  justify-content: flex-end;

  width: 100%;
  height: ${(props) => props.height || "355px"};

  margin-bottom: 10px;
`;

export const Loader = styled.ActivityIndicator``;
