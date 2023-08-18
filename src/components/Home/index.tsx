import { Navigate } from "react-router-dom";
import Sidebar from "../Sidebar";
// import { Redirect } from "react-router-dom";

const activeId = "HOME";

const Home = () => {
  const jwtToken: any = localStorage.getItem("jwtToken");
  console.log("jwt", jwtToken);
  if (jwtToken === null) {
    return <Navigate to="/login" replace={true} />;
  }

  return (
    <div style={{ display: "flex" }}>
      <Sidebar activeId={activeId} />
      <div></div>
      <h1>Home</h1>
    </div>
  );
};

export default Home;
