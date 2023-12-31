import React from 'react'
import {models} from 'powerbi-client';
import { PowerBIEmbed } from 'powerbi-client-react';
import Sidebar from "../global/Sidebar";
import { useState } from 'react';
const Calendar = () => {
  const [isSidebar, setIsSidebar] = useState(true);

  return (
      <div className="app">
      <Sidebar isSidebar={isSidebar} />
        <iframe width="1290" height="710" allow="microphone;" src="https://console.dialogflow.com/api-client/demo/embedded/454c4d49-3630-4957-ac98-918c8914ecc5"></iframe>
      </div>

  )
}

export default Calendar;