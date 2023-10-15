import { Link } from 'react-router-dom'
import { styled } from 'styled-components'

const LoginContainer = styled.form`
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

const ButtonInput = styled.button`
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

const ForgotPass = styled(Link)`
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

const InputContainer = styled.div`

`

const Sso = styled(Link)`
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

const Title = styled.h2`
 display: flex;
 justify-content: center;
 align-items: center
`

const NoAccount = styled.div`
  font-size: .8rem;
  display: flex;
  justify-content: center;
  gap: .5rem;
  padding: 2rem;
`

const SignUp = styled(Link)`
  color: white;
  text-decoration: underline;
  &:hover{
  text-decoration: none;
  }
`

const Login = () => {
  return (
  <>
  <Title>Sign in to your account</Title>
  <LoginContainer>
    <Input type="email" placeholder="Email"></Input>
    <InputContainer>
    <Input type="password" placeholder="Password"></Input>
    <ForgotPass to="/forgotpassword">Forgot your Password ?</ForgotPass>
    </InputContainer>
    <ButtonInput type="submit">Sign In</ButtonInput>

    <Sso to="/sso">Use single sign-on (SSO) instead</Sso>
  </LoginContainer>

      <NoAccount>
        Don't have an account? 
        <SignUp to="/signup">Sign up</SignUp>
      </NoAccount>
  </>
  );
};

export default Login;
