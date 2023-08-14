import { lazy, Suspense } from "react"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { styled } from "styled-components";

const Navbar = lazy(() => import('./components/Navbar'));
const NewJobs = lazy(() => import('./components/NewJobs'));
const AppliedJobs = lazy(() => import('./components/AppliedJobs'));
const Footer= lazy(() => import('./components/Footer'));
const Job = lazy(() => import('./components/Job'));
const NotFound = lazy(() => import('./components/NotFound'));
const Login = lazy(() => import('./components/Register/Login/Login'))
const SignUp = lazy(() => import('./components/Register/Signup/Signup'))
const Home = lazy(() => import('./components/Home'))


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
          <Route index path="/" element={<Suspense fallback={<Loading />}><Home /></Suspense>}/>
          <Route path="/login" element={<Suspense fallback={<Loading />}><Login /></Suspense>}/>
          <Route path="/Signup" element={<Suspense fallback={<Loading />}><SignUp /></Suspense>}/>
          <Route path="/newjobs" element={<Suspense fallback={<Loading />}><NewJobs /></Suspense>}/>
          <Route path="/Appliedjobs" element={<Suspense fallback={<Loading />}><AppliedJobs /></Suspense>}/>
          <Route path="/job/:id" element={<Suspense fallback={<Loading />}><Job /></Suspense>}/>
          <Route path="*" element={<Suspense fallback={<Loading />}><Navigate to="/404" /></Suspense>}/>
          <Route path="/404" element={<Suspense fallback={<Loading />}><NotFound /></Suspense>}/>
        </Routes>

        <Suspense fallback={<Loading />}>
          <Footer />
        </Suspense>
      </BrowserRouter>
    </>
  )
}
