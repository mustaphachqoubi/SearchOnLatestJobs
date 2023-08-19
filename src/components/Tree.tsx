import * as d3 from 'd3'
import { useRef, useEffect } from 'react'
import { styled } from 'styled-components'

const Tree = () => {

  useEffect(() => {
    const svg = d3.select(treeRef.current)
    .append('svg')
    .attr('width', '100vw')

    svg.append('rect')
    .attr('fill', 'red')
    .attr('width', '100px')
    .attr('height', '100px')
  }, [])


  const treeRef = useRef(null)
  
  const TreeDiv = styled.div`
  width: 100%;
`

  const Container = styled.div`
  width: 100%;
`

  return (
    <Container>
      <TreeDiv ref={treeRef}></TreeDiv>
    </Container>
  )
}

export default Tree
