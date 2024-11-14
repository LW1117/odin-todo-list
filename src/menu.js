const contentContainer = document.getElementById("content");

const heading = document.createElement("h1");

const unorderedList = document.createElement("ul");
let listItems = [];
for (let i = 0; i < 6; i++) {
  listItems.push(document.createElement("li"));
}

heading.innerText = "Menu";

listItems[0].innerText = "Beef Burger";
listItems[1].innerText = "Crispy Chicken Burger";
listItems[2].innerText = "Beef Sub";
listItems[3].innerText = "Chicken Pizza";
listItems[4].innerText = "Beef Pizza";
listItems[5].innerText = "Mixed Pizza";

for (let i = 0; i < 6; i++) {
  unorderedList.appendChild(listItems[i]);
}

export function menu() {
  contentContainer.innerText = "";
  contentContainer.appendChild(heading);
  contentContainer.appendChild(unorderedList);
}
