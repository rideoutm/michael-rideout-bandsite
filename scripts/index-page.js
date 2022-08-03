"use strict";

// Initial Comments Array
let commentsArray = [
  {
    name: "Connor Walton",
    date: "02/17/2021",
    comment:
      "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
  },
  {
    name: "Emilie Beach",
    date: "01/09/2021",
    comment:
      "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
  },
  {
    name: "Miles Acosta",
    date: "12/20/2020",
    comment:
      "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
  },
];

// HTML elements
const submitBtn = document.querySelector(".comments__submit-btn");
const testDiv = document.querySelector(".TESTDIV");
const nameField = document.querySelector(".comments__name-field");
const commentsField = document.querySelector(".comments__comment-field");
const commentsAchieve = document.querySelector(".comments-archieve");

function displayComment(array) {
  array.forEach(function (el) {
    const html = `
    <div class="TESTDIV">
            <hr class="comments-archieve__hr">
        <div class="comments-archieve__comment">            
            <img class="comments-archieve__icon" src="./assets/Images/Mohan-muruge.jpg" alt="icon placeholder">
            <div class="comments-archieve__com-container">
              <div class="comments-archieve__name-date">
                <span>${el.name}</span>
                <span class="comments-archieve__span-right">${el.date}</span>
              </div>

              <div class="comments-archieve__text">
                ${el.comment}
              </div>
            </div>
          </div>
    </div>`;

    testDiv.insertAdjacentHTML("beforebegin", html);
  });
}

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const today = new Date();

  commentsArray.push({
    name: nameField.value,
    date: today.toLocaleDateString(),
    comment: commentsField.value,
  });

  const html = `
    <div class="TESTDIV">
            <hr class="comments-archieve__hr">
        <div class="comments-archieve__comment">            
            <img class="comments-archieve__icon" src="./assets/Images/Mohan-muruge.jpg" alt="icon placeholder">
            <div class="comments-archieve__com-container">
              <div class="comments-archieve__name-date">
                <span>${commentsArray[commentsArray.length - 1].name}</span>
                <span class="comments-archieve__span-right">${
                  commentsArray[commentsArray.length - 1].date
                }</span>
              </div>

              <div class="comments-archieve__text">
                ${commentsArray[commentsArray.length - 1].comment}
              </div>
            </div>
          </div>
    </div>`;

  commentsAchieve.insertAdjacentHTML("afterbegin", html);
});

displayComment(commentsArray);
