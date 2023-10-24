document.addEventListener("DOMContentLoaded", function () {
  const saveButtons = document.querySelectorAll(".save-button");

  saveButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const itemName = button.getAttribute("data-item-name");

      // Retrieve saved items from localStorage
      let savedItems = JSON.parse(localStorage.getItem("savedItems")) || [];

      // Check if the item is already saved
      const isSaved = savedItems.includes(itemName);

      if (isSaved) {
        // If saved, remove it
        const index = savedItems.indexOf(itemName);
        savedItems.splice(index, 1);
        button.textContent = "Save";
        // Add an alert to notify the user
        alert("Item Unsaved!!!.");
      } else {
        // If not saved, add it
        savedItems.push(itemName);
        button.textContent = "Unsave";
        // Add an alert to notify the user
        alert("Item saved!!!.");
      }

      // Save the updated items back to localStorage
      localStorage.setItem("savedItems", JSON.stringify(savedItems));
    });
  });
  // Your existing code for saving items can go here
  const likeScript = document.createElement("script");
  likeScript.src = "like.js";
  document.body.appendChild(likeScript);
});
