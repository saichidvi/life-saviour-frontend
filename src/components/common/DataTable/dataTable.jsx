import MUIDataTable from "mui-datatables";
import "./dataTable.css";

const DataTable = ({ data }) => {
  const { dataTable } = data;
  //   const columns = ["Name", "Company", "City", "State"];
  const columns = [
    {
      name: "Name",
      options: {
        customBodyRender: (value) => (
          <div className="dataTable_RowCellValue color__828282 fs__12px">
            {value}
          </div>
        ),
      },
    },
    {
      name: "Company",
      options: {
        customBodyRender: (value) => (
          <div className="dataTable_RowCellValue color__828282 fs__12px">
            {value}
          </div>
        ),
      },
    },
    {
      name: "City",
      options: {
        customBodyRender: (value) => (
          <div className="dataTable_RowCellValue color__828282 fs__12px">
            {value}
          </div>
        ),
      },
    },
    {
      name: "State",
      options: {
        customBodyRender: (value) => (
          <div className="dataTable_RowCellValue color__828282 fs__12px">
            {value}
          </div>
        ),
      },
    },
  ];

  const dataTableData = [
    ["Joe James", "Test Corp", "Yonkers", "NY"],
    ["John Walsh", "Test Corp", "Hartford", "CT"],
    ["James Houston", "Test Corp", "Dallas", "TX"],
    ["Bob Herm", "Test Corp", "Tampa", "FL"],
    ["James Houston", "Test Corp", "Dallas", "TX"],
    ["Joe James", "Test Corp", "Yonkers", "NY"],
    ["Bob Herm", "Test Corp", "Tampa", "FL"],
  ];

  const options = {
    selectableRows: false,
    rowsPerPage: 5,
    rowsPerPageOptions: [5, 10, 15, 20],
    download: false,
    print: false,
    viewColumns: false,
  };

  return (
    <div className="dataTable_container">
      {dataTable === "Previous Drives" ? (
        <div className="mui_dataTable">
          <MUIDataTable
            title={dataTable}
            data={dataTableData}
            columns={columns}
            options={options}
          />
        </div>
      ) : (
        <div className="mui_dataTable">
          <MUIDataTable
            title={dataTable}
            data={dataTableData}
            columns={columns}
            options={options}
          />
        </div>
      )}
    </div>
  );
};

export default DataTable;
