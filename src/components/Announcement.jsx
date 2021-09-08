import styled from "styled-components";
import React from "react";

const Container = styled.div`
  height: 30px;
  background-color: teal;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
  cursor: default;
`;

const Announcement = () => {
  return <Container>Free Shipping for Orders over $50</Container>;
};

export default Announcement;
