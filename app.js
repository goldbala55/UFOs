// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

// write a function to build a table to hold the UFO data
function buildTable(data) {
  // clear the table of any prior data
  tbody.html("");

  // loop through the data array, appending new rows
  data.forEach((dataRow) => {
    let row = tbody.append("tr");

    // loop though the fields in the dataRow and add to table cell
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
    });
  });
}
