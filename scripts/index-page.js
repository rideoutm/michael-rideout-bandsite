"use strict";

// Initial Comments Array
let commentsArray = [
  {
    name: "Connor Walton",
    timestamp: "02/17/2021",
    comments:
      "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
  },
  {
    name: "Emilie Beach",
    timestamp: "01/09/2021",
    comments:
      "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
  },
  {
    name: "Miles Acosta",
    timestamp: "12/20/2020",
    comments:
      "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
  },
];

// HTML elements
const submitBtn = document.querySelector(".comments__submit-btn");
// const testDiv = document.querySelector(".TESTDIV");
const nameField = document.querySelector(".comments__name-field");
const commentsField = document.querySelector(".comments__comment-field");
const commentsAchieve = document.querySelector(".comments-archieve");

// Build HTML

function insertData(personName, timestamp, comment) {
  this.personName = personName;
  this.timestamp = timestamp;
  this.comment = comment;
}

let displayComment = function (array) {
  array.forEach((el) => {
    const testDiv = document.createElement("div");
    const hr = document.createElement("hr");
    const comment = document.createElement("div");
    const commentIcon = document.createElement("img");
    const comContainer = document.createElement("div");
    const nameDate = document.createElement("div");
    const span = document.createElement("span");
    const span1 = document.createElement("span");
    const text = document.createElement("div");

    testDiv.classList.add("TESTDIV");
    hr.classList.add("comments-archieve__hr");
    comment.classList.add("comments-archieve__comment");
    comContainer.classList.add("comments-archieve__com-container");
    commentIcon.classList.add("comments-archieve__icon");
    nameDate.classList.add("comments-archieve__name-date");
    span1.classList.add("comments-archieve__span-right");
    text.classList.add("comments-archieve__text");

    commentIcon.setAttribute("src", "./assets/Images/Mohan-muruge.jpg");

    commentsAchieve.appendChild(testDiv);
    testDiv.appendChild(hr);
    testDiv.appendChild(comment);
    comment.appendChild(commentIcon);
    comment.appendChild(comContainer);
    comContainer.appendChild(nameDate);
    nameDate.appendChild(span);
    nameDate.appendChild(span1);
    comContainer.appendChild(text);

    span.innerText = el.name;
    span1.innerText = el.timestamp;
    text.innerText = el.comments;
  });
};

displayComment(commentsArray);

// function displayComment(array) {
//   array.forEach(function (el) {
//     const html = `
//     <div class="TESTDIV">
//         <hr class="comments-archieve__hr">
//         <div class="comments-archieve__comment">
//             <img class="comments-archieve__icon" src="./assets/Images/Mohan-muruge.jpg" alt="icon placeholder">
//             <div class="comments-archieve__com-container">
//               <div class="comments-archieve__name-date">
//                 <span>${el.name}</span>
//                 <span class="comments-archieve__span-right">${el.date}</span>
//               </div>

//               <div class="comments-archieve__text">
//                 ${el.comment}
//               </div>
//             </div>
//           </div>
//     </div>`;

//     testDiv.insertAdjacentHTML("beforebegin", html);
//   });
// }

submitBtn.addEventListener("click", (e) => {
  console.log(e);
  e.preventDefault();

  const today = new Date();

  commentsArray.unshift({
    name: nameField.value,
    timestamp: today.toLocaleDateString(),
    comments: commentsField.value,
  });

  const testDiv = document.createElement("div");
  const hr = document.createElement("hr");
  const comment = document.createElement("div");
  const commentIcon = document.createElement("img");
  const comContainer = document.createElement("div");
  const nameDate = document.createElement("div");
  const span = document.createElement("span");
  const span1 = document.createElement("span");
  const text = document.createElement("div");

  testDiv.classList.add("TESTDIV");
  hr.classList.add("comments-archieve__hr");
  comment.classList.add("comments-archieve__comment");
  comContainer.classList.add("comments-archieve__com-container");
  commentIcon.classList.add("comments-archieve__icon");
  nameDate.classList.add("comments-archieve__name-date");
  span1.classList.add("comments-archieve__span-right");
  text.classList.add("comments-archieve__text");

  commentIcon.setAttribute("src", "./assets/Images/Mohan-muruge.jpg");

  commentsAchieve.prepend(testDiv);
  testDiv.appendChild(hr);
  testDiv.appendChild(comment);
  comment.appendChild(commentIcon);
  comment.appendChild(comContainer);
  comContainer.appendChild(nameDate);
  nameDate.appendChild(span);
  nameDate.appendChild(span1);
  comContainer.appendChild(text);

  span.innerText = commentsArray[0].name;
  span1.innerText = commentsArray[0].timestamp;
  text.innerText = commentsArray[0].comments;

  commentsField.value = "";
  nameField.value = "";
});

// displayComment(commentsArray);

// let newComment = function () {
//     const testDiv = document.createElement("div");
//     const hr = document.createElement("hr");
//     const comment = document.createElement("div");
//     const commentIcon = document.createElement("img");
//     const comContainer = document.createElement("div");
//     const nameDate = document.createElement("div");
//     const span = document.createElement("span");
//     const span1 = document.createElement("span");
//     const text = document.createElement("div");

//     testDiv.classList.add("TESTDIV");
//     hr.classList.add("comments-archieve__hr");
//     comment.classList.add("comments-archieve__comment");
//     comContainer.classList.add("comments-archieve__com-container");
//     commentIcon.classList.add("comments-archieve__icon");
//     nameDate.classList.add("comments-archieve__name-date");
//     span1.classList.add("comments-archieve__span-right");
//     text.classList.add("comments-archieve__text");

//     commentIcon.setAttribute("src", "./assets/Images/Mohan-muruge.jpg");

//     commentsAchieve.appendChild(testDiv);
//     testDiv.appendChild(hr);
//     testDiv.appendChild(comment);
//     comment.appendChild(commentIcon);
//     comment.appendChild(comContainer);
//     comContainer.appendChild(nameDate);
//     nameDate.appendChild(span);
//     nameDate.appendChild(span1);
//     comContainer.appendChild(text);

//     span.innerText = commentsArray[commentsArray.length - 1].name;
//     span1.innerText = commentsArray[commentsArray.length - 1].timestamp;
//     text.innerText = commentsArray[commentsArray.length - 1].comments;
//   };

//   commentsAchieve.prepend(newComment());

// const html = `
//     <div class="TESTDIV">
//         <hr class="comments-archieve__hr">
//         <div class="comments-archieve__comment">
//             <img class="comments-archieve__icon" src="./assets/Images/Mohan-muruge.jpg" alt="icon placeholder">
//             <div class="comments-archieve__com-container">
//               <div class="comments-archieve__name-date">
//                 <span>${commentsArray[commentsArray.length - 1].name}</span>
//                 <span class="comments-archieve__span-right">${
//                   commentsArray[commentsArray.length - 1].date
//                 }</span>
//               </div>

//               <div class="comments-archieve__text">
//                 ${commentsArray[commentsArray.length - 1].comment}
//               </div>
//             </div>
//           </div>
//     </div>`;

//   commentsAchieve.insertAdjacentHTML("afterbegin", html);
