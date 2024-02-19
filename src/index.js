
console.log(data);

//You can start simple and just render a single 
//pokemon card from the first element
console.log(data[0]);

//cardcontainer
const cardContainer = document.createElement("ul");
cardContainer.classList.add("card-container");
document.body.appendChild(cardContainer);

//iterate through all cards
for (let i = 0; i < data.length; i++){
    const cardListItem = document.createElement("li");
    cardListItem.classList.add("card");

// Display the name of the Pokemon
const pokemonName = document.createElement("h2");
pokemonName.classList.add("card--title");
pokemonName.textContent = data[i].name;
cardListItem.appendChild(pokemonName);

//display the image
const pokemonImage = document.createElement("img");
pokemonImage.classList.add("card--img");
pokemonImage.src = data[i].sprites.other["official-artwork"].front_default;
pokemonImage.width = "256";
pokemonImage.alt = data[i].name;
cardListItem.appendChild(pokemonImage);

//stats
const statsList = document.createElement("ul");
statsList.classList.add("card--text");

data[i].stats.forEach(stats => {
    const statItem = document.createElement("li");
    statItem.textContent = `${stats.stat.name.toUpperCase()}: ${stats.base_stat}`;
    statsList.appendChild(statItem);
});

cardListItem.appendChild(statsList);
cardContainer.appendChild(cardListItem);

//additional styling for the layout
const cardWidth = (100 / 3) + '%';
cardListItem.style.width = cardWidth;
cardListItem.style.float = 'left';
cardListItem.style.boxSizing = 'border-box';
}