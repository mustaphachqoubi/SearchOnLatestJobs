import { Link, useLocation } from "react-router-dom";
import { jobs } from "../../public/jobs";
import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import { setCheckJobProcessFor } from "../redux/checkJobProcessFor";
import { useDispatch } from "react-redux";

const JobStyled = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  font-size: 0.8rem;
  font-weight: bold;
  text-align: center;
  padding: 1rem 0rem 1rem 0rem;
`;

const JobTag = styled.div`
  color: #8ce4a6;
  background-color: #28322d;
  padding: 0.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10rem;
  border-radius: 0.3rem;
`;

const JobContainer = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
`;

const JobText = styled.div`
  font-size: 0.8rem;
  font-weight: normal;
  text-align: start;
  width: 100%;
  display: flex;
  justify-content: start;
  @media (max-width: 400px) {
    text-align: center;
    justify-content: center;
  }
`;

const Hr = styled.hr`
  width: 50%;
  background-color: white;
`;

const JobDescription = styled.p`
  font-size: 0.8rem;
  font-weight: bold;
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  word-break: break-all;
  justify-content: center;
  align-items: center;
  line-height: 1.5rem;
`;

const CheckContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  @media (max-width: 400px) {
    flex-direction: column;
  }
`;

const CheckJobIn = styled(Link)`
  border: 2px solid white;
  padding: 0.5rem;
  border-radius: 1rem;
  width: 10rem;
  cursor: pointer;
  &:hover {
    background-color: white;
    color: #242424;
  }
  transition: all 0.4s ease;
  color: white;
  text-decoration: none;
`;

const ApplyToJob = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const ApplyAndTrackTheProcess = styled(Link)`
  border: 2px solid white;
  padding: 0.5rem;
  border-radius: 1rem;
  width: 10rem;
  cursor: pointer;
  &:hover {
    background-color: white;
    color: #242424;
  }
  transition: all 0.4s ease;
  color: white;
  text-decoration: none;
`;

const ApplyOnWebsite = styled(Link)`
  border: 2px solid white;
  padding: 0.5rem;
  border-radius: 1rem;
  width: 10rem;
  cursor: pointer;
  &:hover {
    background-color: white;
    color: #242424;
  }
  transition: all 0.4s ease;
  color: white;
  text-decoration: none;
`;

const Job: React.FC = () => {
  const location = useLocation();
  const [jobId, setJobId] = useState<number>(-1);
  const [loading, setLoading] = useState<string>("");
  const [isApplied, setIsApplied] = useState<boolean>(false);
  const [applyLink, setApplyLink] = useState<string>("");

  const dispatch = useDispatch();

  useEffect(() => {
    if (jobs.length > 0) {
      const foundJob = jobs.find(
        (job) => `/job/${job.id}` === location.pathname
      );

      if (foundJob) {
        setJobId(foundJob.id);
        setIsApplied(foundJob.isApplied);
        setApplyLink(foundJob.apply_link);
      }
    } else {
      setLoading("Loading...");
    }
  }, [jobs, location.pathname]);

  const handleJobProcess = () => {
    jobs?.map(
      (job) => job.id === jobId && dispatch(setCheckJobProcessFor(job.company))
    );
  };

  return (
    <JobStyled>
      {jobs.length > 0
        ? jobs.map(
            (job: any) =>
              job.id === jobId &&
              Object.keys(job).map(
                (j, index) =>
                  j !== "id" &&
                  j !== "link" &&
                  j !== "isApplied" &&
                  j !== "apply_link" &&
                  j !== "description" && (
                    <JobContainer key={index}>
                      <JobTag>
                        {j === "company" ? "" : "Job"} {j}
                      </JobTag>
                      <JobText>{job[j]}</JobText>
                    </JobContainer>
                  )
              )
          )
        : loading}

      <Hr />
      <JobDescription>
        {jobs.map((job) => job.id === jobId && job.description)}
      </JobDescription>
      <Hr />

      {isApplied === false ? (
        <ApplyToJob>
          <ApplyAndTrackTheProcess target="_blank" to={applyLink}>
            Apply & track
          </ApplyAndTrackTheProcess>

          <ApplyOnWebsite to={applyLink}>Apply on Indeed</ApplyOnWebsite>
        </ApplyToJob>
      ) : (
        <CheckContainer>
          <CheckJobIn
            onClick={handleJobProcess}
            to={`/appliedjobs/${
              jobs.find((job) => job.id === jobId)?.company || ""
            }`}
          >
            Check job process
          </CheckJobIn>
          <CheckJobIn to={applyLink} target="_blank">
            Check job on Linkedin
          </CheckJobIn>
        </CheckContainer>
      )}
    </JobStyled>
  );
};

const JobWithStyle = Job;

export default JobWithStyle;
