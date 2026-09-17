const testButton = document.getElementById("test-js");
const message = document.getElementById("js-message");

testButton.addEventListener("click", function () {
  message.textContent = "JavaScript is working successfully!";
  message.hidden = false;
});
