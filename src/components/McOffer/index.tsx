import Sidebar from "../Sidebar";

const activeId = "MCOFFER";

const McOffer = () => {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar activeId={activeId} />
      <h1>Home</h1>
    </div>
  );
};

export default McOffer;
