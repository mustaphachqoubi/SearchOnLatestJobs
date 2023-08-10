import WithStyle from "./WithStyle"
import * as d3 from 'd3';
import { useEffect, useRef } from "react";

const AppliedJobs: React.FC = () => {

  const chartRef = useRef(null);

  useEffect(() => {
    const width = 928;
    const marginTop = 10;
    const marginRight = 10;
    const marginBottom = 10;
    const marginLeft = 40;

    // Load your JSON data using fetch
    fetch('../../public/flare-2.json')
      .then(response => response.json())
      .then(data => {
        const root = d3.hierarchy(data);
        const dx = 10;
        const dy = (width - marginRight - marginLeft) / (1 + root.height);

        const tree = d3.tree().nodeSize([dx, dy]);

        const svg = d3.select(chartRef.current)
          .attr('width', width)
          .attr('height', dx)
          .attr('viewBox', [-marginLeft, -marginTop, width, dx])
          .attr('style', 'max-width: 100%; height: auto; font: 10px sans-serif; user-select: none;');

        function update(event, source) {
          // Implement your update function here...
        }

        root.x0 = dy / 2;
        root.y0 = 0;
        root.descendants().forEach((d, i) => {
          d.id = i;
          d._children = d.children;
          if (d.depth && d.data.name.length !== 7) d.children = null;
        });

        update(null, root);
      })
      .catch(error => {
        console.error('Error loading data:', error);
      });
  }, []);

  return <svg ref={chartRef} />;

}


const AppliedJobsWithStyle = WithStyle(AppliedJobs)

export default AppliedJobsWithStyle
