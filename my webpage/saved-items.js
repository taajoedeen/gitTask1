document.addEventListener("DOMContentLoaded", function () {
  const savedItemsList = document.getElementById("saved-items-list");

  // Retrieve saved items from localStorage
  const savedItems = JSON.parse(localStorage.getItem("savedItems")) || [];

  savedItemsList.innerHTML = ""; // Clear the existing items
  savedItems.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    savedItemsList.appendChild(li);
  });
});
