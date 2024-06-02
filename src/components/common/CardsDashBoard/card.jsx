import "./card.css";
const Card = ({ data }) => {
  const { title, value, status } = data.item;
  const { setCardsList, setDataTable } = data;
  const handleActiveDataTable = (e) => {
    console.log("clicked");
    setDataTable(title);
    setCardsList((prev) =>
      prev.map((item) => {
        if (item.title === title) {
          return { ...item, status: "active" };
        } else {
          return { ...item, status: "inactive" };
        }
      })
    );
  };
  return (
    <div
      onClick={(e) => {
        handleActiveDataTable(e);
      }}
      value={title}
      className="card__container"
      style={{
        backgroundColor:
          status === "active" ? "rgba(22, 93, 89, 0.9)" : "#ffffff",
      }}>
      <h1
        className="fs__24px "
        style={{ color: status === "active" ? "#ffffff" : "#165d59" }}>
        {title}
      </h1>
      <div
        className="card__value_container mt-4"
        style={{ borderColor: status === "active" ? "#ffffff" : "#165d59" }}>
        <p
          className="fs__18px"
          style={{ color: status === "active" ? "#ffffff" : "#165d59" }}>
          {value}
        </p>
      </div>
    </div>
  );
};
export default Card;
