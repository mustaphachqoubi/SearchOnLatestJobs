import WithStyle from "./WithStyle";
import { styled } from "styled-components";
import { Link } from "react-router-dom";
import { jobs } from "../../public/jobs";

const Jobs = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
`;

const Job = styled(Link)`
  color: white;
  border: 2px solid white;
  border-radius: 0.3rem;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  text-decoration: none;
  padding: 1rem;
  gap: 1rem;
  background: #242424;
  transition: all 0.4s ease;
  cursor: pointer;
  &:hover {
    background: white;
    color: #242424;
  }
  @media (max-width: 400px) {
    width: 100%;
  }
`;

const JobTitle = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  font-weight: bold;
`;

const JobCompany = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: underline;
  font-size: 0.8rem;
  font-weight: bold;
`;

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
  flex-direction: column;
`;

const JobLocation = styled.div`
  border: 2px solid white;
  padding: 0.5rem;
  border-radius: 0.3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.7rem;
  font-weight: bold;
  text-align: center;
`;

const JobTime = styled.div`
  border: 2px solid white;
  padding: 0.5rem;
  border-radius: 0.3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.7rem;
  font-weight: bold;
`;

const NewJobs: React.FC = () => {
  return (
    <Jobs>
      {jobs.map((job) => (
        <Job key={job.id} to={`/job/${job.id}`}>
          <JobTitle>{job.title}</JobTitle>
          <JobCompany>{job.company}</JobCompany>
          <Container>
            <JobLocation>{job.location}</JobLocation>
            <JobTime>{job.posted}</JobTime>
          </Container>
        </Job>
      ))}
    </Jobs>
  );
};

const NewJobsWithStyle = WithStyle(NewJobs);

export default NewJobsWithStyle;
