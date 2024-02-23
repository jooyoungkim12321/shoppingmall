import { useEffect } from "react";
import axios from "axios";

function LandingPage() {
  useEffect(() => {
    axios.get("/api/hello").then((response) => console.log(response));
  }, []);
  return <h2>Landing Page...</h2>;
}

export default LandingPage;
