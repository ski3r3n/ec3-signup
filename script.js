function copyLink(toCopy) {
  // Get the text field

  // Use the modern Clipboard API to write the text to the clipboard
  navigator.clipboard
    .writeText(toCopy)
    .then(() => {
      // Optional: Show a "Copied!" message
      var msg = document.getElementById("copied-msg");

      msg.style.color = "rgba(77, 176, 80, 1)";
      // Hide the message after a short time
      setTimeout(() => {
        msg.style.color = "rgba(0, 0, 0, 0)";
      }, 1500); // 1.5 seconds
    })
    .catch((err) => {
      // Handle potential errors (e.g., if the user denies permission)
      console.error("Copy failed", err);
      alert("Failed to copy link.");
    });
}
