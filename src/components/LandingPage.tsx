import React, { useEffect, useRef, useState } from "react";
import { styled } from "styled-components";

const LandingContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Section = styled.div`
  padding: 1rem 0rem;
  height: 100vh;
`;

const Hero = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 500px) {
    flex-direction: column-reverse;
  }
  width: 100%;
  height: 100%;
`;

const HeroButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  flex-direction: row;
  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

const SectionTitle = styled.h2`
  text-decoration: underline;
`;

const HeroContent = styled.div`
  line-height: 2.5rem;
`;

const HeroCreative = styled.div`
  z-index: 0px;
  position: absolute;
  top: 0;
  width: 100%;
  height: 35vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 12px;
  @media (max-width: 500px) {
    height: 30vh;
  }
`;

const Logic = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 0.3rem;
  position: relative;
`;

const LogicText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vh;
  height: 50vh;
`;

const LogicCreative = styled.div`
  position: absolute;
  bottom: 0;
  z-index: 2;
  display: flex;
  background: #343434;
  width: 70vw;
  border-radius: 1rem;
  overflow: hidden;
  @media (max-width: 700px) {
    width: 100%;
  }
`;

const WindowBTNS = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  padding-left: 1rem;
  gap: 1rem;
  width: 100%;
  height: 10%;
`;

const WindowBTN = styled.div`
  background: #6e6e6e;
  width: 1rem;
  height: 1rem;
  border-radius: 100%;
`;

const WindowContent = styled.div``;

const H1 = styled.h1`
  font-size: 7vw;
  text-align: center;
  line-height: 3.5rem;
  @media (max-width: 700px) {
    font-size: 10vw;
  }
`;

const H3 = styled.h3`
  text-align: center;
  font-weight: bold;
`;

const Explain = styled.div`
  border: 2px solid white;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  cursor: pointer;
  font-size: 110%;
  width: 30%;
  height: 5vh;
  &:hover {
    background: white;
    color: #242424;
  }
  transition: all 0.4s ease;
  @media (max-width: 500px) {
    width: 100%;
  }
`;

const Start = styled.button`
  border: 2px solid white;
  border-radius: 20px;
  background: white;
  color: #242424;
  cursor: pointer;
  font-weight: bold;
  font-size: 110%;
  width: 30%;
  height: 5vh;
  transition: all 0.4s ease;
  &:hover {
    background: linear-gradient(45deg, #0ce39a, #69007f, #fc0987);
    border: 2px solid white;
    color: white;
  }
  @media (max-width: 500px) {
    width: 100%;
  }
`;

const LandingPage: React.FC = () => {
  const sectionTitleRef = useRef(null);
  const logicCreativeRef = useRef(null);
  const lastLogicText = useRef(null);
  const authorSectionRef = useRef(null);
  const worldSectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionTitleRef.current.getBoundingClientRect().top <= 0) {
        if (lastLogicText.current.getBoundingClientRect().top <= 0) {
          authorSectionRef.current.style.display = "flex";
          worldSectionRef.current.style.display = "flex";

          logicCreativeRef.current.style.top = "25%";
          logicCreativeRef.current.style.position = "absolute";
        } else {
          logicCreativeRef.current.style.position = "fixed";
          logicCreativeRef.current.style.top = "50%";
        }
      } else {
        authorSectionRef.current.style.display = "none";
        worldSectionRef.current.style.display = "none";
        logicCreativeRef.current.style.position = "absolute";
        logicCreativeRef.current.style.top = "25%";
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <LandingContainer>
      <Section>
        <Hero>
          <HeroContent>
            <HeroCreative>
              <img src="../public/discord.svg" />
            </HeroCreative>
            <H1>Empowering Your Job Hunt</H1>
            <H3>Track, Apply, and Paving the Path to Success 🏆</H3>
            <HeroButtons>
              <Start>Start now</Start>
              <Explain>Explain more</Explain>
            </HeroButtons>
          </HeroContent>
        </Hero>
      </Section>

      <SectionTitle ref={sectionTitleRef}>Software Logic</SectionTitle>
      <Logic>
        <LogicText>one</LogicText>
        <LogicText>two</LogicText>
        <LogicText>three</LogicText>
        <LogicText ref={lastLogicText}>four</LogicText>
        <LogicText></LogicText>

        <LogicCreative ref={logicCreativeRef}>
          <WindowBTNS>
            <WindowBTN></WindowBTN>
            <WindowBTN></WindowBTN>
            <WindowBTN></WindowBTN>
          </WindowBTNS>

          <WindowContent></WindowContent>
        </LogicCreative>
      </Logic>

      <Section ref={authorSectionRef}>
        <SectionTitle>About the Author</SectionTitle>
      </Section>

      <Section ref={worldSectionRef}>
        <SectionTitle>Join our world</SectionTitle>
      </Section>
    </LandingContainer>
  );
};

export default LandingPage;
