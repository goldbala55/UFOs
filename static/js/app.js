// from data.js
const tableData = data;

// get table references
var tbody = d3.select("tbody");

function buildTable(data) {
  // First, clear out any existing data
  tbody.html("");

  // Next, loop through each object in the data
  // and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // Append a row to the table body
    let row = tbody.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
    });
  });
}

// GLobal variable to keep track of all the filters as an object.
var tableFilters = {};

// get all the entered filters from the html page
function updateFilters() {
  console.log("in da updateFilters Funk");

  // extract the value and id updated in the html filters
  let filterValue = d3.select(this).property("value").toLowerCase();
  let filterId = d3.select(this).property("id");

  console.log(filterValue, filterId);

  // add the pair to the table filter
  if (filterValue) {
    tableFilters[filterId] = filterValue;
  } else {
    delete tableFilters[filterId];
  }

  // Call function to apply all filters and rebuild the table
  filterTable();
}

// filter the table when data is entered.
function filterTable() {
  // 8. Set the filtered data to the tableData.
  //let filteredData = tableData;

  // 9. Loop through all of the filters and keep any data that
  // matches the filter values
  console.log("filter dis!");
  for (const f in tableFilters) {
    console.log("Key: " + f + " Value: " + tableFilters[f]);
  }
  // 10. Finally, rebuild the table using the filtered data
}

// listen for changes to any/all filters
d3.selectAll("input").on("change", updateFilters);

// Build the table when the page loads
buildTable(tableData);
