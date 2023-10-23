document.addEventListener("DOMContentLoaded", function () {
  // Your existing code for saving and liking items can go here

  const commentForm = document.getElementById("comment-form");
  const commentList = document.getElementById("comment-list");

  // Retrieve comments from localStorage
  const comments = JSON.parse(localStorage.getItem("comments")) || [];

  // Function to save comments to localStorage
  function saveCommentsToStorage(comments) {
    localStorage.setItem("comments", JSON.stringify(comments));
  }

  // Function to add a comment to the list and localStorage
  function addComment(name, email, commentText) {
    const comment = {
      name: name,
      email: email,
      text: commentText,
    };

    comments.push(comment);

    // Create a new list item to display the comment
    const listItem = document.createElement("li");
    listItem.innerHTML = `<strong>${name}</strong> (${email}): ${commentText}`;

    // Add the comment to the comment list
    commentList.appendChild(listItem);

    // Save the updated comments to localStorage
    saveCommentsToStorage(comments);
  }

  // Populate the comment list with existing comments
  comments.forEach(function (comment) {
    const listItem = document.createElement("li");
    listItem.innerHTML = `<strong>${comment.name}</strong> (${comment.email}): ${comment.text}`;
    commentList.appendChild(listItem);
  });

  commentForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const commentText = document.getElementById("comment").value;

    // Add the new comment to the list and save it
    addComment(name, email, commentText);

    // Clear the form fields
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("comment").value = "";
  });
});
