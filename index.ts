// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

function convert(hours, minutes)
{
  var seconds = (hours * 60 * 60)+(minutes * 60);
  return seconds;
}
console.log(convert(1,3));
console.log(convert(2,0));
console.log(convert(0,0));




