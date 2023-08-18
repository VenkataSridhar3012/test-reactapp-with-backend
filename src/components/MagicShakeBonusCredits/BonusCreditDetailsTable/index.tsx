// import { useNavigate } from "react-router-dom";

import axios from "axios";
import { format } from "date-fns";
import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { baseUrl } from "../../../App";

// const bonousTableData = [
//   {
//     id: 7,
//     credits: "$10",
//     businesses: "Barbeque Nation",
//     startDate: "June 15, 2022",
//     endDate: "July 15, 2022",
//     amountUtilized: "$12",
//     percentUtilized: "40",
//     mbu: "Hyderanad, Telangana",
//   },
// ];

const BonusCreditDetailedTable = () => {
  const jwtToken: any = localStorage.getItem("jwtToken");
  const [bonusDetailData, setBonusDetailData] = useState([]);
  const { title } = useParams();
  const bonusDetailUrl = `${baseUrl}business/api/bonus-credits/listwithstats?message=${title}`;
  const getBonusDetails = useCallback(async () => {
    const newResponse = await axios.get(bonusDetailUrl, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "x-access-token": jwtToken,
      },
    });
    setBonusDetailData(newResponse.data.data.bonusCreditStats);
  }, [bonusDetailUrl, jwtToken]);
  useEffect(() => {
    getBonusDetails();
  }, [getBonusDetails]);

  console.log("bbbbbbbb", bonusDetailData);

  return (
    // <div className="bonous-credits-container">
    <>
      <div className="bonus-table-container fixTableHead ">
        <table>
          <thead>
            <tr className="table-heading-bg-color">
              {/* <th className="padding-to-head">S.No</th> */}
              {/* <th className="padding-to-head">Title</th> */}
              <th className="padding-to-head">Credits</th>

              <th className="padding-to-head">Business</th>

              {/* <th className="padding-to-head">Businesses</th> */}
              <th className="padding-to-head">Start Date</th>
              <th className="padding-to-head">End Date</th>
              <th className="padding-to-head">Amount Utilized</th>
              <th className="padding-to-head">% Utilized</th>
              <th className="padding-to-head">MBU</th>

              {/* <th className="padding-to-head table-head-margin">
                % of Businesses <br />
                Utilized
              </th>
              <th className="padding-to-head table-head-margin">
                % & of amount
                <br /> Utilized
              </th> */}
            </tr>
          </thead>
          <tbody>
            {bonusDetailData?.map((eachItem: any) => {
              const bonusDetailStartDate = format(
                new Date(eachItem.startDate),
                "MMM dd, yyyy"
              );
              const bonusDetailEndDate = format(
                new Date(eachItem.validityDate),
                "MMM dd, yyyy"
              );
              return (
                <tr
                  className="table-body-border"
                  key={eachItem.id}
                  //   onClick={navigateToBonusCreditDetails}
                >
                  <td className="bonus-table">{eachItem.credits}</td>
                  <td className="bonus-table">
                    {eachItem.businessOwnerDoc.name}
                  </td>
                  <td className="bonus-table">{bonusDetailStartDate}</td>
                  <td className="bonus-table">{bonusDetailEndDate}</td>
                  <td className="bonus-table">{eachItem.amountUtilized}</td>
                  <td className="bonus-table">{eachItem.percentageUtilized}</td>
                  <td className="bonus-table">
                    {eachItem.businessOwnerDoc.city}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* <div className="pagination-container">
          <ThemeProvider theme={theme}>
            <Stack spacing={2}>
              <Pagination count={10} shape="rounded" color="primary" />
            </Stack>
          </ThemeProvider>
        </div> */}
      {/* </div> */}
    </>
  );
};
export default BonusCreditDetailedTable;
