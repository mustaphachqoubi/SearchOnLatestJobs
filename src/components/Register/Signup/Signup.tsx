import { Link } from "react-router-dom";
import { styled } from "styled-components";


const Title = styled.h2`
 display: flex;
 justify-content: center;
 align-items: center;
 text-align: center
`

const SignUpContainer = styled.form`
 padding: 2rem 0rem;
 display: flex;
 justify-content: center;
 align-items: center;
 width: 100%;
 flex-direction: column;
 gap: 1rem;
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

const CreateAccount = styled.button`
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

const HaveAccount = styled.div`
  font-size: .8rem;
  display: flex;
  justify-content: center;
  gap: .5rem;
  padding: 2rem;
`

const SignIn = styled(Link)`
  color: white;
  text-decoration: underline;
  &:hover{
  text-decoration: none;
  }
`

const SignUp = () => {
  return (
  <>
  <Title>Create your Stripe account</Title>
  <SignUpContainer>
    <Input type="email" placeholder="Email"></Input>
    <Input type="text" placeholder="Full name"></Input>
    <Input type="password" placeholder="Password"></Input>
    <CreateAccount type="submit">Create account</CreateAccount>
  </SignUpContainer>

      <HaveAccount>
        Have an account? 
        <SignIn to="/signin">Sign in</SignIn>
      </HaveAccount>
  </>
  )
};

export default SignUp;
