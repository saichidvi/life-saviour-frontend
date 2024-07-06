import { useState } from "react";

import Card from "../../components/common/CardsDashBoard/card";
import DataTable from "../../components/common/DataTable/dataTable";
import MapSection from "../../components/specific/MapSection/mapSection";
import ChatSection from "../../components/specific/ChatSection/chatSection";
import ImageSection from "../../components/specific/ImageSection/imageSection";

import "./dashBoard.css";

const Dashboard = () => {
  const [tripAssigned, setTripAssigned] = useState(false);
  const [dataTable, setDataTable] = useState("Previous Drives");
  const [cardsList, setCardsList] = useState([
    { title: "Previous Drives", value: "37", status: "active" },
    { title: "Current Requests", value: "49", status: "inactive" },
  ]);

  return (
    <div className="dashBoard__main">
      {tripAssigned ? (
        <>
          <div className="cards__section">
            {cardsList.map((item, index) => {
              return (
                <Card
                  key={index}
                  data={{ item, setCardsList, setDataTable }}></Card>
              );
            })}
          </div>
          <div className="dataTable_section">
            <DataTable data={{ dataTable }}></DataTable>
          </div>
        </>
      ) : (
        <>
          <div className="ride__section">
            <div className="ride__section__child">
              <ImageSection></ImageSection>
            </div>
            <div className="ride__section__child">
              <ChatSection></ChatSection>
            </div>
            <div className="ride__section__child">
              <MapSection></MapSection>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
export default Dashboard;
