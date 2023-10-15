import { Link } from "react-router-dom"
import { styled } from "styled-components"

const Title = styled.h2`
 display: flex;
 justify-content: center;
 align-items: center
`

const Input = styled.input`
  border: 2px solid white;
  border-radius: .3rem;
  background: transparent;
  padding: .5rem 2rem;
  max-width: 20rem;
  font-weight: bold;
  &::placeholder{
  color: white;
  font-weight: bold;
  }
`

const Continue = styled.button`
  border: 2px solid white;
  border-radius: .3rem;
  font-weight: bold;
  color: white;
  padding: .5rem 1rem;
  background: transparent;
  cursor: pointer;
  &:hover{
  background: white;
  color: #242424;
  }

`

const SsoContainer = styled.form`
 padding: 2rem 0rem;
 display: flex;
 justify-content: center;
 align-items: center;
 width: 100%;
 flex-direction: column;
 gap: 1rem;

`

const UsePass = styled(Link)`
text-decoration: none;
  font-size: .8rem;
  padding: .5rem 0rem;
  color: white;
  display: flex;
  justify-content: end;
  &:hover{
  text-decoration: underline;
  }
`


const Sso = () => {
  return (
  <>
      <Title>Sign in to your account</Title>

      <SsoContainer>
        <Input type="email" placeholder="Email"></Input>
        <Continue type="submit">Continue with SSO</Continue>

        <UsePass to="/signin">Use your password instead</UsePass>
      </SsoContainer>
  </>
  )
}

export default Sso
