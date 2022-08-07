"use strict";

// Initial Comments Array
let commentsArray = [
  {
    name: "Miles Acosta",
    timestamp: "12/20/2020",
    comments:
      "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
  },
  {
    name: "Emilie Beach",
    timestamp: "01/09/2021",
    comments:
      "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
  },
  {
    name: "Connor Walton",
    timestamp: "02/17/2021",
    comments:
      "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
  },
];

// HTML elements
const submitBtn = document.querySelector(".comments__submit-btn");
const nameField = document.querySelector(".comments__name-field");
const commentsField = document.querySelector(".comments__comment-field");
const commentsAchieve = document.querySelector(".comments-archieve");

// Modular data input for later updates
function insertData(span1, span2, text, dataElement) {
  span1.innerText = dataElement.name;
  span2.innerText = dataElement.timestamp;
  text.innerText = dataElement.comments;
}

// Build out HTML comment card & prepend to top of comment list
let displayComment = function (array) {
  array.forEach((el) => {
    const outer = document.createElement("div");
    const hr = document.createElement("hr");
    const comment = document.createElement("div");
    const commentIcon = document.createElement("img");
    const comContainer = document.createElement("div");
    const nameDate = document.createElement("div");
    const span = document.createElement("span");
    const span1 = document.createElement("span");
    const text = document.createElement("div");

    outer.classList.add("comments-archieve__outer");
    hr.classList.add("comments-archieve__hr");
    comment.classList.add("comments-archieve__comment");
    comContainer.classList.add("comments-archieve__com-container");
    commentIcon.classList.add("comments-archieve__icon");
    nameDate.classList.add("comments-archieve__name-date");
    span1.classList.add("comments-archieve__span-right");
    text.classList.add("comments-archieve__text");

    commentIcon.setAttribute("src", "./assets/Images/placeholder.png");

    commentsAchieve.prepend(outer);
    outer.appendChild(hr);
    outer.appendChild(comment);
    comment.appendChild(commentIcon);
    comment.appendChild(comContainer);
    comContainer.appendChild(nameDate);
    nameDate.appendChild(span);
    nameDate.appendChild(span1);
    comContainer.appendChild(text);

    insertData(span, span1, text, el);
  });
};

displayComment(commentsArray);

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  // Form validation, trim white space
  if (nameField.value === "") nameField.classList.add("comments__error");
  if (commentsField.value === "")
    commentsField.classList.add("comments__error");
  else if (nameField.value.length >= 1 && commentsField.value.length >= 1) {
    const today = new Date();

    commentsArray.unshift({
      name: nameField.value.trim(),
      timestamp: today.toLocaleDateString("en-US", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      }),
      comments: commentsField.value.trim(),
    });

    displayComment([commentsArray[0]]);

    commentsField.value = "";
    nameField.value = "";
  }
});

// remove red error border on form fields
nameField.addEventListener("change", function () {
  if (nameField.value.length >= 1)
    nameField.classList.remove("comments__error");
});

commentsField.addEventListener("change", function () {
  if (commentsField.value.length >= 1)
    commentsField.classList.remove("comments__error");
});
