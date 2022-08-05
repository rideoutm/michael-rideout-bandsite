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

const main = document.querySelector("main");

const showsContainer = document.createElement("div");
const showsTitle = document.createElement("div");
const h2 = document.createElement("h2");
showsContainer.classList.add("shows__container");
showsTitle.classList.add("shows__title");

main.appendChild(showsContainer);
showsContainer.appendChild(showsTitle);
showsTitle.appendChild(h2);

h2.innerText = "Shows";

function displayShow() {
  datesArray.forEach((el) => {
    //   const main = document.createElement("main");

    const showsDatesContainer = document.createElement("div");
    const showsShow = document.createElement("div");
    const showsShowDate = document.createElement("div");
    const showsShowVenue = document.createElement("div");
    const showsShowLocation = document.createElement("div");
    const showsDivider = document.createElement("div");

    const showInfoVenue = document.createElement("p");
    const showInfoCity = document.createElement("p");
    const showsSubHeaderDate = document.createElement("p");
    const showsSubHeaderVenue = document.createElement("p");
    const showsSubHeaderLoc = document.createElement("p");
    const showsSpecDate = document.createElement("p");

    const showsShowsBtn = document.createElement("div");
    const showsTicketBtn = document.createElement("button");

    //   main.classList.add("shows");

    showsDatesContainer.classList.add("shows__dates-container");
    showsShow.classList.add("shows__show");
    showsShowDate.classList.add("shows__show-date");
    showsSubHeaderDate.classList.add("shows__sub-header-date");
    showsSubHeaderVenue.classList.add("shows__sub-header-venue");
    showsSubHeaderLoc.classList.add("shows__sub-header-location");

    //   showsSubHeader.classList.add("shows__sub-header");
    showsSpecDate.classList.add("shows__spec-date");
    showsShowVenue.classList.add("shows__show-venue");
    showInfoCity.classList.add("shows__show-info-city");
    showInfoVenue.classList.add("shows__show-info-venue");
    showsShowLocation.classList.add("shows__show-location");
    showsShowsBtn.classList.add("shows__shows-btn");
    showsDivider.classList.add("shows__divider");

    showsTicketBtn.classList.add("shows__ticket-btn");

    //   footer.appendChild(main);

    showsContainer.appendChild(showsDatesContainer);
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
    showsContainer.appendChild(showsDivider);

    showsSubHeaderDate.innerText = "DATE";
    showsSpecDate.innerText = el.date;

    showsSubHeaderVenue.innerText = "VENUE";
    showInfoVenue.innerText = el.venue;

    showsSubHeaderLoc.innerText = "LOCATION";
    showInfoCity.innerText = el.location;

    showsTicketBtn.innerText = "BUY TICKETS";
  });
}

displayShow();
