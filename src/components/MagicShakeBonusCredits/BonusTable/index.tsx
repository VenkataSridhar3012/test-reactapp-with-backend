import { format } from "date-fns";
import { useNavigate } from "react-router-dom";

// const bonousTableDatas = [
//   {
//     id: 7,
//     title: "Black friday",
//     credits: "$10",
//     NoofBiz: "45",
//     startDate: "June 15, 2022",
//     endDate: "July 15, 2022",
//     percentUtilized: "40",
//     percentUtilzedAmount: "40",
//   },
// ];

const BonusTable = (props: any) => {
  const { bonusTableData } = props;

  // console.log("new-value", bonusTableData);

  const navigate = useNavigate();
  const navigateToBonusCreditDetails = (title: string) => {
    navigate(`/bonuscredit-details/${title}`);
  };
  return (
    // <div className="bonous-credits-container">
    <>
      <div className="business-table-container fixTableHead ">
        <table>
          <thead>
            <tr className="table-heading-bg-color">
              {/* <th className="padding-to-head">S.No</th> */}
              <th className="padding-to-head">Title</th>
              <th className="padding-to-head">Credits</th>

              <th className="padding-to-head">No of Biz</th>

              {/* <th className="padding-to-head">Businesses</th> */}
              <th className="padding-to-head">Start Date</th>
              <th className="padding-to-head">End Date</th>
              <th className="padding-to-head table-head-margin">
                % of Businesses <br />
                Utilized
              </th>
              <th className="padding-to-head table-head-margin">
                % & of amount
                <br /> Utilized
              </th>
            </tr>
          </thead>
          <tbody>
            {bonusTableData?.map((eachItem: any) => {
              const bonusStartDate = format(
                new Date(eachItem.startDate),
                "MMM dd, yyyy"
              );
              const bonusEndDate = format(
                new Date(eachItem.endDate),
                "MMM dd, yyyy"
              );
              return (
                <tr
                  className="table-body-border"
                  key={eachItem._id}
                  onClick={() => navigateToBonusCreditDetails(eachItem._id)}
                >
                  {/* <td className="bonus-table">{eachItem.id}</td> */}
                  <td className="bonus-table" style={{ width: "15%" }}>
                    {eachItem._id}
                  </td>
                  <td className="bonus-table">{eachItem.creditsPerBusiness}</td>
                  <td className="bonus-table">{eachItem.noOfBusinesses}</td>
                  <td className="bonus-table">{bonusStartDate}</td>
                  <td className="bonus-table">{bonusEndDate}</td>
                  <td className="bonus-table">
                    {eachItem.perecentageOfBusinesses}
                  </td>
                  <td className="bonus-table">
                    {eachItem.percentageOfCredits}
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
export default BonusTable;
