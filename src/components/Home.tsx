import { lazy, useState } from "react";

const Dashboard = lazy(() => import("./Dashboard"))
const LandingPage = lazy(() => import("./LandingPage"))

const Home = () => {
  const [isSignedIn] = useState(false)

  return (
    <>
    {
      isSignedIn ? (
      <Dashboard />
      ) : (
      <LandingPage />
      )
    }
    </>
  )
};

export default Home;
