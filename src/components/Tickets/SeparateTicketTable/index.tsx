import Sidebar from '../../Sidebar';
import { useParams } from 'react-router-dom';
import BasicTabsForTickets from '../TicketTabDetails';

import './index.css';
import RestaurantDetails from '../../RestaurantDetailsInTickets';

import axios from 'axios';
import { useState, useEffect } from 'react';
import Chat from '../Chat';
import { Drawer, Box } from '@mui/material';
import { baseUrl } from '../../../App';
const activeId = 'TICKETS';
const SeparateTicketTable = (props: any) => {
  // const location = useLocation();
  // const data = location.state;
  const { id } = useParams();
  const [sepData, setSepData] = useState<any>([]);
  const jwtToken: any = localStorage.getItem('jwtToken');
  const url = `${baseUrl}business/api/tickets/list?&businessOwnerId=${id}`;
  console.log(url);
  useEffect(() => {
    axios
      .get(url, {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          'x-access-token': jwtToken,
        },
      })
      .then(function (response) {
        setSepData(response.data.data.list);
      });
  }, [id, jwtToken, url]);

  console.log('ttttt', sepData);

  const [chat, SetChat] = useState(false);
  // const onclickChat = (value: any) => {
  //   SetChat(!value);
  // };

  const onClickChat = () => {
    SetChat(!chat);
  };
  // const passingChatItems =
  //   (userId: string, userName: number, id: any) => (event: any) => {
  //     navigate(`/Tickets/details/${userName}/${userId}/${id}`);
  //   };
  return (
    <>
      <div className="separate-ticket-table">
        <Sidebar activeId={activeId} />
        <BasicTabsForTickets />
        <RestaurantDetails />
      </div>
      <Drawer anchor="right" open={chat}>
        <Box sx={{ width: '525px' }}>
          <Chat onclickChat={onClickChat} chat={chat} />
        </Box>
      </Drawer>
    </>
  );
};

export default SeparateTicketTable;
