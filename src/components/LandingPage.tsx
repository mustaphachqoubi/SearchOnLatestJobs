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

const HeroButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  flex-direction: row;
  width: 100%;
  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

const SectionTitle = styled.h2`
  text-decoration: underline;
`;

const Hero = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 85%;
`;

const HeroContent = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  gap: 2rem;
  `;

const HeroCreative = styled.div`
  flex: 1;
  z-index: 0px;
  width: 100%;
  height: 40vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 12px;
  @media (max-width: 500px) {
    height: 35vh;
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
  width: 70vw;
  height: 50vh;
  font-size: 5vw;
  font-weight: bold;
  text-align: center;
  @media (max-width: 700px){
  font-size: 10vw;
  width: 100%;
  }
`;

const LogicCreative = styled.div`
  position: absolute;
  bottom: 0;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: .3rem 1rem 0rem 1rem;
  flex-direction: column;
  background: #343434;
  color: black;
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
  gap: 1rem;
  width: 100%;
  height: 40px;
`;

const WindowBTN = styled.div`
  background: #6e6e6e;
  width: 1rem;
  height: 1rem;
  border-radius: 100%;
`;

const WindowContent = styled.div`
  background: white;
  width: 100%;
  height: 100%;
  flex: 9;
  border-top-left-radius: .5rem;
  border-top-right-radius: .5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const H1 = styled.h1`
  text-align: center;
  font-size: 500%;
  @media (max-width: 700px){
    font-size: 230%;
  }
`;

const H3 = styled.h3`
  text-align: center;
  font-weight: bold;

  @media (min-width: 700px){
    font-size: 200%;
  }
`;

const Explain = styled.div`
  border: 2px solid white;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  cursor: pointer;
  font-size: 100%;
  width: 30%;
  height: 5vh;
  &:hover {
    background: white;
    color: #242424;
  }
  transition: all 0.4s ease;
  @media (max-width: 700px) {
    width: 100%;
  }
  @media (min-width: 2000px) {
  font-size: 250%;
  }
`;

const Start = styled.button`
  border: 2px solid white;
  border-radius: 20px;
  background: white;
  color: #242424;
  cursor: pointer;
  font-weight: bold;
  font-size: 100%;
  width: 30%;
  height: 5vh;
  transition: all 0.4s ease;
  &:hover {
    background: linear-gradient(45deg, #29c667, #d41d82, #3998f6);
    border: 2px solid white;
    color: white;
  };
  @media (max-width: 700px) {
    width: 100%;
  }
  @media (min-width: 2000px) {
  font-size: 250%;
  }
`;

const LandingPage: React.FC = () => {
  const sectionTitleRef = useRef(null);
  const logicCreativeRef = useRef(null);
  const lastLogicText = useRef(null);
  const authorSectionRef = useRef(null);
  const worldSectionRef = useRef(null);
  const endLogicTextRef = useRef(null);

  const Sentences = [
    {id: 0, sentence: "First", number: true},
    {id: 1, sentence: `
      You will find just the suitable jobs that the algorithm choosed carfelly for you.
      `, number: false},
    {id: 2, sentence: `Second`, number: true},
    {id: 3, sentence: `
      After applying to the company that you choose instead of they choosing you, you will find their data in your map
    `, number: false},
    {id: 4, sentence: "And, that's it", number: true},
    {id: 5, sentence: `
     Now, you have the CV's of the companies and you can hire or ban whatever you want 
    `, number: false},
    {id: 6, sentence: " "},
  ]
  const Colors = [
    {id: 1, hex: "#29c667"},
    {id: 2, hex: "#d41d82"},
    {id: 3, hex: "#3998f6"},
    {id: 4, hex: "#febc17"},
  ]

  useEffect(() => {
    const handleScroll = () => {
      if (sectionTitleRef.current.getBoundingClientRect().top <= 0) {
        if (lastLogicText.current.getBoundingClientRect().top <= 0) {
          authorSectionRef.current.style.display = "flex";
          worldSectionRef.current.style.display = "flex";

          logicCreativeRef.current.style.position = "static";
          logicCreativeRef.current.style.height = "70vh";
          endLogicTextRef.current.style.display = "none";
        } else {
          logicCreativeRef.current.style.position = "fixed";
          logicCreativeRef.current.style.top = "40%";
          logicCreativeRef.current.style.bottom = "-10%";
          endLogicTextRef.current.style.display = "flex";
        }
      } else {
        authorSectionRef.current.style.display = "none";
        worldSectionRef.current.style.display = "none";
        logicCreativeRef.current.style.position = "absolute";
        logicCreativeRef.current.style.top = "10%";
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
          <HeroCreative>
              <img src="../public/discord.svg" />
            </HeroCreative>
          <HeroContent>
            
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

        {
          Sentences.map((sentence, index) => (
            <LogicText
              style={{
                color: sentence.number === true ?
                  `${Colors[Math.floor(Math.random() * Colors.length)].hex}`
                  : undefined,

              }}
              key={sentence.id} 
              ref={index === Sentences.length - 2 ? lastLogicText : index === Sentences.length - 1 ? endLogicTextRef : null}>{sentence.sentence}</LogicText>
          ))
        }
        
        <LogicCreative ref={logicCreativeRef}>
          <WindowBTNS>
            <WindowBTN></WindowBTN>
            <WindowBTN></WindowBTN>
            <WindowBTN></WindowBTN>
          </WindowBTNS>

          <WindowContent>
            one
          </WindowContent>
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
