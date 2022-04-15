const requestURL = "./data.json";
const cards = document.querySelector(".cards");

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    //uses json() method
    console.table(jsonObject); // temporary checking for valid response and data parsing
    const business = jsonObject;
    business.forEach(displayBusiness);
  });

function displayBusiness(business) {
  // Create elements to add to the document
  let card = document.createElement("section");
  card.setAttribute("class", "dicard");
  let h2 = document.createElement("h2");
  let p = document.createElement("p");
  p.setAttribute("class", "diaddress");
  let p1 = document.createElement("p");
  p1.setAttribute("class", "diphone");
  let p2 = document.createElement("p");
  p2.setAttribute("class", "diwebpage");
  let img = document.createElement("img");
  img.setAttribute("src", business.image)
  console.log(business)


  h2.textContent = `${business.name}`;
  p.innerHTML = `${business.address}`;
  p1.innerHTML = `${business.phone}`;
  p2.innerHTML = `${business.website}`;


  // Add/append the section(card) with the h2 element
  card.appendChild(img);
  card.appendChild(h2);
  card.appendChild(p);
  card.appendChild(p1);
  card.appendChild(p2);

  // Add/append the existing HTML div with the cards class with the section(card)
  document.querySelector("div.cards").appendChild(card);
}