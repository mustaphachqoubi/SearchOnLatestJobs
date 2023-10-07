import { styled } from "styled-components";
import { WithStyle } from "./WithStyle";
import { useEffect, useState } from "react";
import Tree from "./Tree";
import { setSelectedCompanyName } from "../redux/selectedCompanyName";
import { useDispatch } from "react-redux";
import { jobs } from "../../public/jobs";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const AppliedJobsContainer = styled.div`
  overflow: hidden;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;

const SelectCompany = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  overflow: hidden;
  overflow-x: auto;
  width: 100%;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Company = styled(Link)`
  border: 2px solid white;
  border-radius: 0.3rem;
  padding: 0.3rem 1rem;
  font-size: 0.8rem;
  font-weight: bold;
  cursor: pointer;
  text-decoration: none;
`;

const TreeContainer = styled.div``;

const AppliedJobs: React.FC = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  const [selectedCompany, setSelectedCompany] = useState(-1);

  const handleSelectedCompany = (id: number) => {
    setSelectedCompany(id);
    dispatch(setSelectedCompanyName("All"));
  };

  useEffect(() => {
    jobs.map(
      (job) =>
        job.id === selectedCompany &&
        dispatch(setSelectedCompanyName(job.company))
    );
  });

  return (
    <AppliedJobsContainer>
      <SelectCompany>
        <Company
          to={`/appliedjobs/All`}
          className={
            selectedCompany === -1 && location.pathname === `/appliedjobs/All`
              ? "selectedCompany"
              : "nonSelectedCompany"
          }
          onClick={() => handleSelectedCompany(-1)}
        >
          All
        </Company>

        {jobs.map((job) => (
          <Company
            to={`/appliedjobs/${job.company}`}
            className={
              selectedCompany === job.id ||
              location.pathname === `/appliedjobs/${job.company}`
                ? "selectedCompany"
                : "nonSelectedCompany"
            }
            key={job.id}
            onClick={() => handleSelectedCompany(job.id)}
          >
            {job.company}
          </Company>
        ))}
      </SelectCompany>

      <TreeContainer>
        <Tree />
      </TreeContainer>
    </AppliedJobsContainer>
  );
};

const AppliedJobsWithStyle = WithStyle(AppliedJobs);

export default AppliedJobsWithStyle;
