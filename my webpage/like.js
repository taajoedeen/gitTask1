document.addEventListener("DOMContentLoaded", function () {
  const likedItems = JSON.parse(localStorage.getItem("likedItems")) || [];

  function setLikedState(itemName, isLiked) {
    const index = likedItems.indexOf(itemName);
    if (isLiked && index === -1) {
      likedItems.push(itemName);
    } else if (!isLiked && index !== -1) {
      likedItems.splice(index, 1);
    }
    localStorage.setItem("likedItems", JSON.stringify(likedItems));
  }

  const likeButtons = document.querySelectorAll(".like-button");

  likeButtons.forEach((button) => {
    const itemName = button.getAttribute("data-item-name");
    button.addEventListener("click", function () {
      const isLiked = button.classList.contains("liked");

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

    if (likedItems.includes(itemName)) {
      button.classList.add("liked");
      button.textContent = "Liked";
    }
  });
});
