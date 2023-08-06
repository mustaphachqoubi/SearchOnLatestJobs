import { lazy, Suspense } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { styled } from "styled-components";

const Navbar = lazy(() => import('./components/Navbar'));
const NewJobs = lazy(() => import('./components/NewJobs'));
const AppliedJobs = lazy(() => import('./components/AppliedJobs'));
const Footer= lazy(() => import('./components/Footer'));
const Job = lazy(() => import('./components/Job'));


  const LoadingStyled = styled.h1`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  padding: 1rem
`

const Loading = () => {
  return <LoadingStyled>Loading ...</LoadingStyled>
}

export const App: React.FC = () => {

  return (
    <>
      <BrowserRouter>

       <Suspense fallback={<Loading />}>
          <Navbar />
        </Suspense> 

        <Routes>
          <Route index path="/newjobs" element={<Suspense fallback={<Loading />}><NewJobs /></Suspense>}/>
          <Route path="/Appliedjobs" element={<Suspense fallback={<Loading />}><AppliedJobs /></Suspense>}/>
          <Route path="/job/:id" element={<Suspense fallback={<Loading />}><Job /></Suspense>}/>
        </Routes>

        <Suspense fallback={<Loading />}>
          <Footer />
        </Suspense>
      </BrowserRouter>
    </>
  )
}
