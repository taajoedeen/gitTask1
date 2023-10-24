// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Retrieve liked items from localStorage, or initialize an empty array
  const likedItems = JSON.parse(localStorage.getItem("likedItems")) || [];

  // Function to update the liked state of an item
  function setLikedState(itemName, isLiked) {
    const index = likedItems.indexOf(itemName);

    // If the item is liked and not in the likedItems array, add it
    if (isLiked && index === -1) {
      likedItems.push(itemName);
    }
    // If the item is unliked and exists in the likedItems array, remove it
    else if (!isLiked && index !== -1) {
      likedItems.splice(index, 1);
    }

    // Store the updated likedItems array in localStorage
    localStorage.setItem("likedItems", JSON.stringify(likedItems));
  }

  // Select all elements with the class "like-button"
  const likeButtons = document.querySelectorAll(".like-button");

  // Iterate through each "like-button" element
  likeButtons.forEach((button) => {
    // Get the item name from the "data-item-name" attribute
    const itemName = button.getAttribute("data-item-name");

    // Add a click event listener to each like button
    button.addEventListener("click", function () {
      const isLiked = button.classList.contains("liked");

      // Toggle the like/unlike state and update the button text
      if (isLiked) {
        button.classList.remove("liked");
        button.textContent = "Like";
        setLikedState(itemName, false);
      } else {
        button.classList.add("liked");
        button.textContent = "Liked";
        setLikedState(itemName, true);
      }
    });

    // Check if the item is in the likedItems array and update its appearance
    if (likedItems.includes(itemName)) {
      button.classList.add("liked");
      button.textContent = "Liked";
    }
  });
});
