import WithStyle from "./WithStyle"
import { Link, useLocation } from "react-router-dom"
import { jobs } from "../../public/jobs"
import React, { useEffect, useState } from "react"
import { styled } from "styled-components"

const Job: React.FC = () => {

  const location = useLocation()
  const [jobId, setJobId] = useState<number>(-1)
  const [loading , setLoading] = useState<string>("")
  const [jobApplied] = useState(false)

  useEffect(() => {jobs.length > 0 ? jobs.map(job => {`/job/${job.id}` === location.pathname && setJobId(job.id)}) : setLoading("Loading...") }, [])

  const JobStyled = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  font-size: .8rem;
  font-weight: bold;
  text-align: center;
  padding: 1rem 0rem 1rem 0rem;
`

  const JobTag = styled.div`
  color: #8ce4a6;
  background-color: #28322d;
  padding: .2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10rem;
  border-radius: .3rem
`

  const JobContainer = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: .5rem;
  width: 100%;
`

  const JobText = styled.div`
  font-size: .8rem;
  font-weight: normal;
  text-align: start;
  width: 100%;
  display: flex;
  justify-content: start;
  @media (max-width: 400px){
    text-align: center;
    justify-content: center;
  }
`

  const Hr = styled.hr`
  width: 50%;
  background-color: white;
`

  const JobDescription = styled.p`
  font-size: .8rem;
  font-weight: bold;
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  word-break: break-all;
  justify-content: center;
  align-items: center;
  line-height: 1.5rem 
`

  const CheckContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  @media (max-width: 400px){
    flex-direction: column
  }
`

  const CheckJobIn = styled(Link)`
  border: 2px solid white;
  padding: .5rem;
  border-radius: 1rem;
  width: 10rem;
  cursor: pointer;
  &:hover{
    background-color: white;
    color: #242424
  }
  transition: all .4s ease;
  color: white;
  text-decoration: none;
`

  const ApplyToJob = styled.div`
  display: flex;
  flex-direction:column;
  align-items: center;
  gap: 1rem
`

  const ApplyAndTrackTheProcess = styled(Link)`
  border: 2px solid white;
  padding: .5rem;
  border-radius: 1rem;
  width: 10rem;
  cursor: pointer;
  &:hover{
    background-color: white;
    color: #242424
  }
  transition: all .4s ease;
  color: white;
  text-decoration: none;
`

  const ApplyOnWebsite = styled(Link)`
  border: 2px solid white;
  padding: .5rem;
  border-radius: 1rem;
  width: 10rem;
  cursor: pointer;
  &:hover{
    background-color: white;
    color: #242424
  }
  transition: all .4s ease;
  color: white;
  text-decoration: none;
`


  return (
   <JobStyled>
        {
          jobs.length > 0 ? jobs.map(job => job.id === jobId && Object.keys(job).map(j => j !== "id" && j !== "link" && j !== "description" && (
          <JobContainer key={job.id}>
            <JobTag>{j === "company" ? "" : "Job"} {j}</JobTag>
            <JobText>{job[j]}</JobText>
          </JobContainer>
            )
          )) : loading
        }

      <Hr />
      <JobDescription>
        {jobs?.map(job => job.id === jobId && job.description)}
      </JobDescription>
      <Hr />

     {
        jobApplied === false ? (
        <ApplyToJob>
        <ApplyAndTrackTheProcess to="/">
          Apply & track
        </ApplyAndTrackTheProcess>

        <ApplyOnWebsite to="/">
          Apply on Indeed
        </ApplyOnWebsite>
      </ApplyToJob>
        ) : (
        <CheckContainer>
        <CheckJobIn to="/appliedjobs">Check job process</CheckJobIn>
        <CheckJobIn to="https://google.com" target="_blank">Check job on Linkedin</CheckJobIn>
      </CheckContainer>
        )
      } 
    </JobStyled> 
  )
}

const JobWithStyle = WithStyle(Job)

export default JobWithStyle
