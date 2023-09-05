import WithStyle from "./WithStyle";
import { companies } from "../../public/companies";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { styled } from "styled-components";

const Company: React.FC = () => {
  const location = useLocation();

  const company = companies.filter(
    (company) => `/company/${company.company}` === location.pathname
  );

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

  const CompanyText = styled.div`
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

  return (
    <CompanyStyled>
      {company.length > 0
        ? company.map((com: any) =>
            Object.keys(com).map(
              (c) => c !== "id" && (
              <CompanyContainer key={com.id}>
                <CompanyTag>{c}</CompanyTag>
                <CompanyText>{com[c]}</CompanyText>
              </CompanyContainer>
              ) 
            )
          )
        : "Loading"}
    </CompanyStyled>
  );
};

const JobWithStyle = WithStyle(Company);

export default JobWithStyle;
