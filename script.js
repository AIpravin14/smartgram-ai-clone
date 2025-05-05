function generateCaption() {
  const captions = [
    "Chasing sunsets and dreams!",
    "Good vibes only.",
    "Lost in the moment.",
    "Exploring the unexplored.",
    "Making memories one click at a time!"
  ];
  const randomIndex = Math.floor(Math.random() * captions.length);
  document.getElementById("captionResult").innerText = captions[randomIndex];
}
