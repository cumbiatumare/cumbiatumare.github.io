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

  // Get the current year for the Copyright Notice
  const currentYear = new Date().getFullYear();
  $("#currentYear").text(currentYear);

  function grayOutOldEvents() {
    const today = new Date();

    $(".tour-card").each(function () {
      const eventDateStr = $(this).data("event-date");
      const eventDate = new Date(eventDateStr);

      if (eventDate < today) {
        $(this).addClass("grayed");
      }
    });
  }

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

  // Because why not?
  console.log(`
  ___           _    _        _____       __  __              
 / __|  _ _ __ | |__(_)__ _  |_   _|  _  |  \\/  |__ _ _ _ ___ 
| (_| || | '  \\| '_ \\ / _\` |   | || || | | |\\/| / _\` | '_/ -_)
 \\___\\_,_|_|_|_|_.__/_\\__,_|   |_| \\_,_| |_|  |_\\__,_|_| \\___|
                                                            
`);
});
