import { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import Loading from "./components/Loading";

const App = () => {
  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsLoading(false);
  //   }, 2000);
  // }, []);

  return (
    <>
      <NavBar />
    </>
  );
};

export default App;
