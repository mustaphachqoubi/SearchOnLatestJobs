import React from "react"
import { styled } from "styled-components"

const WithStyle = (Component: any): React.FC => {

  const ComponentStyled = styled.div`
  width: 100%;
  height: 100%;
  padding: 1rem 0rem 1rem 0rem
`

  return (props) => {
    return <ComponentStyled>
      <Component {...props} />
    </ComponentStyled>
  }
}

export default WithStyle
