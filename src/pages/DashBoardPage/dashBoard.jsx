import { useState } from "react";
import Card from "../../components/common/CardsDashBoard/card";
import DataTable from "../../components/common/DataTable/dataTable";

import "./dashBoard.css";

const Dashboard = () => {
  const [dataTable, setDataTable] = useState("Previous Drives");
  const [cardsList, setCardsList] = useState([
    { title: "Previous Drives", value: "37", status: "active" },
    { title: "Current Requests", value: "49", status: "inactive" },
  ]);

  return (
    <div className="dashBoard__main">
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
    </div>
  );
};
export default Dashboard;
