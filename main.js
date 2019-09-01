const lightSwitch = document.querySelector("footer > button");
const body = document.querySelector("body");

lightSwitch.addEventListener("click", () => {
  const state = body.getAttribute("data-lights") === "off" ? "on" : "off";
  lightSwitch.innerText = state === "off" ? "Light" : "Dark";
  body.setAttribute("data-lights", state);
});
