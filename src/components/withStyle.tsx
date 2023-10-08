import { styled } from "styled-components";

const ComponentStyled = styled.div`
  width: 100%;
  height: 100%;
  padding: 1rem 0rem 1rem 0rem;
`;

export const WithStyle = (Component: any) => {
  return (props: any) => {
    return (
      <ComponentStyled>
        <Component {...props} />
      </ComponentStyled>
    );
  };
};

