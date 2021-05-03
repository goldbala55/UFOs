// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

console.log("entering app.js");

// write a function to build a table to hold the UFO data
function buildTable(data) {
  console.log("running buildTable");
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

// Use D3 to create interactive filtering by date
function handleClick() {
  let date = d3.select("#datetime").property("value");
  let filteredData = tableData;

  // filter data based on input date
  if (date) {
    filteredData = filteredData.filter((row) => row.datetime === date);
  }

  // now rebuild the table (note: if no date is supplied, the entire table is returned)
  buildTable(filteredData);
}
// listen for the click
d3.selectAll("#filter-btn").on("click", handleClick);

//build the initial table to display - all data
buildTable(tableData);
