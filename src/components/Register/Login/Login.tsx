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
  &::placeholder{
  color: white;
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

const Login = () => {
  return (
  <LoginContainer>
    <Input type="email" placeholder="Email"></Input>
    <Input type="password" placeholder="Password"></Input>
    <ButtonInput type="submit">Log In</ButtonInput>
  </LoginContainer>
  );
};

export default Login;
