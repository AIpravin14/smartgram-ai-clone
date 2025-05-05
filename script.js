function generateCaption() {
  const captions = [
    "Lost in the moment.",
    "Sunkissed and carefree.",
    "Vibes speak louder than words.",
    "Good energy is contagious.",
    "Smile big, laugh often.",
    "Dream big. Post bigger.",
    "This is my kind of perfect.",
    "Slaying every pixel.",
    "Pure magic in every shot."
  ];

  const randomIndex = Math.floor(Math.random() * captions.length);
  const caption = captions[randomIndex];

  document.getElementById("captionResult").innerText = caption;
  document.getElementById("captionSection").classList.remove("hidden");
}
