"use strict";

const apiCall =
  "https://project-1-api.herokuapp.com/comments?api_key=c4b9c3b2-8cb7-4c46-b883-8abcad345c08";

let commentsArray = [];

axios
  .get(apiCall)
  .then((response) => {
    // if response is not "ok", throw an error
    if (!response.status === 200) throw new Error(response.status);

    // set the empty array to the API array
    commentsArray = response.data;

    // call displayComments func w/ commentsArray passed in
    displayComment(commentsArray.sort((a, b) => a.timestamp - b.timestamp));
  })
  .catch((err) => err);

// HTML elements
const submitBtn = document.querySelector(".comments__submit-btn");
const nameField = document.querySelector(".comments__name-field");
const commentsField = document.querySelector(".comments__comment-field");
const commentsAchieve = document.querySelector(".comments-archieve");

// Build out HTML comment card & prepend to top of comment list
let displayComment = function (array) {
  // For each element in commentsArray, do...
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

    // create a new date object, pass in the timestamp from each index in the array.
    let date = new Date(el.timestamp);

    // assign each HTML form element respective array values, convert milisecond timestamp to readable date.
    span.innerText = el.name;
    span1.innerText = date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
    text.innerText = el.comment;
  });
};

// run it
displayComment(commentsArray);

// Submit Btn goes *clickClickClick*
submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const newComment = {
    name: nameField.value.trim(),
    comment: commentsField.value.trim(),
  };

  // If empty name/comments, add error borders.
  if (nameField.value === "") nameField.classList.add("comments__error");
  if (commentsField.value === "")
    commentsField.classList.add("comments__error");

  // if name/comments fields have empty string, don't do an axios call. No! Don't do it! Noooooooooooooooo!
  if (nameField.value === "" || commentsField.value === "") return;

  axios
    .post(apiCall, newComment)
    .then((res) => {
      if (res.status < 200 || res.status > 299) throw new Error(res.status);

      if (nameField.value.length > 0 || commentsField.value.length > 0) {
        {
          commentsArray.unshift(res.data);
          displayComment([commentsArray[0]]);
          commentsField.value = "";
          nameField.value = "";
        }
      }
    })
    .catch((err) => err);
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
