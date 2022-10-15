import React from "react";
import styled from "styled-components";
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
import { Link } from "react-router-dom";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: space-between;
  background-color: ${({ theme }) => theme.bg};
  height: calc(100vh - 60px);

  gap: 2rem;
  @media screen and (max-width: 480px) {
    gap: 0;
    padding-bottom: 2rem;
    height: 100vh;
  }
`;
const Btn = styled(Link)`
  letter-spacing: 3px;
  background-color: #017c01c7;
  color: white;

  text-decoration: none;
  cursor: pointer;
  text-transform: uppercase;
  font-size: 0.9rem;
  font-weight: 300;
  padding: 1rem 1.5rem;
  &:hover {
    background-color: green;
  }
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 70%;
  height: 50vh;
  margin-bottom: 8%;
  align-self: center;
  justify-self: center;
  box-shadow: -1px -1px 9px 1px rgba(10, 153, 35, 0.82);
  -webkit-box-shadow: -1px -1px 9px 1px rgba(10, 153, 35, 0.82);
  -moz-box-shadow: -1px -1px 9px 1px rgba(10, 153, 35, 0.82);
  @media screen and (max-width: 480px) {
    width: 80%;
    height: 50vh;
    margin: 55% 1rem;
  }
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-content: center;
  font-size: 3rem;
  cursor: pointer;
  color: ${({ theme }) => theme.text};
  align-self: center;
  @media screen and (max-width: 900px) {
    font-size: 2rem;
  }
  @media screen and (max-width: 480px) {
    font-size: 1.2rem;
  }
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-content: center;
  font-size: 3rem;
  align-self: center;
  color: ${({ theme }) => theme.text};
  @media screen and (max-width: 900px) {
    font-size: 2rem;
  }
  @media screen and (max-width: 480px) {
    font-size: 1.2rem;
  }
`;
const Center = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;
const Line = styled.div`
  width: 1px;
  height: 80%;
  background-color: green;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
`;
const Or = styled.div`
  border: 2px solid green;
  border-radius: 50%;
  padding: 10px;
  letter-spacing: 2px;
  z-index: 10;
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.bg};
`;

const Login = () => {
  const google = () => {
    window.open("http://localhost:5000/auth/google", "_self");
  };
  return (
    <Container>
      <Btn to="/">back home</Btn>
      <Wrapper>
        <Left onClick={google}>
          <FcGoogle />
          oogle
        </Left>
        <Center>
          <Line />
          <Or>OR</Or>
        </Center>
        <Right>
          <BsGithub />
          ithub
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Login;
