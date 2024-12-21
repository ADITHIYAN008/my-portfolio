import { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import Loading from "./components/Loading";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsLoading(false);
  //   }, 2000);
  // }, []);

  return (
    <div className=" relative ">{isLoading ? <Loading /> : <NavBar />}</div>
  );
};

export default App;
