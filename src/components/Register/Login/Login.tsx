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

const OrContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20%;
  gap: 1rem;
`

const Hr = styled.hr`
  width: 100%;
  background-color: white;
  border: none;
  height: 2px;
`

const ForgotPass = styled(Link)`
  text-decoration: none;
  font-size: .8rem;
  color: white;
  display: flex;
  justify-content: end;
  &:hover{
  text-decoration: underline;
  }
`

const Login = () => {
  return (
  <LoginContainer>
    <Input type="email" placeholder="Email"></Input>
    <Input type="password" placeholder="Password"></Input>
    <ForgotPass to="/forgotpassword">Forgot your Password ?</ForgotPass>
    <ButtonInput type="submit">Sign In</ButtonInput>

   <OrContainer>
   </OrContainer> 

  </LoginContainer>
  );
};

export default Login;
