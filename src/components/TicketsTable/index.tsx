import { useNavigate } from "react-router-dom";
import "./index.css";
import { useEffect } from "react";
import { format } from "date-fns";

const TicketsTable = (props: any) => {
  const { tableData, searchTickets } = props;
  const navigate = useNavigate();
  // const [tableData, setTableData] = useState<any>([]);
  // const jwtToken: any = localStorage.getItem("jwtToken");
  // const url = `https://go.magicshake.app/business/api/tickets/list?status=open&all=true`;
  // console.log(url);

  useEffect(() => {
    // axios
    //   .get(url, {
    //     headers: {
    //       "Content-Type": "application/json",
    //       Accept: "application/json",
    //       "x-access-token": jwtToken,
    //     },
    //   })
    //   .then(function (response) {
    //     setTableData(response.data.data.list);
    //   });
    searchTickets();
  }, [searchTickets]);
  console.log(tableData);

  const passingItems =
    (userId: string, userName: number, _id: any, id: any) => (event: any) => {
      navigate(
        `/Tickets/details/${userName}/${userId}/${_id}`,

        {
          state: {
            id,
          },
        }
      );
    };
  return (
    <>
      <div className="ticket-table-container">
        <table>
          <thead>
            <tr className="table-heading-bg-color">
              <th style={{ paddingLeft: "20px" }}>Ticket No</th>
              <th>Subject</th>
              <th>Business name</th>
              <th>MBU</th>
              <th>Handler</th>
              <th>Created on</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {tableData?.map((eachItem: any) => {
              return (
                <>
                  <tr
                    onClick={passingItems(
                      eachItem.ticketNumber,
                      eachItem.userId,
                      eachItem._id,
                      eachItem.id
                    )}
                    key={eachItem._id}
                    className="ticket-table-body-border"
                  >
                    <td style={{ paddingLeft: "20px" }}>
                      {eachItem.ticketNumber}
                    </td>
                    <td style={{ textTransform: "capitalize" }}>
                      {eachItem.subject}
                    </td>
                    <td>{eachItem.userName}</td>
                    <td>{eachItem.city}</td>
                    <td>{eachItem.assigneeName}</td>
                    <td>
                      {format(new Date(eachItem.createdAt), "MMM dd, yyyy")}
                    </td>
                    <td style={{ color: "red", textTransform: "capitalize" }}>
                      {eachItem.status}
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TicketsTable;
