import styled from "styled-components";

import COLORS from "../config/colors";

export const Spaccer = styled.View`
  width: 100%;
  height: ${(props) => props.size};
`;

export const Container = styled.View`
  flex: 1;
  align-items: ${(props) => props.align || "center"};
  flex-direction: ${(props) => (props.direction ? props.direction : "column")};
`;

export const Title = styled.Text`
  color: #fff;
  font-size: ${(props) => (props.big ? "40px" : "24px")};
  font-family: "Poppins_300Light";
  padding-left: 30px;
  margin-top: 20px;
`;

export const Nick = styled.Text`
  color: ${(props) => (props.color ? props.color : "#fff")};
  font-size: ${(props) => (props.big ? "40px" : "24px")};
  font-family: "Poppins_500Medium";
  padding-left: 10px;
  margin-top: 20px;
`;

export const Image = styled.Image`
  margin-top: 60px;
  margin-left: 10px;
  margin-right: 10px;
`;

export const Box = styled.View`
  padding: 10px;
  width: 100%;
  background-color: ${COLORS.primary};
  flex-direction: ${(props) => (props.row ? "row" : "column")};
  justify-content: space-between;
  border-bottom-left-radius: ${(props) => (props.border ? "20px" : "0")};
  border-bottom-right-radius: ${(props) => (props.border ? "20px" : "0")};
`;

export const Search = styled.TextInput`
  background-color: #fff;
  width: 98%;
  height: 50px;
  border-radius: 10px;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 10px;
  padding: 10px;
  font-size: 18px;
  font-family: "Poppins_300Light";
`;
export const Button = styled.TouchableOpacity``;
