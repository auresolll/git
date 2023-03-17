var container = document.querySelector(".container");
function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
for (var index = 0; index <= 20; index++) {
    var url = "https://pokeapi.co/api/v2/pokemon/".concat(getRandomArbitrary(0, 20));
    fetch(url, {
        method: "GET"
    })
        .then(function (response) { return response.json(); })
        .then(function (response) {
        console.log(response);
        var _html = "\n      <div class=\"block\">\n      <p>".concat(response.id, "</p>\n      <img\n        src=\"").concat(response.sprites.back_default, "\"\n        width=\"100%\"\n        height=\"100%\"\n      />\n    </div>\n      ");
        container === null || container === void 0 ? void 0 : container.insertAdjacentHTML("beforeend", _html);
    });
}
