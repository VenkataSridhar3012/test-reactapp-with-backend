import "./index.css";

import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
// import { ThemeProvider, createTheme } from "@mui/material/styles";
// import Stack from "@mui/material/Stack";
// import Pagination from "@mui/material/Pagination";
import Sidebar from "../../Sidebar";
import { useNavigate } from "react-router-dom";

// const theme = createTheme({
//   palette: {
//     primary: {
//       main: "#FFFF01",
//     },
//   },
// });

type pricingContainerProps = {
  title: string;
  price: string;
};

const PricingContainer = (props: pricingContainerProps) => {
  const { title, price } = props;
  return (
    <div className="individual-price">
      <p className="pricing-title">{title}</p>
      <h1 className="price">{price}</h1>
    </div>
  );
};

const priceData = [
  {
    id: 1,
    mbu: "Toronto",
    shakeCampaigns: "$200",
    spinwheelCampaigns: "$200",
  },
  {
    id: 2,
    mbu: "Toronto",
    shakeCampaigns: "$200",
    spinwheelCampaigns: "$200",
  },
  {
    id: 3,

    mbu: "Toronto",
    shakeCampaigns: "$200",
    spinwheelCampaigns: "$200",
  },
  {
    id: 4,

    mbu: "Toronto",
    shakeCampaigns: "$200",
    spinwheelCampaigns: "$200",
  },
  {
    id: 5,

    mbu: "Toronto",
    shakeCampaigns: "$200",
    spinwheelCampaigns: "$200",
  },
  {
    id: 6,

    mbu: "Toronto",
    shakeCampaigns: "$200",
    spinwheelCampaigns: "$200",
  },
  {
    id: 1,
    mbu: "Toronto",
    shakeCampaigns: "$200",
    spinwheelCampaigns: "$200",
  },
  {
    id: 2,
    mbu: "Toronto",
    shakeCampaigns: "$200",
    spinwheelCampaigns: "$200",
  },
  {
    id: 3,

    mbu: "Toronto",
    shakeCampaigns: "$200",
    spinwheelCampaigns: "$200",
  },
  {
    id: 4,

    mbu: "Toronto",
    shakeCampaigns: "$200",
    spinwheelCampaigns: "$200",
  },
  {
    id: 5,

    mbu: "Toronto",
    shakeCampaigns: "$200",
    spinwheelCampaigns: "$200",
  },
  {
    id: 6,

    mbu: "Toronto",
    shakeCampaigns: "$200",
    spinwheelCampaigns: "$200",
  },
  {
    id: 1,
    mbu: "Toronto",
    shakeCampaigns: "$200",
    spinwheelCampaigns: "$200",
  },
  {
    id: 2,
    mbu: "Toronto",
    shakeCampaigns: "$200",
    spinwheelCampaigns: "$200",
  },
  {
    id: 3,

    mbu: "Toronto",
    shakeCampaigns: "$200",
    spinwheelCampaigns: "$200",
  },
  {
    id: 4,

    mbu: "Toronto",
    shakeCampaigns: "$200",
    spinwheelCampaigns: "$200",
  },
  {
    id: 5,

    mbu: "Toronto",
    shakeCampaigns: "$200",
    spinwheelCampaigns: "$200",
  },
  {
    id: 6,

    mbu: "Toronto",
    shakeCampaigns: "$200",
    spinwheelCampaigns: "$200",
  },
];

const PricingDetail = () => {
  const navigate = useNavigate();

  return (
    <div className="pricing-detail-with-sidebar">
      <Sidebar activeId="PRICING" />
      <div className="pricing-detail-container">
        <div className="pricing-detail-heading-container">
          <div className="arrow-heading-in-pricedatail">
            <KeyboardBackspaceIcon onClick={() => navigate("/pricing")} />
            <h1 className="pricing-date">Pricing/20-02-2022</h1>
          </div>
        </div>
        <div className="individual-price-container">
          <PricingContainer title="Shake offer price" price="$200" />
          <PricingContainer title="Spinwheel" price="$149" />
          <PricingContainer title="Status" price="Running" />
          <PricingContainer title="No.of Days" price="08" />
        </div>

        <div className="pricing-table">
          <div className="business-table-container pricing-fixTableHead ">
            <table>
              <thead>
                <tr className="table-heading-bg-color">
                  <th className="need-margin">MBU</th>
                  <th className="need-margin">Shake Campaigns</th>
                  <th className="need-margin">Spinwheel Campaigns</th>
                </tr>
              </thead>
              <tbody>
                {priceData.map((eachitem) => {
                  return (
                    <tr className="table-body-border" key={eachitem.id}>
                      <td className="mbu-value new-height">{eachitem.mbu}</td>
                      <td className="new-height">{eachitem.shakeCampaigns}</td>
                      <td className="new-height">
                        {eachitem.spinwheelCampaigns}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            {/* <div className="pagination-container">
            <ThemeProvider theme={theme}>
              <Stack spacing={2}>
                <Pagination count={10} shape="rounded" color="primary" />
              </Stack>
            </ThemeProvider>
          </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingDetail;
