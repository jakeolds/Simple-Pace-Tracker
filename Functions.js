// Function to handle form submission
$("#runForm").submit(function(event) {
    event.preventDefault();
    const distanceInMiles = parseFloat($("#distance").val());
    const time = parseFloat($("#time").val());
    const averagePace = (time /distanceInMiles).toFixed(2);
  
    // Create a new table row with the entered data
    const newRow = `<tr><td>${distanceInMiles}</td><td>${time}</td><td>${averagePace}</td></tr>`;
  
    // Append the new row to the table
    $("#runTableBody").append(newRow);
  
    // Clear form inputs
    $("#distance").val('');
    $("#time").val('');
    $("#pace").val('');
  });