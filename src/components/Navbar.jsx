import React from "react";
import styled from "styled-components";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import Badge from "@material-ui/core/Badge";

const Container = styled.div`
  height: 60px;
  position: sticky;
  top: 0;
  z-index: 999;
  background-color: #fff;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
`;

const Language = styled.div`
  font-size: 14px;
  cursor: pointer;
`;

const SearchCointainer = styled.div`
  display: flex;
  align-items: center;
  border: 0.5px solid lightgray;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex: 1;
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>En</Language>
          <SearchCointainer>
            <Input />
            <Search style={{ color: "gray", fontSize: "16px" }} />
          </SearchCointainer>
        </Left>
        <Center>
          <Logo>XoXo.</Logo>
        </Center>
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <MenuItem>
            <Badge badgeContent={11} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
