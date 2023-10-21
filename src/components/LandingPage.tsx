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
  @media (max-width: 400px){
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

const LandingPage: React.FC = () => {
  return (
    <LandingContainer>

      <Section>
        <Hero>
        <LeftHero>Introduction about software</LeftHero>
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
