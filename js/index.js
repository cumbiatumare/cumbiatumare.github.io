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

    // Iterate through the card elements with the "tour-date" class
    $(".tour-date").each(function () {
      var eventDate = $(this).data("event-date");

      if (eventDate < today) {
        // Add a class to gray out the card
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

    // Update the badge number
    $("#" + badgeId).text(monthCount);
  }

  // Function calls

  grayOutOldEvents();

  // Call the function for November (targetMonth = '11') and December (targetMonth = '12')
  updateMonthBadge("november-badge", "11");
  updateMonthBadge("december-badge", "12");
  updateMonthBadge("may-badge", "05");
});
