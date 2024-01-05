import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { styled } from "styled-components";

const Navbar = lazy(() => import("./components/Navbar"));
const NewJobs = lazy(() => import("./components/NewJobs"));
const AppliedJobs = lazy(() => import("./components/AppliedJobs"));
const Footer = lazy(() => import("./components/Footer"));
const Job = lazy(() => import("./components/Job"));
const NotFound = lazy(() => import("./components/NotFound"));
const Signin = lazy(() => import("./components/Register/Signin/SignIn"));
const SignUp = lazy(() => import("./components/Register/Signup/Signup"));
const Home = lazy(() => import("./components/Home"));
const Company = lazy(() => import("./components/Company"));
const ForgotPass = lazy(() => import("./components/Register/Signin/ForgotPass"));
const Sso= lazy(() => import("./components/Register/Signin/Sso"));

const LoadingStyled = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  padding: 1rem;
  gap: 1rem;
`;

const Gif = styled.img`
  width: 50px;
`;

const AppContainer = styled.div`
  max-width: 1440px;
  width: 100%;
`

const TheApp = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`

const Loading = () => {
  return (
    <LoadingStyled>
      Loading{" "}
      <Gif src="https://media.tenor.com/RVvnVPK-6dcAAAAM/reload-cat.gif" />
    </LoadingStyled>
  );
};

export const App: React.FC = () => {
  return (
    <TheApp>

    <AppContainer>
      <BrowserRouter>
        <Suspense fallback={<Loading />}>
          <Navbar />
        </Suspense>

        <Routes>
          <Route
            index
            path="/"
            element={
              <Suspense fallback={<Loading />}>
                <Home />
              </Suspense>
            }
          />
          <Route
            path="/signin"
            element={
              <Suspense fallback={<Loading />}>
                <Signin/>
              </Suspense>
            }
          />
          <Route
            path="/forgotPassword"
            element={
              <Suspense fallback={<Loading/>}>
                <ForgotPass />
              </Suspense>
            }
          />
          <Route
            path="/sso"
            element={
              <Suspense fallback={<Loading/>}>
                <Sso/>
              </Suspense>
            }
          />
          <Route
            path="/signup"
            element={
              <Suspense fallback={<Loading />}>
                <SignUp />
              </Suspense>
            }
          />
          <Route
            path="/newjobs"
            element={
              <Suspense fallback={<Loading />}>
                <NewJobs />
              </Suspense>
            }
          />
          <Route
            path="/appliedjobs/:companyname"
            element={
              <Suspense fallback={<Loading />}>
                <AppliedJobs />
              </Suspense>
            }
          />
          <Route
            path="/job/:id"
            element={
              <Suspense fallback={<Loading />}>
                <Job />
              </Suspense>
            }
          />
          <Route
            path="/company/:name"
            element={
              <Suspense fallback={<Loading />}>
                <Company />
              </Suspense>
            }
          />
          <Route
            path="*"
            element={
              <Suspense fallback={<Loading />}>
                <Navigate to="/404" />
              </Suspense>
            }
          />
          <Route
            path="/404"
            element={
              <Suspense fallback={<Loading />}>
                <NotFound />
              </Suspense>
            }
          />
        </Routes>

        <Suspense fallback={<Loading />}>
          <Footer />
        </Suspense>
      </BrowserRouter>
    </AppContainer>
    </TheApp>
  );
};
