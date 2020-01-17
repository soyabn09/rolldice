function throwdice() {
  var randomdice = Math.floor(Math.random() * 6 + 1);
  document
    .getElementById("imageLocation")
    .setAttribute(
      "src",
      "../images/d" + randomdice + ".png"
    );
}
