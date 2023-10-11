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
`

const Login = () => {
  return (
  <LoginContainer>
    <Input type="email" placeholder="Email"></Input>
    <Input type="password" placeholder="Password"></Input>
  </LoginContainer>
  );
};

export default Login;
