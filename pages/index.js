// import Head from "next/head";
// import Image from "next/image";
// import { Inter } from "next/font/google";
// import styles from "@/styles/Home.module.css";
import Header from "@/components/Header/Header";
import { styled } from "styled-components";

const Wrapper = styled.div`
  min-height: 100%;
  overflow: clip;
`;

const StyledMain = styled.main``;

const StyledMainContainer = styled.div`
  padding: 15px 0;
`;

const StyledTitle = styled.h1`
  font-size: 38px;
  text-align: center;
`;

// box-shadow: 0px 0px 10px 2px #00000073;
// const Container = styled.div`
//   padding: 0 15px;
//   margin: 0 auto;
//   min-height: 1500px;
// `;

export default function HomePage() {
  return (
    <>
      <Wrapper>
        <Header />
        <StyledMain>
          <StyledMainContainer>
            <StyledTitle>Hello, I am Nataliia Osman!</StyledTitle>
          </StyledMainContainer>
        </StyledMain>
      </Wrapper>
    </>
  );
}
