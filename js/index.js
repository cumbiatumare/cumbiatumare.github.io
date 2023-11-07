$(document).ready(function () {
  function grayOutOldEvents() {
    // Get today's date in the format "YYYY-MM-DD"
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0"); // January is 0!
    var yyyy = today.getFullYear();
    today = yyyy + "-" + mm + "-" + dd;

    // Iterate through the card elements with the "tour-date" class
    $(".tour-date").each(function () {
      var eventDate = $(this).data("event-date");

      console.log("Event Date: " + eventDate);

      if (eventDate < today) {
        // Add a class to gray out the card
        console.log("Gray out event Date: " + eventDate);
        $(this).addClass("grayed");
      }
    });
  }

  function updateMonthBadge(badgeId, targetMonth) {
    // Select the tour date elements with the "tour-date" class
    var tourDateElements = $(".tour-date");

    // Calculate the number of tour dates for the given month
    var monthCount = tourDateElements.filter(function () {
      var eventDate = $(this).data("event-date");
      var eventMonth = eventDate.split("-")[1]; // Extract the month from the event date
      return eventMonth === targetMonth;
    }).length;

    console.log("Month Count: " + monthCount);
    // Update the badge number
    $("#" + badgeId).text(monthCount);
  }

  // Function calls

  grayOutOldEvents();

  // Call the function for November (targetMonth = '11') and December (targetMonth = '12')
  updateMonthBadge("november-badge", "11"); // November
  updateMonthBadge("december-badge", "12"); // December
});
