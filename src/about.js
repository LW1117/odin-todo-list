const contentContainer = document.getElementById("content");

const heading1 = document.createElement("h2");
const heading2 = document.createElement("h2");
const paragraph = document.createElement("h2");

heading1.innerText = "Follow Us";
heading2.innerText = "Stay Connected";
paragraph.innerText =
  "Get the latest updates on our menu, events, and exclusive offers by following us on social media. We love sharing behind-the-scenes glimpses of our kitchen, special features, and more!";

export function about() {
  contentContainer.innerText = "";
  contentContainer.appendChild(heading1);
  contentContainer.appendChild(heading2);
  contentContainer.appendChild(paragraph);
}
