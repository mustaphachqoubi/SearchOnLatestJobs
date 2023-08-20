import * as d3 from 'd3'
import { useRef, useEffect, useState } from 'react'
import { styled } from 'styled-components'
import { useSelector } from 'react-redux'

  const TreeDiv = styled.div`
  width: 100%;
`

  const Container = styled.div`
  width: 100%;
`

const Tree = () => {

  /*
       svg.selectAll('text').data(root.descendants())
        .enter().append('text')
        .attr('stroke-width', '2px')
        .attr('x', d => d.y)
        .attr('y', d => d.x)
        .attr('dy', '0.32em')
        .attr('class', 'text')
        .text(d => d.data.name)
        */

  const { selectedCompanyName } = useSelector(state => state.selectedCompanyName)

  useEffect(() => {
    const width = document.body.clientWidth
    const height = document.body.clientHeight

    const fixedWidth = 800;
    const fixedHeight = 600

     d3.select(treeRef.current).selectAll('*').remove();

    const tree = d3.tree()
    .size([fixedHeight, width])

    const svg = d3.select(treeRef.current)
    .append('svg')
    .attr('width', width)
    .attr('height', fixedHeight)
    .attr('fill', 'none')
    .attr('stroke', 'white')

    d3.json('../../public/applied.json')
    .then(data => {
        const rootNode = data.children.find(child => child.name === selectedCompanyName);
        const root = d3.hierarchy(selectedCompanyName === "All" ? data : rootNode)
        const links = tree(root).links()
        const linkPathGenerator = d3.linkHorizontal()
        .x(d => d.y)
        .y(d => d.x)

        svg.selectAll('path').data(links)
        .enter().append('path')
        .attr('d', linkPathGenerator )

  svg.selectAll('foreignObject')
  .data(root.descendants())
  .enter().append('foreignObject')
  .attr('x', d => d.y)
  .attr('y', d => d.x - 15)
  .attr('width', '6rem')
  .attr('height', '100%')
  .append('xhtml:div')
  .style('text-align', 'center')
  .style('display', 'flex')
  .style('align-items', 'center')
  .style('justify-content', 'center')
  .style('background-color', '#242424')
  .style('color', 'white')
  .style('border', '2px solid white')
  .style('border-radius', '.3rem')
  .style('padding', '.3rem')
  .style('font-weight', 'bold')
  .text(d => d.data.name);

  })

  }, [selectedCompanyName])

  const treeRef = useRef(null)

  return (
    <Container>
      <TreeDiv ref={treeRef}></TreeDiv>
    </Container>
  )
}

export default Tree
