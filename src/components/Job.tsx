import WithStyle from "./WithStyle"
import { useLocation } from "react-router-dom"
import { jobs } from "../../public/jobs"
import { useEffect, useState } from "react"
import { styled } from "styled-components"

const Job = () => {

  const location = useLocation()
  const [jobId, setJobId] = useState<number>(-1)

  
  
  useEffect(() => {jobs.map(job => {`/job/${job.id}` === location.pathname && setJobId(job.id)}) }, [])


  const JobStyled = styled.div`
  
`

  return (
   <JobStyled>test</JobStyled> 
  )
}

const JobWithStyle = WithStyle(Job)

export default JobWithStyle
