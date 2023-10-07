import * as d3 from "d3";
import { useRef, useEffect } from "react";
import { styled } from "styled-components";
import { useSelector } from "react-redux";
import { Tooltip } from "react-tooltip";
import { useLocation } from "react-router-dom";
import { jobs } from "../../public/jobs";

const TreeDiv = styled.div`
  width: 100%;
`;

const Container = styled.div`
  width: 100%;
`;

const Tree = () => {
  const location = useLocation();

  const { selectedCompanyName } = useSelector(
    (state: any) => state.selectedCompanyName
  );

  useEffect(() => {
    const width = document.body.clientWidth;
    const fixedHeight = 600;
    const margin = { top: 0, right: 100, bottom: 0, left: 0 };
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = fixedHeight - margin.top - margin.bottom;

    d3.select(treeRef.current).selectAll("*").remove();

    const tree = d3.tree().size([innerHeight, innerWidth]);

    const svg = d3
      .select(treeRef.current)
      .append("svg")
      .attr("width", width)
      .attr("height", fixedHeight)
      .attr("fill", "none")
      .attr("stroke", "white")
      .append("g");

    const g = svg
      .append("g")
      .attr("transform", `translate(${margin.left}, ${margin.top})`);

    const handleZoom = (e: any) => {
      g.attr("transform", e.transform);
    };

    const zoomBehavior:any = d3.zoom().on("zoom", handleZoom)

    svg.call(zoomBehavior);

    d3.json("../../public/applied.json").then((data: any) => {
      function countStatuses(node: any) {
        const statusCounts: any = {
          rejected: 0,
          accepted: 0,
          ghosted: 0,
          interviewed: 0,
        };

        if (node.children) {
          node.children.forEach((child: any) => {
            const childStatusCounts = countStatuses(child);
            for (const status in childStatusCounts) {
              statusCounts[status] += childStatusCounts[status];
            }
          });
        }

        switch (node.name) {
          case "reject":
            statusCounts.rejected++;
            break;
          case "accept":
            statusCounts.accepted++;
            break;
          case "ghosted":
            statusCounts.ghosted++;
            break;
          case "interview":
            statusCounts.interviewed++;
            break;
        }

        return statusCounts;
      }

      const totalCounts = countStatuses(data);

      const comps = jobs.map((job) => job.company);

      const rootNode = data.children.find(
        (child: any) => `/appliedjobs/${child.name}` === location.pathname
      );
      const root = d3.hierarchy(
        location.pathname === `/appliedjobs/All` ? data : rootNode
      );
      const links = tree(root).links();
      const linkPathGenerator:any = d3
        .linkHorizontal()
        .x((d: any) => d.y)
        .y((d: any) => d.x);

      g.selectAll("path")
        .data(links)
        .enter()
        .append("path")
        .attr("d", linkPathGenerator);

      g.selectAll("foreignObject")
        .data(root.descendants())
        .enter()
        .append("foreignObject")
        .attr("x", (d: any) => d.y)
        .attr("y", (d: any) => d.x - 15)
        .attr("width", "6rem")
        .attr("height", "2rem")
        .each(function (d) {
          if (comps.includes(d.data.name)) {
            d3.select(this)
              .append("xhtml:a")
              .attr("href", `/company/${d.data.name}`)
              .style("text-decoration", "none")
              .style("color", "white")
              .style("display", "flex")
              .style("align-items", "center")
              .style("justify-content", "center")
              .style("background-color", "#242424")
              .style("border", "2px solid white")
              .style("border-radius", ".3rem")
              .style("padding", ".3rem")
              .style("font-weight", "bold")
              .style("cursor", "pointer")
              .text((d: any) => d.data.name)
              .on("mouseover", (e) => {
                if (comps.includes(e.target.innerHTML)) {
                  d3.select(e.target)
                    .style("background-color", "white")
                    .style("color", "#242424")
                    .style("border", "2px solid white");
                }
              })
              .on("mouseout", (e) => {
                if (comps.includes(e.target.innerHTML)) {
                  d3.select(e.target)
                    .style("background-color", "#242424")
                    .style("color", "white");
                }
              });
          } else {
            d3.select(this)
              .append("xhtml:div")
              .style("text-align", "center")
              .style("display", "flex")
              .style("align-items", "center")
              .style("justify-content", "center")
              .style("background-color", "#242424")
              .style("color", "white")
              .style("border", "2px solid white")
              .style("border-radius", ".3rem")
              .style("padding", ".3rem")
              .style("font-weight", "bold")
              .style("cursor", "pointer")
              .text((d: any) => d.data.name);
          }
        })

        .attr("data-tooltip-html", (d) => {
          if (d.data.name !== "applied to") {
            return d.data.name + "</br> at </br>" + d.data.date;
          } else {
            return `<div class="companiesNumberContainer"> ${d.data.children.length} companies </div> </br>
              <div class="companyStatusContainer"><div class="number">${totalCounts.rejected}</div> <div class="companyStatus">rejected</div></div> </br>
              <div class="companyStatusContainer"><div class="number">${totalCounts.accepted}</div> <div class="companyStatus">accepted</div></div> </br>
              <div class="companyStatusContainer"><div class="number">${totalCounts.ghosted}</div> <div class="companyStatus">ghosted</div></div> </br>
              <div class="companyStatusContainer"><div class="number">${totalCounts.interviewed}</div> <div class="companyStatus">interviewed</div></div>`;
          }
        })
        .attr("data-tooltip-id", "my-tooltip")
        .attr("data-tooltip-place", "top")
        .attr("data-tooltip-variant", "light");
    });
  }, [selectedCompanyName, location]);

  const treeRef = useRef(null);

  return (
    <Container>
      <Tooltip id="my-tooltip" />
      <TreeDiv ref={treeRef}></TreeDiv>
    </Container>
  );
};

export default Tree;
