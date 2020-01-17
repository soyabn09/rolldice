function throwdice() {
  var randomdice = Math.floor(Math.random() * 6 + 1);
  document
    .getElementById("imageLocation")
    .setAttribute(
      "src",
      "https://cdn.glitch.com/63106535-e105-42c9-8ec5-e00e3d6ac851%2Fd1.png?1544998233632"
    );
}
