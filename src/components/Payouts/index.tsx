import Sidebar from "../Sidebar";

const activeId = "PAYOUTS";

const Payouts = () => {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar activeId={activeId} />
      <h1>Payouts</h1>
    </div>
  );
};

export default Payouts;
