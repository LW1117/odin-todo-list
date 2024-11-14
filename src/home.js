const contentContainer = document.getElementById("content");

const image = document.createElement("img");
const heading = document.createElement("h1");
const paragraph = document.createElement("p");

image.src =
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
image.alt = "Inside of a restaurant";

heading.innerText = "Restaurant";
paragraph.innerText =
  "From savory appetizers to decadent desserts, our carefully crafted menu features something for everyone. Whether you crave fresh, seasonal flavors or classic comfort foods, we promise you'll find your perfect dish here.";

export function home() {
  contentContainer.innerText = "";
  contentContainer.appendChild(image);
  contentContainer.appendChild(heading);
  contentContainer.appendChild(paragraph);
}
