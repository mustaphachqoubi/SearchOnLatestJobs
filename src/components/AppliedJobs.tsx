import { styled } from "styled-components"
import WithStyle from "./WithStyle"
import { useEffect, useState } from "react"
import Tree from './Tree'
import { setSelectedCompanyName } from "../redux/selectedCompanyName"
import { useDispatch } from "react-redux"

const AppliedJobsContainer = styled.div`
overflow: hidden;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`

  const SelectCompany = styled.div`
  display: flex;
  align-items: center;
  gap: .5rem;
  overflow: hidden;
  overflow-x: auto;
  width: 100%;
  &::-webkit-scrollbar {
  display: none;
}
`

  const Company = styled.div`
  border: 2px solid white;
  border-radius: .3rem;
  padding: .3rem 1rem;
  font-size: .8rem;
  font-weight: bold;
  cursor: pointer;
`

  const TreeContainer = styled.div`
`

const AppliedJobs: React.FC = () => {
  const dispatch = useDispatch()

  const [selectedCompany, setSelectedCompany] = useState(1)

  const Companies = [{id: 1, name: "All"}, {id: 2, name: "Youtube"}, {id: 3, name: "Facebook"}]

  const handleSelectedCompany = (id: number) => {
    setSelectedCompany(id)  
  }

  useEffect(() => {
    Companies.map(c => c.id === selectedCompany && dispatch(setSelectedCompanyName(c.name)))
  })


  return (
    <AppliedJobsContainer>
      <SelectCompany>
        {Companies.map(company => <Company className={selectedCompany === company.id ? "selectedCompany" : "nonSelectedCompany"} 
          key={company.id} onClick={() => handleSelectedCompany(company.id)}>{company.name}</Company>)}
      </SelectCompany>

      <TreeContainer>
        <Tree />
      </TreeContainer>
    </AppliedJobsContainer>
  )
}


const AppliedJobsWithStyle = WithStyle(AppliedJobs)

export default AppliedJobsWithStyle
