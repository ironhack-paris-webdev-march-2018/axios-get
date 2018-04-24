const list = document.querySelector(".poke-list");
const form = document.querySelector(".catch-form");
const input = document.querySelector(".number-input");

getPokemon(160);

form.onsubmit = function (event) {
  // prevent the form reload
  event.preventDefault();

  const number = input.value;
  getPokemon(number);
};

function getPokemon (pokeNumber) {
  axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeNumber}/`)
    .then((response) => {
      console.log("Axios RESPONSE");
      console.log(response.data);

      const { name, sprites } = response.data;

      const newLi = document.createElement("li");
      newLi.innerHTML = `
        <h2>${name}</h2>
        <img src="${sprites.front_default}" />`;
      list.appendChild(newLi);
    })
    .catch((err) => {
      console.log("ERROR!");
      console.log(err);
    });
}
