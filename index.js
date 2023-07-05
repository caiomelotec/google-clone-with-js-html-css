const texts = [
  "Lieber was zu essen",
  "Lieber was Spannendes",
  "Heute lieber Kunst",
  "Heute lieber Trends",
  "Heute lieber Spiele",
  "Heute lieber Sternstunden",
  "Heute lieber Doodles",
];

function selectText() {
  const styleElement = document.querySelector("style");
  let randomNumber = Math.floor(Math.random() * texts.length);
  let cssRules = `#btn-glück::before {content: "${texts[randomNumber]}";}`;
  styleElement.innerText = cssRules;
}
