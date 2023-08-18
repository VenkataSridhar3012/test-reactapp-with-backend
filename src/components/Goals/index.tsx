import Sidebar from "../Sidebar";

const activeId = "GOALS";

const Goals = () => {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar activeId={activeId} />
      <h1>Goals</h1>
    </div>
  );
};

export default Goals;
