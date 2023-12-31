import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme } from "./Themes";
import { Design, Develope } from "./AllSvgs";

import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import PowerButton from "../subComponents/PowerButton";
import ParticleComponent from "../subComponents/ParticleComponent";
import BigTitle from "../subComponents/BigTitlte";

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const Main = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.body};
  padding: 2rem;
  width: 30vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;
  cursor: pointer;

  font-family: "Ubuntu Mono", monospace;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    color: ${(props) => props.theme.body};
    background-color: ${(props) => props.theme.text};
  }
`;

const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(1em + 1vw);

  ${Main}:hover & {
    & > * {
      fill: ${(props) => props.theme.body};
    }
  }

  & > *:first-child {
    margin-right: 1rem;
  }
`;

const Description = styled.div`
  color: ${(props) => props.theme.text};
  font-size: calc(0.6em + 1vw);
  padding: 0.5rem 0;
  text-align: center;
  

  ${Main}:hover & {
    color: ${(props) => props.theme.body};
  }

  
  ul,
  p {
    margin-left: 2rem;
  }
`;

const Contact = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Box>
        <LogoComponent theme="light" />
        <SocialIcons theme="light" />
        <PowerButton />
        <ParticleComponent theme="light" />

        <Main>
          <Title>You can reach out to me at</Title>
          <Description>
            <a
              style={{ color: "inherit" }}
              target="_blank"
              href={"https://www.linkedin.com/in/atharva-ajit-patkhedkar/"}
            >
              LinkedIn
            </a>
          </Description>

          <Description>
            <a
              style={{ color: "inherit" }}
              target="_blank"
              href={"mailto:aapatkhedkar1209@gmail.com"}
            >
              Email
            </a>
          </Description>

          <Description>
            <a
              style={{ color: "inherit" }}
              target="_blank"
              href={
                "https://drive.google.com/file/d/1ugJwRAhQWbcZgLDKzLoB6CmNM5p41f2r/view?usp=sharing"
              }
            >
              My Resume
            </a>
          </Description>
        </Main>

        <BigTitle text="SKILLS" top="80%" right="30%" />
      </Box>
    </ThemeProvider>
  );
};

export default Contact;
