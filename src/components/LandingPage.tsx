import React, { useEffect, useRef, useState } from "react";
import { styled } from "styled-components";
import Navbar from "./Navbar";

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
  @media (max-width: 700px) {
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
  padding: 0.3rem 1rem 0rem 1rem;
  flex-direction: column;
  background: #343434;
  color: black;
  width: 70vw;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
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
  position: relative;
  z-index: 1;
  background: #242424;
  width: 100%;
  height: 100%;
  flex: 9;
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  padding: 1rem;
  pointer-events: none;
`;

const H1 = styled.h1`
  text-align: center;
  font-size: 500%;
  @media (max-width: 700px) {
    font-size: 230%;
  }
`;

const H3 = styled.h3`
  text-align: center;
  font-weight: bold;

  @media (min-width: 700px) {
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
  }
  @media (max-width: 700px) {
    width: 100%;
  }
  @media (min-width: 2000px) {
    font-size: 250%;
  }
`;

const Job = styled.div`
  color: white;
  border: 2px solid;
  border-radius: 0.3rem;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  text-decoration: none;
  padding: 1rem;
  gap: 1rem;
  background: #242424;
  transition: all 0.4s ease;
  cursor: pointer;
  width: 15rem;
  @media (max-width: 400px) {
    width: 100%;
  }
`;

const JobTitle = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  font-weight: bold;
`;

const JobCompany = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: underline;
  font-size: 0.8rem;
  font-weight: bold;
`;

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
  flex-direction: column;
`;

const JobLocation = styled.div`
  border: 2px solid white;
  padding: 0.5rem;
  border-radius: 0.3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.7rem;
  font-weight: bold;
  text-align: center;
`;

const JobTime = styled.div`
  border: 2px solid white;
  padding: 0.5rem;
  border-radius: 0.3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.7rem;
  font-weight: bold;
`;

const LandingPage: React.FC = () => {
  const sectionTitleRef = useRef(null);
  const logicCreativeRef = useRef(null);
  const lastLogicText = useRef(null);
  const authorSectionRef = useRef(null);
  const worldSectionRef = useRef(null);
  const endLogicTextRef = useRef(null);
  const logicTextRef = useRef(null);

  const [sentenceIndex, setSentenceIndex] = useState(0);
  const [visibleSentences, setVisibleSentences] = useState([]);

  const Sentences = [
    { id: 0, sentence: "First", number: true },
    {
      id: 1,
      sentence: `
      You will find just the suitable jobs that the algorithm choosed carfelly for you.
      `,
      number: false,
    },
    { id: 2, sentence: `Second`, number: true },
    {
      id: 3,
      sentence: `
      After applying to the company that you choose instead of they choosing you, you will find their data in your map
    `,
      number: false,
    },
    { id: 4, sentence: "And, that's it", number: true },
    {
      id: 5,
      sentence: `
     Now, you have the CV's of the companies and you can hire or ban whatever you want 
    `,
      number: false,
    },
    { id: 6, sentence: " " },
  ];
  const Colors = [
    { id: 1, hex: "#29c667" },
    { id: 2, hex: "#d41d82" },
    { id: 3, hex: "#3998f6" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const visibleSentences = Sentences.map((sentence, index) => {
        const element = document.getElementById(`sentence-${sentence.id}`);
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top <= window.innerHeight && rect.bottom >= 0;
        return { index, isVisible };
      });

      const newSentenceIndex = visibleSentences.find((item) => item.isVisible)?.index;
      if (newSentenceIndex !== undefined) {
        setSentenceIndex(newSentenceIndex);
      }

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
  }, [sentenceIndex, Sentences]);

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
        {Sentences.map((sentence, index) => (
          <LogicText
            id={`sentence-${sentence.id}`}
            style={{
              color:
                sentence.number === true
                  ? `${Colors[index++ % Colors.length].hex}`
                  : undefined,
            }}
            key={sentence.id}
            ref={
              index === Sentences.length - 2
                ? lastLogicText
                : index === Sentences.length - 1
                ? endLogicTextRef 
                : logicTextRef
            }
          >
            {sentence.sentence}
          </LogicText>
        ))}

        <LogicCreative ref={logicCreativeRef}>
          <WindowBTNS>
            <WindowBTN></WindowBTN>
            <WindowBTN></WindowBTN>
            <WindowBTN></WindowBTN>
          </WindowBTNS>

          <WindowContent>
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                zIndex: 2,
                padding: ".5rem",
                color: "black",
                pointerEvents: "none",
              }}
            >
              <Navbar />
            </div>

            {
              sentenceIndex === 1 || sentenceIndex === 2 ? (
                <Job>
          <JobTitle>Job Title</JobTitle>
          <JobCompany>Job company</JobCompany>
          <Container>
            <JobLocation>Job Location</JobLocation>
            <JobTime>Job posted time</JobTime>
          </Container>
        </Job>
              ) : sentenceIndex >= 3 ? (
              <div
              style={{
                display: "flex",
                color: "white",
                justifyContent: "center",
                flexDirection: "column-reverse",
                gap: "1rem",
                border: "2px solid white",
                padding: "1rem",
                borderRadius: ".5rem",
              }}
            >
              <div
                style={{
                  border: "2px solid white",
                  borderRadius: ".5rem",
                  padding: "1rem",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                The company
              </div>
              <div
                style={{
                  border: "2px solid white",
                  borderRadius: ".5rem",
                  padding: "1rem",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                My path with them
              </div>

              <div
                style={{
                  border: "2px solid white",
                  borderRadius: ".5rem",
                  padding: "1rem",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                My choice
              </div>
            </div>
              ) : null
            }

            {/*<Job>
          <JobTitle>Job Title</JobTitle>
          <JobCompany>Job company</JobCompany>
          <Container>
            <JobLocation>Job Location</JobLocation>
            <JobTime>Job posted time</JobTime>
          </Container>
        </Job>*/}

            
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
