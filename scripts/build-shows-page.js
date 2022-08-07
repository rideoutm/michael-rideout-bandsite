"use strict";

const datesArray = [
  {
    date: "Mon Sept 06 2021",
    venue: "Ronald Lane",
    location: "San Francisco, CA",
  },
  {
    date: "Tue Sept 21 2021",
    venue: "Pier 3 East",
    location: "San Francisco, CA",
  },
  {
    date: "Fri Oct 15 2021",
    venue: "View Lounge",
    location: "San Francisco, CA",
  },
  {
    date: "Sat Nov 06 2021",
    venue: "Hyatt Agency",
    location: "San Francisco, CA",
  },
  {
    date: "Fri Nov 26 2021",
    venue: "Moscow Center",
    location: "San Francisco, CA",
  },
  {
    date: "Wed Dec 15 2021",
    venue: "Press Club",
    location: "San Francisco, CA",
  },
];

function displayShowTitle() {
  // Non iterating elements
  const main = document.querySelector("main");
  const showsContainer = document.createElement("div");
  const showsTitle = document.createElement("div");
  const h2 = document.createElement("h2");
  const showsDatesContainer = document.createElement("div");

  showsContainer.classList.add("shows__container");
  showsTitle.classList.add("shows__title");
  showsDatesContainer.classList.add("shows__dates-container");

  // classes for tablet/desktop  hidden row

  main.appendChild(showsContainer);
  showsContainer.appendChild(showsTitle);
  showsTitle.appendChild(h2);
  showsContainer.appendChild(showsDatesContainer);

  h2.innerText = "Shows";

  let container = document.querySelector(".shows__dates-container");

  let selectedRow;

  container.addEventListener("click", (e) => {
    console.log(e.target);
    let row = e.target.closest(".shows__show");
    if (!row) return;

    if (!container.contains(row)) return;

    focusDark(row);
  });

  function focusDark(theRow) {
    if (selectedRow) {
      selectedRow.classList.remove("shows__focus-dark");
      selectedRow.classList.add("shows__show--hover");
    }
    selectedRow = theRow;
    selectedRow.classList.add("shows__focus-dark");
    selectedRow.classList.remove("shows__show--hover");
  }

  // Build HTML card, loop through dates array, assign array values to elements
  return function displayShowCard() {
    datesArray.forEach((el, i) => {
      // Div elements
      const showsShow = document.createElement("div");
      const showsShowDate = document.createElement("div");
      const showsShowVenue = document.createElement("div");
      const showsShowLocation = document.createElement("div");
      const showsShowsBtn = document.createElement("div");

      const showsDivider = document.createElement("div");

      // Paragraph Elements
      const showInfoVenue = document.createElement("p");
      const showInfoCity = document.createElement("p");
      const showsSubHeaderDate = document.createElement("p");
      const showsSubHeaderVenue = document.createElement("p");
      const showsSubHeaderLoc = document.createElement("p");
      const showsSpecDate = document.createElement("p");

      // Button Element
      const showsTicketBtn = document.createElement("button");

      // add classLists to elements
      showsShow.classList.add("shows__show");
      showsShow.classList.add("shows__show--hover");
      showsShowDate.classList.add("shows__show-date");
      showsSubHeaderDate.classList.add("shows__sub-header-date");
      showsSubHeaderVenue.classList.add("shows__sub-header-venue");
      showsSubHeaderLoc.classList.add("shows__sub-header-location");
      showsSpecDate.classList.add("shows__spec-date");
      showsShowVenue.classList.add("shows__show-venue");
      showInfoCity.classList.add("shows__show-info-city");
      showInfoVenue.classList.add("shows__show-info-venue");
      showsShowLocation.classList.add("shows__show-location");
      showsShowsBtn.classList.add("shows__shows-btn");
      showsDivider.classList.add("shows__divider");
      showsTicketBtn.classList.add("shows__ticket-btn");

      // Build HTML structure
      showsDatesContainer.appendChild(showsShow);
      showsShow.appendChild(showsShowDate);
      showsShowDate.appendChild(showsSubHeaderDate);
      showsShowDate.appendChild(showsSpecDate);
      showsShow.appendChild(showsShowVenue);
      showsShowVenue.appendChild(showsSubHeaderVenue);
      showsShowVenue.appendChild(showInfoVenue);
      showsShow.appendChild(showsShowLocation);
      showsShowLocation.appendChild(showsSubHeaderLoc);
      showsShowLocation.appendChild(showInfoCity);
      showsShow.appendChild(showsShowsBtn);
      showsShowsBtn.appendChild(showsTicketBtn);
      showsShow.insertAdjacentElement("afterend", showsDivider);

      // Assign array values to elements, text to subtitles
      if (i < 1) {
        showsShow.classList.add("shows__show--row-width");
        showsTicketBtn.classList.add("shows__ticket-btn--first");
      }
      // Remove titles from index 1 to last, add BEM modifiers
      if (i > 0 && i < datesArray.length) {
        showsSubHeaderDate.classList.add("shows__hidden");
        showsSubHeaderVenue.classList.add("shows__hidden");
        showsSubHeaderLoc.classList.add("shows__hidden");
        showsSpecDate.classList.add("shows__margin");
        showInfoVenue.classList.add("shows__margin");
        showInfoCity.classList.add("shows__margin");
        showsTicketBtn.classList.add("shows__btn-margin");
      }

      showsSubHeaderDate.innerText = "DATE";
      showsSubHeaderVenue.innerText = "VENUE";
      showsSubHeaderLoc.innerText = "LOCATION";

      showsSpecDate.innerText = el.date;
      showInfoVenue.innerText = el.venue;
      showInfoCity.innerText = el.location;
      showsTicketBtn.innerText = "BUY TICKETS";
    });
  };
}

// store func return value in global mem & call
let html = displayShowTitle();
html();
