import React from "react"
import { styled } from "styled-components"

const withStyle = (Component: any): React.FC => {

  const ComponentStyled = styled.div`
  width: 100%;
  height: 70vh;
`

  return (props) => {
    return <ComponentStyled>
      <Component {...props} />
    </ComponentStyled>
  }
}

export default withStyle
