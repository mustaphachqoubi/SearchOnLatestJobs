import { Link } from "react-router-dom"
import { styled } from "styled-components"


const ForgotPassContainer = styled.form`
  padding: 2rem 0rem;
 display: flex;
 justify-content: center;
 align-items: center;
 width: 100%;
 flex-direction: column;
 gap: 1rem;

`

const Title = styled.h2`
 display: flex;
 justify-content: center;
 align-items: center
`

const Expression = styled.p`
  font-size: .8rem;
  text-align: center;
`

const ExpressionContainer = styled.div`
  display: flex;
 justify-content: center;
 align-items: center;
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

const ReturnToSignIn= styled(Link)`
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


const ForgotPass = () => {
  return (
    <>
      <Title>Reset your password</Title>

      <ExpressionContainer>
        <Expression>Enter the email address associated with your account, and we'll send you a link to reset your password.</Expression>
      </ExpressionContainer>

      <ForgotPassContainer>
        <Input type="email" placeholder="Email"></Input>
        <Continue type="submit">Continue</Continue>

        <ReturnToSignIn to="/signin">Return to sign in</ReturnToSignIn>
      </ForgotPassContainer>

    </>
    
  )
}

export default ForgotPass
