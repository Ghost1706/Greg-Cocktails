import React from "react";
import styled from "styled-components";

const Container = styled.nav`
  display: block;
  background-color: white;
  box-shadow: 0px 7px 9px -3px rgba(0, 0, 0, 0.63);
  -webkit-box-shadow: 0px 7px 9px -3px rgba(0, 0, 0, 0.63);
  -moz-box-shadow: 0px 7px 9px -3px rgba(0, 0, 0, 0.63);
`;
const Wrapper = styled.div`
  padding: 1rem 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 480px) {
    padding: 1rem;
  }
`;
const BrandWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;
const BrandName = styled.h2`
  font-size: 1.5rem;
  color: darkgreen;
  font-weight: bold;
`;
const BrandSpan = styled.span`
  font-weight: lighter;
  color: lightgreen;
  font-size: 1.5rem;
  letter-spacing: 2px;
  font-style: italic;
`;

const Login = styled.a`
  color: green;
  font-size: 1.1rem;
  letter-spacing: 2px;
  @media screen and (max-width: 480px) {
    font-size: 1.5rem;
  }
`;
const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <BrandWrapper>
          <BrandName>Greg's</BrandName>
          <BrandSpan>Cocktails</BrandSpan>
        </BrandWrapper>
        <Login>Login</Login>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
