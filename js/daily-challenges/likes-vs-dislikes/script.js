// JavaScript to handle button presses
document.addEventListener("DOMContentLoaded", function () {
  // Get buttons and result display
  const likeBtn = document.getElementById("likeBtn");
  const dislikeBtn = document.getElementById("dislikeBtn");
  const result = document.getElementById("result");

  // Initial state
  let state = {
    like: false,
    dislike: false,
  };

  // Function to update the displayed state
  function updateDisplay() {
    if (state.like) {
      result.textContent = "You liked this video!";
      result.classList = "text-green-500";
    } else if (state.dislike) {
      result.textContent = "You disliked this video!";
      result.classList = "text-red-500";
    } else {
      result.textContent = "You haven't reacted yet!";
      result.classList = "text-gray-800";
    }
  }

  // Event listener for Like button
  likeBtn.addEventListener("click", function () {
    if (state.like) {
      // Undo the like
      state.like = false;
    } else {
      // Like the video, undo dislike if it was active
      state.like = true;
      state.dislike = false;
    }
    updateDisplay();
  });

  // Event listener for Dislike button
  dislikeBtn.addEventListener("click", function () {
    if (state.dislike) {
      // Undo the dislike
      state.dislike = false;
    } else {
      // Dislike the video, undo like if it was active
      state.dislike = true;
      state.like = false;
    }
    updateDisplay();
  });

  // Set initial display state
  updateDisplay();
});
