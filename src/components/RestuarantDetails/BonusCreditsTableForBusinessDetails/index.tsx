import "./index.css";
// import { createTheme } from "@mui/material/styles";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { format } from "date-fns";
import { baseUrl } from "../../../App";

// const theme = createTheme({
//   palette: {
//     primary: {
//       main: "#FFFF01",
//     },
//   },
// });

const BonusCreditsTable = () => {
  const jwtToken: any = localStorage.getItem("jwtToken");
  // console.log(jwtToken);
  const { id } = useParams();

  const [bonusTableData, setBonusTableData] = useState([]);

  const bonusCreditsTableUrl = `${baseUrl}business/api/bonus-credits/logs/${id}`;

  useEffect(() => {
    axios
      .get(bonusCreditsTableUrl, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "x-access-token": jwtToken,
        },
      })
      .then(function (response) {
        setBonusTableData(response.data.data.logs.list);
      });
  }, [bonusCreditsTableUrl, jwtToken]);

  // console.log(bonusTableData);

  return (
    <>
      <div className="business-table-container bonus-in-business-fixTableHead ">
        {/* <div className="bonous-credits-container"> */}
        <table>
          <thead>
            <tr className="table-heading-bg-color ">
              <th className="padding-to-head">Credits</th>
              <th className="padding-to-head">Start Date</th>
              <th className="padding-to-head">End Date</th>
              <th className="padding-to-head table-head-margin">
                % of Businesses
                <br /> Utilized
              </th>
              <th className="padding-to-head table-head-margin">
                % & of amount
                <br /> Utilized
              </th>
            </tr>
          </thead>
          <tbody>
            {bonusTableData?.map((eachItem: any) => {
              const newstartDate = format(
                new Date(eachItem.startDate),
                "MMM dd, yyyy"
              );
              const options: any = {
                year: "numeric",
                month: "short",
                day: "numeric",
              };
              const endDate = new Date(
                eachItem.validityDate
              ).toLocaleDateString("en-US", options);

              const amountPercent = parseFloat(
                eachItem.utilizedPercentage.toFixed(4)
              );

              // const endDate = new Date(eachItem.validityDate).toISOString();
              // // eslint-disable-next-line @typescript-eslint/no-redeclare
              // const endDate: any = format(
              //   new Date(eachItem.validityDate),
              //   "MMM dd, yyyy"
              // );

              // console.log("eb", endDate);
              // console.log(
              //   "date",
              //   format(new Date(eachItem.validityDate), "MMM dd, yyyy")
              // );

              return (
                <tr className="table-body-border" key={eachItem._id}>
                  {/* <td className="padding-to-row"></td> */}
                  <td className="padding-to-row">{eachItem.credits}</td>
                  <td className="padding-to-row">{newstartDate}</td>
                  <td className="padding-to-row">{endDate}</td>
                  <td className="padding-to-row">{eachItem.utilizedCredits}</td>
                  <td className="padding-to-row">{amountPercent}</td>
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

      {/* </div> */}
    </>
  );
};
export default BonusCreditsTable;
