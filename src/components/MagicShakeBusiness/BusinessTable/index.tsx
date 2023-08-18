import { useNavigate } from "react-router-dom";
import dropdownIcon from "../../../Assets/Icons/dropdownIcon.svg";
import "./index.css";
import Popup from "reactjs-popup";
import activeCampainIcon from "../../../Assets/Icons/activecampaignicon.svg";
import claimsIcon from "../../../Assets/Icons/claimsicon.svg";
import bookmarksIcon from "../../../Assets/Icons/bookmarkicon.svg";
import amountSpentIcon from "../../../Assets/Icons/amountSpentIcon.svg";
import campaignsIcon from "../../../Assets/Icons/campaignsIcon.svg";
import spinsIcon from "../../../Assets/Icons/spinicon.svg";
import winsIcon from "../../../Assets/Icons/winsicon.svg";
import { useState } from "react";
// import InfiniteScroll from "react-infinite-scroll-component";
// import InfiniteScroll from "react-infinite-scroll-component";
import { Tooltip } from "react-bootstrap";

const BusinessTable = (props: any) => {
  const { tableData, businessQrCode } = props;
  const navigate = useNavigate();

  // const [qrCode, setQrCode] = useState<string[]>([]);

  const [businessqrObject, setBusinessqrObject] = useState({});
  // const [hasMore, setHasMore] = useState(true);

  const passingIdAndNavigation =
    (id: string, name: string, shakeOffer: string, spinWheel: any) =>
    (event: any) => {
      navigate(`details/${id}/${name}`, {
        state: {
          shakeOffer,
          spinWheel,
        },
      });
    };
  // useEffect(() => {
  //   businessQrCode(businessqrObject);
  // }, [businessQrCode, businessqrObject]);

  businessQrCode(businessqrObject);

  const getQRCode = (
    e: React.ChangeEvent<HTMLInputElement>,
    eachItem: any,
    index: number
  ) => {
    const newThing = e.target.checked;
    if (newThing) {
      return setBusinessqrObject((prev: any) => ({
        ...prev,
        [eachItem.name]: eachItem.htmlQrCodeUrl,
      }));
    } else if (!newThing) {
      // delete prev[eachItem.name]
      return setBusinessqrObject((prev: any) => {
        const asArray = Object.entries(businessqrObject);
        const filtered = asArray.filter(
          ([key, value]) => key !== eachItem.name
        );
        return Object.fromEntries(filtered);
      });
    }
  };

  // const fetchingData = () => {
  //   setTimeout(() => {
  //     setNewData()
  //   }, 500);
  // };

  // console.log("businessqrObject", businessqrObject);
  // console.log('business qr length', businessqrObject.length);

  // console.log("sravan", businessqrObject);
  // const value = () => {
  //   tableData.map((item: any) => {
  //     setName((prev: any) => [...prev, name]);
  //   });
  // };
  // value();

  // if (totalTableData === tableData.length) {
  //   setHasMore(false);
  // }

  console.log("table", tableData);

  return (
    <>
      {/* <InfiniteScroll
        dataLength={tableData.length}
        next={() => setPage((prev: any) => prev + 1)}
        hasMore={!(totalTableData + 20 === tableData.length)}
        loader={null}
        endMessage={<p>You Viewd all Businesses</p>}
      > */}
      <div className=" business-table-container fixTableHead ">
        <table>
          <thead>
            <tr className="table-heading-bg-color">
              <th style={{ width: "5%" }}></th>
              <th style={{ width: "15%" }}>Business name</th>
              <th style={{ width: "8%" }}>Partner</th>
              <th style={{ width: "12%" }}>MBU</th>
              <th style={{ width: "12%" }}>Category</th>
              <th style={{ width: "10%" }}>Campaigns</th>
              <th style={{ width: "8%" }}>Claims</th>
              <th style={{ width: "10%" }}>Bookmarks</th>
              <th
                style={{
                  width: "8%",
                  textAlign: "left",
                }}
              >
                Spend
              </th>
              <th style={{ width: "8%" }}>View</th>
            </tr>
          </thead>

          <tbody>
            {/* <InfiniteScroll
              dataLength={tableData.length}
              next={() => setPage((prev: any) => prev + 1)}
              hasMore={!(totalTableData + 20 === tableData.length)}
              loader={
                <p
                  style={{
                    fontSize: "15px",
                    fontWeight: "bold",
                    fontFamily: "avenir",
                  }}
                >
                  Loading....
                </p>
              }
              endMessage={<p>You Viewd all Businesses</p>}
            > */}
            {tableData?.map((eachItem: any, index: number) => {
              return (
                <>
                  {/* <input
                    type="checkbox"
                    className="table-checkbox"
                    value={eachItem.htmlQrCodeUrl}
                    onChange={getQRCode}
                  /> */}
                  <tr key={eachItem._id} className="table-body-border">
                    <td>
                      <input
                        type="checkbox"
                        className="table-checkbox"
                        value={eachItem.htmlQrCodeUrl}
                        onChange={(e) => getQRCode(e, eachItem, index)}
                      />
                    </td>

                    <Tooltip title={eachItem.email} placement="left">
                      <td
                        onClick={passingIdAndNavigation(
                          eachItem.businessOwnerId,
                          eachItem.name,
                          eachItem.shakeOffer,
                          eachItem.spinWheel
                        )}
                        style={{ width: "15%" }}
                      >
                        <p className="name">{eachItem.name} </p>
                        {/* <div className="tooltip mail"> */}
                        {eachItem.email.length > 15
                          ? eachItem.email.substring(0, 16) + "..."
                          : eachItem.email}
                        {/* <span className="tooltiptext">{eachItem.email}</span> */}
                        {/* </div> */}
                      </td>
                    </Tooltip>
                    <td
                      onClick={passingIdAndNavigation(
                        eachItem.businessOwnerId,
                        eachItem.name,
                        eachItem.shakeOffer,
                        eachItem.spinWheel
                      )}
                      style={{ width: "8%" }}
                    >
                      <p className="name">{eachItem.createdByName}</p>
                    </td>
                    <td
                      onClick={passingIdAndNavigation(
                        eachItem.businessOwnerId,
                        eachItem.name,
                        eachItem.shakeOffer,
                        eachItem.spinWheel
                      )}
                      // style={{ width: "150px" }}
                      style={{ width: "10%" }}
                    >
                      {eachItem.city}, {eachItem.countryCode}
                    </td>
                    <td
                      onClick={passingIdAndNavigation(
                        eachItem.businessOwnerId,
                        eachItem.name,
                        eachItem.shakeOffer,
                        eachItem.spinWheel
                      )}
                      // style={{ width: "10" }}
                      style={{ width: "12%" }}
                    >
                      {eachItem.category}
                    </td>
                    <td
                      onClick={passingIdAndNavigation(
                        eachItem.businessOwnerId,
                        eachItem.name,
                        eachItem.shakeOffer,
                        eachItem.spinWheel
                      )}
                      // style={{ width: "95px" }}
                      style={{ width: "10%" }}
                    >
                      {eachItem.totalCampaigns}
                    </td>
                    <td
                      onClick={passingIdAndNavigation(
                        eachItem.businessOwnerId,
                        eachItem.name,
                        eachItem.shakeOffer,
                        eachItem.spinWheel
                      )}
                      style={{ width: "8%" }}
                    >
                      {eachItem.totalClaims}
                    </td>
                    <td
                      onClick={passingIdAndNavigation(
                        eachItem.businessOwnerId,
                        eachItem.name,
                        eachItem.shakeOffer,
                        eachItem.spinWheel
                      )}
                      // style={{ width: "95px" }}
                      style={{
                        width: "10%",
                      }}
                    >
                      {eachItem.totalBookmarks}
                    </td>
                    <td
                      className="name business-td"
                      onClick={passingIdAndNavigation(
                        eachItem.businessOwnerId,
                        eachItem.name,
                        eachItem.shakeOffer,
                        eachItem.spinWheel
                      )}
                      style={{
                        width: "8%",
                        textAlign: "left",
                      }}
                    >
                      {eachItem.symbol}
                      {eachItem.totalAmountSpent}
                    </td>
                    <Popup
                      trigger={
                        <td>
                          <img src={dropdownIcon} alt="dropdown icon" />
                        </td>
                      }
                      position={index > 2 ? "left bottom" : "left top"}
                    >
                      <div className="pop-up-container">
                        <div className="pop-up-heading-container">
                          <h2 className="pop-up-heading">
                            Shake Offer Insights
                          </h2>

                          <hr className="pop-up-hr" />
                        </div>
                        <div className="pop-up-icons-container">
                          <div className="pop-up-icon-container">
                            <img
                              src={campaignsIcon}
                              className="pop-up-icon"
                              alt=""
                            />
                            <div>
                              <p className="pop-up-text">
                                {eachItem.shakeOffer.campaigns}
                              </p>
                              <p className="pop-up-description">Campaigns</p>
                            </div>
                          </div>
                          <div className="hr-container">
                            <hr className="hr-after-icon" />
                          </div>

                          <div className="pop-up-icon-container">
                            <img
                              src={claimsIcon}
                              className="pop-up-icon"
                              alt="claims"
                            />
                            <div>
                              <p className="pop-up-text">
                                {eachItem.shakeOffer.claims}
                              </p>
                              <p className="pop-up-description">Total Claims</p>
                            </div>
                          </div>

                          <div className="hr-container">
                            <hr className="hr-after-icon" />
                          </div>
                          <div className="pop-up-icon-container">
                            <img
                              src={bookmarksIcon}
                              className="pop-up-icon"
                              alt="bookmarks"
                            />
                            <div>
                              <p className="pop-up-text">
                                {eachItem.shakeOffer.bookmarks}
                              </p>
                              <p className="pop-up-description">Bookmarks</p>
                            </div>
                          </div>
                          <div className="pop-up-icon-container">
                            <img
                              src={activeCampainIcon}
                              className="pop-up-icon"
                              alt="active campaigns"
                            />
                            <div>
                              <p className="pop-up-text">
                                {eachItem.shakeOffer.activeCampaigns}
                              </p>
                              <p className="pop-up-description">
                                Active campaigns
                              </p>
                            </div>
                          </div>
                          <div className="hr-container">
                            <hr className="hr-after-icon" />
                          </div>
                          <div className="pop-up-icon-container">
                            <img
                              src={amountSpentIcon}
                              className="pop-up-icon"
                              alt="amount spent"
                            />
                            <div>
                              <p className="pop-up-text">
                                {eachItem.shakeOffer.amountSpent}
                              </p>
                              <p className="pop-up-description">Amount spent</p>
                            </div>
                          </div>
                        </div>
                        <div className="pop-up-heading-container">
                          <h2 className="pop-up-heading">Spinwheel Insights</h2>

                          <hr className="pop-up-hr" />
                        </div>
                        <div className="pop-up-icons-container">
                          <div className="pop-up-icon-container">
                            <img
                              src={campaignsIcon}
                              className="pop-up-icon"
                              alt="campaigns"
                            />
                            <div>
                              <p className="pop-up-text">
                                {eachItem.spinWheel.campaigns}
                              </p>
                              <p className="pop-up-description">Campaigns</p>
                            </div>
                          </div>
                          <div className="hr-container">
                            <hr className="hr-after-icon" />
                          </div>

                          <div className="pop-up-icon-container">
                            <img
                              src={claimsIcon}
                              className="pop-up-icon"
                              alt="claims"
                            />
                            <div>
                              <p className="pop-up-text">
                                {eachItem.spinWheel.claims}
                              </p>
                              <p className="pop-up-description">Total Claims</p>
                            </div>
                          </div>

                          <div className="hr-container">
                            <hr className="hr-after-icon" />
                          </div>
                          <div className="pop-up-icon-container">
                            <img
                              src={spinsIcon}
                              className="pop-up-icon"
                              alt="spins"
                            />
                            <div>
                              <p className="pop-up-text">
                                {eachItem.spinWheel.plays}
                              </p>
                              <p className="pop-up-description">Spins</p>
                            </div>
                          </div>
                          <div className="pop-up-icon-container">
                            <img
                              src={winsIcon}
                              className="pop-up-icon"
                              alt="wins"
                            />
                            <div>
                              <p className="pop-up-text">
                                {eachItem.spinWheel.wins}
                              </p>
                              <p className="pop-up-description">Wins</p>
                            </div>
                          </div>
                          {/* <div className="hr-container">
                            <hr className="hr-after-icon" />
                          </div> */}
                          {/* <div className="pop-up-icon-container">
                            <img
                              src={bookmarksIcon}
                              className="pop-up-icon"
                              alt="bookmarks"
                            />
                            <div>
                              <p className="pop-up-text">
                                {eachItem.spinWheel.bookmarks}
                              </p>
                              <p className="pop-up-description">Bookmarks</p>
                            </div>
                          </div> */}
                          <div className="hr-container">
                            <hr className="hr-after-icon" />
                          </div>
                          <div className="pop-up-icon-container">
                            <img
                              src={amountSpentIcon}
                              className="pop-up-icon"
                              alt="amount spent"
                            />
                            <div>
                              <p className="pop-up-text">
                                {eachItem.spinWheel.amountSpent}
                              </p>
                              <p className="pop-up-description">Amount spent</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Popup>
                  </tr>
                </>
              );
            })}
            {/* </InfiniteScroll> */}
            {/* </div> */}
          </tbody>

          {/* </div> */}
        </table>
      </div>
      {/* </InfiniteScroll> */}

      {/* <div className="pagination-container">
        <ThemeProvider theme={theme}>
          <Stack spacing={2}>
            <Pagination
              count={15}
              shape="rounded"
              color="primary"
              page={page}
              onChange={onChangePage}
            />
          </Stack>
        </ThemeProvider>
      </div> */}
    </>
  );
};

export default BusinessTable;
