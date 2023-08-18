import Sidebar from "../Sidebar";

const activeId = "INSIGHTS";

const Insights = () => {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar activeId={activeId} />
      <h1>Insights</h1>
    </div>
  );
};

export default Insights;
