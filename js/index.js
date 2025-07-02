$(document).ready(function () {
  // Close navbar collapse when a link inside navbar-nav is clicked
  $(".navbar-nav li a:not('.dropdown-toggle')").on("click", function () {
    $(".navbar-collapse").collapse("hide");
  });

  // Close navbar collapse when anything else on the screen is clicked
  $(document).on("click", function (event) {
    if (!$(event.target).closest(".navbar-collapse").length) {
      // Clicked outside of the navbar, so hide it
      $(".navbar-collapse").collapse("hide");
    }
  });

  function grayOutOldEvents() {
    // Get today's date in the format "YYYY-MM-DD"
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0"); // January is 0!
    var yyyy = today.getFullYear();
    today = yyyy + "-" + mm + "-" + dd;

    // Iterate through the card elements with the "tour-card" class
    $(".tour-card").each(function () {
      var eventDate = $(this).data("event-date");

      if (eventDate < today) {
        // Add a class to gray out the card
        $(this).addClass("grayed");
      }
    });
  }

  // Get the current year for the Copyright Notice
  const currentYear = new Date().getFullYear();
  $("#currentYear").text(currentYear);

  function updateMonthBadge(badgeId, targetMonth) {
    // Select the tour date elements with the "tour-card" class
    var tourDateElements = $(".tour-card");

    // Calculate the number of tour dates for the given month
    var monthCount = tourDateElements.filter(function () {
      var eventDate = $(this).data("event-date");
      var eventMonth = eventDate.split("-")[1]; // Extract the month from the event date
      return eventMonth === targetMonth;
    }).length;

    // Update the badge number
    $("#" + badgeId).text(monthCount);
    // Make the ones with at least one event red
    if (monthCount > 0) {
      $("#" + badgeId).css("background-color", "#00b876");
    }
  }

  // Function calls

  grayOutOldEvents();

  // Call the function for each month
  updateMonthBadge("january-badge", "01");
  updateMonthBadge("february-badge", "02");
  updateMonthBadge("march-badge", "03");
  updateMonthBadge("april-badge", "04");
  updateMonthBadge("may-badge", "05");
  updateMonthBadge("june-badge", "06");
  updateMonthBadge("july-badge", "07");
  updateMonthBadge("august-badge", "08");
  updateMonthBadge("september-badge", "09");
  updateMonthBadge("october-badge", "10");
  updateMonthBadge("november-badge", "11");
  updateMonthBadge("december-badge", "12");
});
