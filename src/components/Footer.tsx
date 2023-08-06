import { styled } from "styled-components"
import { BsFillArrowThroughHeartFill } from 'react-icons/bs'


const FooterStyled = styled.div`
  width: 100%;
  border-top: 2px solid white;
`

const FooterContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  gap: .5rem;
  font-size: .8rem;
  font-weight: bold;
  @media (max-width: 400px){
    font-size: .5rem;
  }
`

const Icon = styled.span`
  font-size: 1rem;
`

const MustaphaChqoubi = styled.a`
  text-decoration: underline;
  color: white;
  cursor: pointer;
  &:hover{
    text-decoration: none
  }
`

const Footer: React.FC = () => {
  return (
    <FooterStyled>
      <FooterContent>
        Built with <Icon><BsFillArrowThroughHeartFill /></Icon> By <MustaphaChqoubi href="https://mustaphachqoubi.me" target="_blank">@MustaphaChqoubi</MustaphaChqoubi>
      </FooterContent>
    </FooterStyled>
  )
}

export default Footer
