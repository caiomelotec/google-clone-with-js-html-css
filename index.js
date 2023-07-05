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
  // select the <style> element
  const styleElement = document.querySelector("style");
  // generate a number from 0 to the size of the array so to 6
  let randomNumber = Math.floor(Math.random() * texts.length);
  // create the css rules
  let cssRules = `#btn-glück::before {content: "${texts[randomNumber]}";}`;
  // insert the rules inside the <style> elemtent
  styleElement.innerText = cssRules;
}
