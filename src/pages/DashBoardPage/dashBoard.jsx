import Card from "../../components/common/CardsDashBoard/card";

import "./dashBoard.css";

const Dashboard = () => {
  const cardList = [
    { title: "Previous Drives", value: "37" },
    { title: "Current Requests", value: "49" },
  ];
  return (
    <div className="dashBoard__main">
      {cardList.map((item, index) => {
        <Card key={index}></Card>;
      })}
    </div>
  );
};
export default Dashboard;
