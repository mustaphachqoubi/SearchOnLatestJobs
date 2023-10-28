import React from "react"
import { styled } from "styled-components"

const LandingContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const Section= styled.div`
  padding: 1rem 0rem;
  height: 100vh;
`

const Hero = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 500px){
    flex-direction: column-reverse;
  }
  width: 100%;
  height: 100%
`

const SectionTitle = styled.h2`
  text-decoration: underline;
`

const LeftHero = styled.div`
 flex: 1; 
`

const RightHero = styled.div`
 flex: 1; 
 display: flex;
 justify-content: center;
 @media (max-width: 400px){
 flex: 0.5; 
 }
`

const Logic = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`

const LogicText = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`

const LogicCreative = styled.div`
  flex: 1;
  display: flex;
`

const H1 = styled.h1`
font-size: 7vw;
text-align: left;

@media (max-width: 700px){
  font-size: 10vw;
  text-align: center;
}
`

const H3 = styled.h3`
text-align: left;
font-weight: normal;
@media (max-width: 400px){
  text-align: center;
}
`

const Start = styled.button`
  border: 2px solid white;
  border-radius: 20px;
  width: 100%;
  height: 5vh;
  background: white;
  color: #242424;
  cursor: pointer;
  font-weight: bold;
  font-size: 1rem;
  &:hover{
    background: #242424;
    color: white;
  }
  @media (max-width: 500px){
    width: 100%;
  }
`

const LandingPage: React.FC = () => {
  return (
    <LandingContainer>

      <Section>
        <Hero>
        <LeftHero>
           <H1>Empowering Your Job Hunt</H1> 
            <H3>Tracking 🕵️ , Applying 🤝 , and Paving the Path to Success 🏆</H3>
            <Start>Start now</Start>
          </LeftHero>
        <RightHero>Creative Design</RightHero>
        </Hero>
      </Section>
      
      <Section>
        <SectionTitle>Software Logic</SectionTitle>
        <Logic>
          <LogicText>Text</LogicText>
          <LogicCreative>Logic</LogicCreative>
        </Logic>
      </Section>

      <Section>
        <SectionTitle>About the Author</SectionTitle>
      </Section>

      <Section>
        <SectionTitle>Join our world</SectionTitle>
      </Section>

    </LandingContainer>
  )
}

export default LandingPage
