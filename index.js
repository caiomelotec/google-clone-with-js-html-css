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
  // generate a random number
  const randomNumber = Math.floor(Math.random() * texts.length);

  console.log(randomNumber);
  // Create a new <style> element
  const styleElement = document.createElement("style");

  // Define the CSS rules
  let cssRules = `.btn.test-completed::before {content: "${texts[randomNumber]}";}`;

  // Set the CSS rules inside the <style> element
  styleElement.appendChild(document.createTextNode(cssRules));
  // Append the <style> element to the <head> section of the document
  document.head.appendChild(styleElement);
}
