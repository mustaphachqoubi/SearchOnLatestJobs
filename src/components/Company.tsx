import { companies } from "../../public/companies";
import { Link, useLocation } from "react-router-dom";
import { styled } from "styled-components";

const Company: React.FC = () => {
  const location = useLocation();

  const company = companies.filter(
    (company) => `/company/${company.company}` === location.pathname
  );

  const getBackToPreviousPage = () => {
    window.history.back()
  }

  const CompanyStyled = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    font-size: 0.8rem;
    font-weight: bold;
    text-align: center;
    padding: 1rem 0rem 1rem 0rem;
  `;

  const CompanyContainer = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 0.5rem;
    width: 100%;
  `;

  const CompanyTag = styled.div`
    color: #8ce4a6;
    background-color: #28322d;
    padding: 0.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 10rem;
    border-radius: 0.3rem;
  `;

  const JobsContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    overflow: hidden;
    overflow-x: auto;
    width: 100%;
    flex: 1;

    &::-webkit-scrollbar {
      display: none;
    }
  `;

  const JobTitle = styled(Link)`
    text-decoration: none;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #242424;
    border: 2px solid white;
    border-radius: 0.3rem;
    padding: 0.3rem;
    width: 5rem;
    font-weight: bold;
    cursor: pointer;
    &:hover {
      background-color: white;
      color: #242424;
    }
  `;

  const NoDataContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
`

  const Back = styled.button`
    border: 2px solid white;
    border-radius: .3rem;
    padding: .5rem 1.5rem;
    font-weight: bold;
    background-color: transparent;
    cursor: pointer;
    color: white;
    text-decoration: none;
    &:hover{
      background-color: white;
      color: #242424;
    }
`

  return (
    <CompanyStyled>
      {company.length > 0
        ? company.map((com: any) =>
            Object.keys(com).map(
              (c) =>
                c !== "id" && (
                  <CompanyContainer key={com.id}>
                    <CompanyTag>{c}</CompanyTag>
                    {c === "jobs" ? (
                      <JobsContainer>
                        {com[c].map((job: any) => (
                          <JobTitle to={`/job/${job.id}`}>{job.title}</JobTitle>
                        ))}
                      </JobsContainer>
                    ) : (
                      com[c]
                    )}
                  </CompanyContainer>
                )
            )
          )
        : <NoDataContainer>
          No data is available for this company 
          <Back onClick={getBackToPreviousPage}>Back</Back>
        </NoDataContainer>}
    </CompanyStyled>
  );
};

const JobWithStyle = Company;

export default JobWithStyle;
