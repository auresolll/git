const container = document.querySelector(".container");
function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

const getURL = (): string => {
  return `https://pokeapi.co/api/v2/pokemon/${getRandomArbitrary(0, 20)}`;
};

const rendedResponse = (response): void => {
  const _html = `
  <div class="block">
  <p>${response.id}</p>
  <img
    src="${response.sprites.back_default}"
    width="100%"
    height="100%"
  />
</div>
  `;

  container?.insertAdjacentHTML("beforeend", _html);
};

for (let index = 0; index <= 20; index++) {
  fetch(getURL(), {
    method: "GET",
  })
    .then((response) => response.json())
    .then((response) => rendedResponse(response));
}
